import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import FrontendLayout from "./Frontend";
import ProtectedRoute from "../components/Misc/ProtectedRoute";
import NoPageFound from "../components/Misc/NoPageFound";
import { useAuth } from "../context/Auth";

const AppRoutes = () => {
    const { currentUser } = useAuth();

    return (
        <Routes>
            {/* 1. Public Landing Pages (Home, About) */}
            {/* Agar user logged in hai aur landing page par jata hai, toh auto-dashboard redirect karein to stay in workspace */}
            <Route
                path="/*"
                element={currentUser ? <Navigate to="/dashboard" replace /> : <FrontendLayout />}
            />

            {/* 2. Isolated Auth Stack (Login, Register, Forgot Password) */}
            <Route
                path="/auth/*"
                element={currentUser ? <Navigate to="/dashboard" replace /> : <Auth />}
            />

            {/* 3. Fully Protected Dashboard System */}
            <Route
                path="/dashboard/*"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            {/* 4. Global Fallback Error Page */}
            <Route path="*" element={<NoPageFound />} />
        </Routes>
    );
};

export default AppRoutes;