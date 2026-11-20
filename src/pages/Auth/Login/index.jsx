import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "../../../context/Auth";
import { showToast } from "../../../config/global";

const Login = () => {
    const { loginUser, loginWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await loginUser(values.email, values.password);
            showToast("success", "Welcome back! Login successful.");
            navigate("/");
        } catch (error) {
            showToast("error", error.message.replace("Firebase:", ""));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            showToast("success", "Logged in with Google successfully!");
            navigate("/");
        } catch (error) {
            showToast("error", error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", padding: "20px" }}>
            <div className="premium-card p-4 p-sm-5" style={{ width: "100%", maxWidth: "450px" }}>
                <div className="text-center mb-4">
                    <h2 className="text-white font-weight-bold mb-2">Welcome Back</h2>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>Manage your tasks efficiently and elegantly.</p>
                </div>

                <Form name="login_form" layout="vertical" onFinish={onFinish} requiredMark={false}>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please enter a valid email!" }
                        ]}
                    >
                        <Input prefix={<MailOutlined className="text-muted" />} placeholder="Email Address" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password prefix={<LockOutlined className="text-muted" />} placeholder="Password" size="large" />
                    </Form.Item>

                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/auth/forgot-password" style={{ color: "#4f46e5", fontSize: "0.85rem" }}>
                            Forgot Password?
                        </Link>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <Divider style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <span className="text-muted" style={{ fontSize: "0.85rem" }}>Or continue with</span>
                </Divider>

                <Button
                    type="default"
                    icon={<GoogleOutlined />}
                    size="large"
                    block
                    onClick={handleGoogleLogin}
                    style={{ background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                    Sign in with Google
                </Button>

                <p className="text-center text-muted mt-4 mb-0" style={{ fontSize: "0.9rem" }}>
                    Don't have an account? <Link to="/auth/register" style={{ color: "#4f46e5" }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;