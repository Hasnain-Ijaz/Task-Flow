import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Spin } from "antd";

const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    // Premium loading state when checking authentication
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Spin size="large" tip="Securing session..." style={{ color: "#4f46e5" }} />
            </div>
        );
    }

    // Agar user logged in nahi hai, toh login page par redirect karein
    if (!currentUser) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};

export default ProtectedRoute;