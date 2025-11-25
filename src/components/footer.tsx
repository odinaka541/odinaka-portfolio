"use client";

import Link from "next/link";
import { Mail, FileText, Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
    {
        name: "Email",
        href: "mailto:3odinaka@gmail.com",
        icon: Mail,
    },
    {
        name: "Resume",
        href: "/assets/resume.pdf",
        icon: FileText,
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/odinaka541", // Placeholder or derived from context if available
        icon: Twitter,
    },
    {
        name: "GitHub",
        href: "https://github.com/odinaka541",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/odinaka-agbayi-444572194/", // Placeholder
        icon: Linkedin,
    },
];

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl mt-auto">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socialLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} Odinaka. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
