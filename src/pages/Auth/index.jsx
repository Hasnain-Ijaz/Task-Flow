import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

const Auth = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                {/* Fallback route within Auth */}
                <Route path="*" element={<Navigate to="login" replace />} />
            </Routes>
        </div>
    );
};

export default Auth;