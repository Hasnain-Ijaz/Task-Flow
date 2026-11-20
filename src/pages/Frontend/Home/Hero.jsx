import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Hero = () => (
    <div className="text-center py-5">
        <h1 className="text-white display-3 font-weight-bold">Organize Your Life.</h1>
        <p className="text-muted lead mb-4">The most premium way to manage your tasks effortlessly.</p>
        <Link to="/auth/register"><Button type="primary" size="large">Get Started Now</Button></Link>
    </div>
);
export default Hero;