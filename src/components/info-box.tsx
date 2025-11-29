"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";
import { SquigglyArrow } from "@/components/squiggly-arrow";

interface InfoBoxProps {
    title: string;
    children: React.ReactNode;
    align?: "left" | "right";
    className?: string;
    delay?: number;
    showArrow?: boolean;
}

export function InfoBox({ title, children, align = "left", className, delay = 0, showArrow = false }: InfoBoxProps) {
    return (
        <div className={cn("relative flex flex-col mb-12", align === "left" ? "items-start" : "items-end", className)}>
            <div className="w-full max-w-md md:max-w-lg perspective-1000">
                <GlassCard className="p-8 border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                    {/* Alive Reflective Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer pointer-events-none" />

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3 font-orbitron tracking-wide relative z-10">
                        <span className="w-8 h-[2px] bg-primary inline-block" />
                        {title}
                    </h3>
                    <div className="text-gray-300 leading-relaxed font-light relative z-10">
                        {children}
                    </div>
                </GlassCard>
            </div>

            {showArrow && (
                <div className={cn(
                    "mt-4",
                    align === "left" ? "self-end mr-12 md:mr-24" : "self-start ml-12 md:ml-24"
                )}>
                    <SquigglyArrow className={align === "left" ? "rotate-12" : "-rotate-12"} />
                </div>
            )}
        </div>
    );
}
