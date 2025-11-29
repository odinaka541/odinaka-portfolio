"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ReflectiveTextProps {
    text: string;
    className?: string;
}

export function ReflectiveText({ text, className }: ReflectiveTextProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

    return (
        <motion.h1
            ref={ref}
            className={cn(
                "bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.slate.400),theme(colors.white),theme(colors.slate.400),theme(colors.white))] bg-[length:200%_auto]",
                className
            )}
            style={{ backgroundPosition }}
        >
            {text}
        </motion.h1>
    );
}
