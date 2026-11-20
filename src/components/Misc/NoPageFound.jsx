import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NoPageFound = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="premium-card p-5 text-center" style={{ maxWidth: "500px", width: "90%" }}>
                <Result
                    status="404"
                    title={<h1 style={{ color: "#fff", fontSize: "4rem", margin: 0 }}>404</h1>}
                    subTitle={<p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>Oops! The page you are looking for does not exist.</p>}
                    extra={
                        <Button type="primary" size="large" onClick={() => navigate("/")}>
                            Back to Dashboard
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default NoPageFound;