"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass rounded-2xl p-6",
                hoverEffect && "glass-hover cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
