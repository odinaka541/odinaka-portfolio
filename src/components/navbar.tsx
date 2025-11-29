"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
            <nav className="mx-auto max-w-5xl flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white font-bodoni tracking-wide hover:opacity-80 transition-opacity">
                    odinaka
                </Link>

                <ul className="flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));

                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={cn(
                                        "relative text-sm font-medium transition-colors hover:text-white font-bodoni tracking-wider lowercase",
                                        isActive ? "text-white" : "text-white/60"
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
