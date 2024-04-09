import React, { useEffect } from "react";
import "./badge.css";

export interface BadgeProps {
    variant: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    label: string;
    className?: string;
    hoverable: boolean,
    onClick?: (e) => void;
}

const Badge = ({
    variant = "primary",
    label = "Badge",
    className = "",
    hoverable = false,
    onClick = (e) => { }
}: BadgeProps) => {
    return (
        <div className={["drui-badge", `drui-badge--${variant}`, className, hoverable && 'drui-badge--hoverable'].join(' ')} onClick={onClick}>
            {label}
        </div>
    )
}

export default Badge;