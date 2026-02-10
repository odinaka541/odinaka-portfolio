"use client";

import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

const socialLinks = [
    { name: "Resume", href: "/assets/resume.pdf" },
    { name: "X (Twitter)", href: "https://x.com/odinaka541" },
    { name: "GitHub", href: "https://github.com/odinaka541" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/odinaka-agbayi-444572194/" },
];

export function Footer() {
    return (
        <footer className="bg-black text-[#E5E5E5] py-24 px-6 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                <div className="space-y-4">
                    <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Contact</h3>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:3odinaka@gmail.com"
                            className="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors"
                        >
                            3odinaka@gmail.com
                        </a>
                        <CopyButton text="3odinaka@gmail.com" />
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                    <div className="flex gap-8">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium"
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <p className="text-neutral-700 text-xs font-mono">
                        &copy; {new Date().getFullYear()} ODINAKA.
                    </p>
                </div>

            </div>
        </footer>
    );
}
