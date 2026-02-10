"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Thoughts", path: "/blog" },
    { name: "Blitz", path: "/blitz" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 mix-blend-difference">
                <nav className="mx-auto max-w-7xl flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-white font-bodoni hover:opacity-70 transition-opacity tracking-tight z-50">
                        ODINAKA.
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className="text-sm font-medium text-white/50 hover:text-white transition-colors uppercase tracking-widest"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white z-50 p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </header>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black border-l border-neutral-900 z-40 p-8 pt-32 shadow-2xl"
                    >
                        <nav className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-bold text-white/80 hover:text-white transition-colors tracking-tight"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="absolute bottom-12 left-8 right-8 text-neutral-500 text-sm font-light">
                            <p>Based in the Cloud.</p>
                            <p>© {new Date().getFullYear()}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
