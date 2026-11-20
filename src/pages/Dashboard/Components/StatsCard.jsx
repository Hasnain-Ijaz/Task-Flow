import React from "react";

const StatsCard = ({ title, count, icon, color }) => {
    return (
        <div className="col-12 col-sm-4 p-2">
            <div className="premium-card p-4 d-flex justify-content-between align-items-center">
                <div>
                    <p className="text-muted m-0 uppercase font-weight-bold" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
                        {title}
                    </p>
                    <h2 className="text-white m-0 mt-1 font-weight-bold">{count}</h2>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: `${color}20`,
                        color: color,
                        fontSize: "1.5rem"
                    }}
                >
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;