import { googleLogout } from "@react-oauth/google";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate(); // Hook to navigate

  const logOut = () => {
    googleLogout(); // Clear Google authentication
    setUser(null); // Clear user state
    setProfile(null); // Clear profile state
    navigate("/"); // Redirect to home page
  };
  

  return (
    <AuthContext.Provider value={{ user, setUser, profile, setProfile, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
