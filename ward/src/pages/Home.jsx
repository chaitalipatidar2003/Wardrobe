import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const Home = () => {
  const { profile, setProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenInfo) => {
      try {
        setLoading(true);
            
        // Save token to localStorage
        localStorage.setItem("token", tokenInfo.access_token);
        
        // Fetch user profile
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${tokenInfo.access_token}`,
              Accept: "application/json",
            },
          }
        );

        // Save user data to backend
        saveUserToBackend(response.data);

        // Save profile to context and localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        setProfile(response.data);
        setLoading(false);

        console.log("User Profile:", response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      setLoading(false);
    },
  });


  const handleGetStarted = () => {
    if (profile) {
      navigate("/Create");
    } else {
      login();
    }
  };


  
  const saveUserToBackend = async (userInfo) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/adduser", {
        name: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture,
      });
      
      console.log("User saved successfully at home:", response.data);
    } catch (error) {
      console.error("Failed to save user at home:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Wardrobe Organizer</h1>
        <p className="text-gray-600 mb-6">
          Organize your wardrobe effortlessly! Categorize your clothes, manage their status, and keep your almirah neat and tidy.
        </p>
        {profile ? (
          <div className="flex flex-col items-center justify-center space-x-4 mb-4">
            <img
              src={profile.picture || "/default-avatar.png"}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-gray-800 font-medium mt-1">Welcome, {profile.name}!</p>
          </div>
        ) : null}
        <button
          onClick={handleGetStarted}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
          {loading ? "Signing In..." : profile ? "Get Started" : "Sign In with Google to Get Started"}
        </button>
      </div>
    </div>
  );
};

export default Home;
