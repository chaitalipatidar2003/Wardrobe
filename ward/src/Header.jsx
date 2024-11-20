import React, { useContext, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { user, setUser, profile, setProfile, logOut } = useContext(AuthContext);

  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

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
        ) : (
          <button onClick={login} className="text-black bg-yellow-50 px-3 py-1 shadow-lg">
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
