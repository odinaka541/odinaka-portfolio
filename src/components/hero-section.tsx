"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ReflectiveText } from "@/components/reflective-text";

export function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image - TON 618 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/ton-618-v2.png"
                    alt="TON 618 Black Hole"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
                {/* Radial Mask for Blending Edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_90%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <ReflectiveText
                        text="odinaka."
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest mb-6 font-bodoni lowercase"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto"
                >
                    ""
                </motion.p>
            </div>
        </section>
    );
}
