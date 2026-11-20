import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { showToast } from "../../../config/global";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, values.email);
            showToast("success", "Password reset link sent! Please check your email inbox.");
        } catch (error) {
            showToast("error", error.message.replace("Firebase:", ""));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", padding: "20px" }}>
            <div className="premium-card p-4 p-sm-5" style={{ width: "100%", maxWidth: "450px" }}>
                <div className="mb-4">
                    <Link to="/auth/login" className="d-flex align-items-center" style={{ color: "#4f46e5", gap: "6px", fontSize: "0.9rem" }}>
                        <ArrowLeftOutlined /> Back to Login
                    </Link>
                </div>

                <div className="text-center mb-4">
                    <h2 className="text-white font-weight-bold mb-2">Reset Password</h2>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>Enter your email and we'll send you a recovery link.</p>
                </div>

                <Form name="forgot_password_form" layout="vertical" onFinish={onFinish} requiredMark={false}>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please enter a valid email!" }
                        ]}
                    >
                        <Input prefix={<MailOutlined className="text-muted" />} placeholder="Email Address" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                            Send Reset Link
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPassword;