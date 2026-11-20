import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="m-0 text-center" style={{ color: "#94a3b8", fontSize: "0.85rem", letterSpacing: "0.5px" }}>
      &copy; {currentYear} <strong>Premium Task Manager</strong>. All Rights Reserved. Built with MERN Stack & Firebase.
    </p>
  );
};

export default Copyright;