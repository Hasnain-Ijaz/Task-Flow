import React from "react";
import { Menu, Button } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAuth } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../config/global";

const Sidebar = ({ collapsed, setCollapsed, currentView, setCurrentView }) => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            showToast("success", "Logged out successfully!");
            navigate("/auth/login");
        } catch (error) {
            showToast("error", error.message);
        }
    };

    const menuItems = [
        { key: "home", icon: <HomeOutlined />, label: "Dashboard Home" },
        { key: "profile", icon: <UserOutlined />, label: "User Profile" },
    ];

    return (
        <div
            className="premium-card d-flex flex-column justify-content-between p-3 m-2"
            style={{
                width: collapsed ? "80px" : "260px",
                transition: "all 0.3s ease",
                height: "calc(100vh - 40px)",
                position: "sticky",
                top: "20px"
            }}
        >
            <div>
                {/* Toggle Button */}
                <div className="d-flex justify-content-end mb-4">
                    <Button
                        type="text"
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ color: "#fff" }}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    />
                </div>

                {/* Brand/Heading */}
                {!collapsed && (
                    <div className="px-3 mb-4">
                        <h5 className="text-white m-0 font-weight-bold" style={{ letterSpacing: "1px" }}>WORKSPACE</h5>
                        <small className="text-muted">Premium Panel</small>
                    </div>
                )}

                {/* Menu Navigation */}
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[currentView]}
                    onClick={(e) => setCurrentView(e.key)}
                    style={{ background: "transparent", border: "none" }}
                    items={menuItems}
                />
            </div>

            {/* Logout at Bottom */}
            <Button
                type="text"
                danger
                icon={<LogoutOutlined />}
                className="w-100 d-flex align-items-center justify-content-center"
                onClick={handleLogout}
                style={{ gap: collapsed ? "0px" : "8px" }}
            >
                {!collapsed && "Logout"}
            </Button>
        </div>
    );
};

export default Sidebar;