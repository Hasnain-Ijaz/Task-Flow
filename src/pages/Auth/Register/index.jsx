import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../../context/Auth";
import { showToast } from "../../../config/global";

const Register = () => {
    const { registerUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await registerUser(values.email, values.password);
            showToast("success", "Account created successfully! Welcome aboard.");
            navigate("/");
        } catch (error) {
            showToast("error", error.message.replace("Firebase:", ""));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", padding: "20px" }}>
            <div className="premium-card p-4 p-sm-5" style={{ width: "100%", maxWidth: "450px" }}>
                <div className="text-center mb-4">
                    <h2 className="text-white font-weight-bold mb-2">Create Account</h2>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>Join us and take control of your daily workflow.</p>
                </div>

                <Form name="register_form" layout="vertical" onFinish={onFinish} requiredMark={false}>
                    <Form.Item
                        name="fullName"
                        rules={[{ required: true, message: "Please input your full name!" }]}
                    >
                        <Input prefix={<UserOutlined className="text-muted" />} placeholder="Full Name" size="large" />
                    </Form.Item>

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
                        rules={[
                            { required: true, message: "Please input your password!" },
                            { min: 6, message: "Password must be at least 6 characters!" }
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="text-muted" />} placeholder="Password" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                            Create Account
                        </Button>
                    </Form.Item>
                </Form>

                <p className="text-center text-muted mt-4 mb-0" style={{ fontSize: "0.9rem" }}>
                    Already have an account? <Link to="/auth/login" style={{ color: "#4f46e5" }}>Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;