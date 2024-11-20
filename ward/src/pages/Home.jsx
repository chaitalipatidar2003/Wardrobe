import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../AuthContext";

const Home = () => {
  const { user, setUser, profile, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleGetStarted = () => {
    if (profile) {
      navigate("/Create");
    } else {
      login();
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
            <img src={profile.picture} alt="Profile" className="w-12 h-12 rounded-full" />
            <p className="text-gray-800 font-medium mt-1">Welcome, {profile.name}!</p>
          </div>
        ) : null}
        <button
          onClick={handleGetStarted}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
          {profile ? "Get Started" : "Sign In with Google to Get Started"}
        </button>
      </div>
    </div>
  );
};

export default Home;
