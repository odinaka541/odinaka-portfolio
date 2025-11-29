"use client";

import { motion } from "framer-motion";

export function ScrollArrows() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 opacity-80">
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.2, 1, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path
                        d="M12 4V20M12 20L6 14M12 20L18 14"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
