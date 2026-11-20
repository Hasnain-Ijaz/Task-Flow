import React from "react";
import { useAuth } from "../../../context/Auth";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Profile = () => {
    const { currentUser } = useAuth();

    return (
        <div className="premium-card p-5 text-center" style={{ maxWidth: "400px", margin: "auto" }}>
            <Avatar size={100} icon={<UserOutlined />} style={{ background: "#4f46e5", marginBottom: "20px" }} />
            <h3 className="text-white">{currentUser.email}</h3>
            <p className="text-muted">User ID: {currentUser.uid}</p>
        </div>
    );
};

export default Profile;