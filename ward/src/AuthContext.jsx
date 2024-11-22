import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  // Check for token in localStorage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      fetchUserProfile(storedToken);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(response.data);
      saveUserToBackend(response.data); // Save user data to backend
    } catch (error) {
      console.error("Error fetching user profile:", error);
      logOut(); // Clear invalid data if token is expired
    }
  };

  const saveUserToBackend = async (userInfo) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/adduser", {
        name: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture,
      });
      console.log("User saved successfully at authcontext:", response.data);
    } catch (error) {
      console.error("Failed to save user at authcontext:", error);
    }
  };

  const logOut = () => {
    googleLogout(); // Clear Google authentication
    setProfile(null); // Clear user profile
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/"); // Redirect to home
  };

  return (
    <AuthContext.Provider value={{ profile, setProfile, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
