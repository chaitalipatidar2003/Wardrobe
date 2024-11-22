import React, { useContext, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { profile, setProfile, logOut } = useContext(AuthContext);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const token = response.access_token;
        localStorage.setItem("token", token); // Save token in localStorage

        // Fetch user profile
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        setProfile(res.data); // Save profile to context
        await saveUserToBackend(res.data); // Save user data to backend
      } catch (error) {
        console.error("Login failed or user fetch error:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const saveUserToBackend = async (userInfo) => {
    try {
      await axios.post("http://localhost:5000/api/users/adduser", {
        name: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture,
      });
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  return (
    <header className="bg-gray-700 text-white py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold">My Wardrobe</h1>
      </div>
      <div>
        {profile ? (
          <div className="flex items-center space-x-2">
            <img src={profile.picture} alt="Profile" className="w-10 h-10 rounded-full" />
            <button onClick={logOut} className="text-red-500">
              Log Out
            </button>
          </div>
        ) : ""}
      </div>
    </header>
  );
};

export default Header;
