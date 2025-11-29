"use client";

import { useEffect, useState } from "react";

export function SpaceBackground() {
    const [stars, setStars] = useState<{ top: string; left: string; size: string; duration: string; delay: string }[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    size: `${Math.random() * 2 + 1}px`,
                    duration: `${Math.random() * 3 + 2}s`,
                    delay: `${Math.random() * 2}s`,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            {/* Deep Space Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-[#0a0a0a] to-black" />

            {/* Stars */}
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDuration: star.duration,
                        animationDelay: star.delay,
                        opacity: Math.random() * 0.7 + 0.3,
                    }}
                />
            ))}
        </div>
    );
}
