import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import DashboardHome from "./Home";
import Profile from "./Profile";

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentView, setCurrentView] = useState("home");

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar Navigation */}
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                currentView={currentView}
                setCurrentView={setCurrentView}
            />

            {/* Main Content Area */}
            <div className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
                {currentView === "home" && <DashboardHome />}
                {currentView === "profile" && <Profile />}
            </div>
        </div>
    );
};

export default Dashboard;