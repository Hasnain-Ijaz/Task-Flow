import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "./Home";
import About from "./About";

const FrontendLayout = () => {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            {/* Dynamic Top Navbar */}
            <Header />

            {/* Main Screen Views */}
            <main className="flex-grow-1 container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>

            {/* Modern Footer Layer */}
            <Footer />
        </div>
    );
};

export default FrontendLayout;