"use client";

import { motion } from "framer-motion";

interface SquigglyArrowProps {
    className?: string;
}

export function SquigglyArrow({ className }: SquigglyArrowProps) {
    return (
        <div className={`flex justify-center ${className}`}>
            <svg
                width="40"
                height="120"
                viewBox="0 0 40 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
            >
                <motion.path
                    d="M20 0 C 60 40, -20 80, 20 120"
                    stroke="url(#gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                <motion.path
                    d="M15 110 L 20 118 L 25 110"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.3 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="20" y1="0" x2="20" y2="120" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.2" />
                        <stop offset="0.5" stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
