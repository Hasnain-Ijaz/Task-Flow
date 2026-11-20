import React from "react";
import { Tag } from "antd";

const Hero = () => {
    return (
        <div className="text-center py-5 premium-card p-4 p-md-5">
            <h2 className="text-white font-weight-bold mb-3">About This Project</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
                This is a high-fidelity, real-time Task Management application designed to offer a seamless workflow automation experience with a modern dark luxury glassmorphism theme.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                <Tag color="blue">React</Tag>
                <Tag color="geekblue">Vite</Tag>
                <Tag color="orange">Firebase</Tag>
                <Tag color="cyan">Ant Design</Tag>
                <Tag color="purple">Bootstrap</Tag>
                <Tag color="magenta">Sass/SCSS</Tag>
            </div>
        </div>
    );
};

export default Hero;