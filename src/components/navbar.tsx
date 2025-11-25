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
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <nav className="mx-auto max-w-2xl">
                <div className="glass rounded-3xl px-6 py-3 flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4 sm:gap-0">
                    <Link href="/" className="font-bold text-xl text-primary tracking-tight">
                        odinaka
                    </Link>

                    <ul className="flex items-center gap-4 sm:gap-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));

                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            "relative text-sm font-medium transition-colors hover:text-primary",
                                            isActive ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
