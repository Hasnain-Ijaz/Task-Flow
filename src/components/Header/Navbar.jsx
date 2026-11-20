import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Button, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { showToast, APP_NAME } from "../../config/global";

const Navbar = () => {
    const { currentUser, logoutUser } = useAuth();
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

    // Profile Dropdown Menu
    const profileMenu = (
        <Menu theme="dark" style={{ background: "#1e1b4b", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Menu.Item key="email" disabled style={{ color: "#94a3b8" }}>
                {currentUser?.email}
            </Menu.Item>
            <Menu.Divider style={{ borderColor: "rgba(255,255,255,0.1)" }} />
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <nav className="navbar navbar-expand-lg premium-card sticky-top m-3 px-4 py-2" style={{ borderRadius: "12px" }}>
            <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                {/* Brand Logo */}
                <Link to="/" className="navbar-brand d-flex align-items-center text-white font-weight-bold m-0" style={{ gap: "8px", fontSize: "1.25rem", letterSpacing: "0.5px" }}>
                    <CheckSquareOutlined style={{ color: "#4f46e5", fontSize: "1.5rem" }} />
                    <span>{APP_NAME}</span>
                </Link>

                {/* Dynamic Actions */}
                <div className="d-flex align-items-center">
                    {currentUser ? (
                        <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                            <span className="text-muted d-none d-sm-inline" style={{ fontSize: "0.9rem" }}>
                                Welcome, <strong className="text-white">{currentUser.displayName || "User"}</strong>
                            </span>
                            <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomRight">
                                <Avatar
                                    src={currentUser.photoURL}
                                    icon={!currentUser.photoURL && <UserOutlined />}
                                    style={{ backgroundColor: "#4f46e5", cursor: "pointer", border: "2px solid rgba(255,255,255,0.2)" }}
                                    size="large"
                                />
                            </Dropdown>
                        </div>
                    ) : (
                        <div className="d-flex" style={{ gap: "10px" }}>
                            <Link to="/auth/login">
                                <Button type="text" style={{ color: "#fff" }}>Sign In</Button>
                            </Link>
                            <Link to="/auth/register">
                                <Button type="primary">Get Started</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;