import React from "react";
import "./badge.css";

export interface BadgeProps {
    variant: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    label: string;
}

const Badge = ({
    variant = "primary",
    label = "Badge",
}: BadgeProps) => {
    return (
        <div className={["drui-badge", `drui-badge--${variant}`].join(' ')}>
            {label}
        </div>
    )
}

export default Badge;