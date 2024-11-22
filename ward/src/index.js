// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { AuthProvider } from "./AuthContext"; // Import AuthContext
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
     <GoogleOAuthProvider clientId={process.env.REACT_APP_OTH_GOOGLE}>
       <BrowserRouter>
         <AuthProvider>
           <App />
         </AuthProvider>
       </BrowserRouter>
     </GoogleOAuthProvider>
   </React.StrictMode>
 );
