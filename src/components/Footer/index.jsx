import React from "react";
import Copyright from "./copyright";

const Footer = () => {
    return (
        <footer className="premium-card m-3 p-3 mt-auto" style={{ borderRadius: "12px" }}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 text-md-center">
                        <Copyright />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;