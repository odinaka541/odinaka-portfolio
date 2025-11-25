"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
    index: number;
}

export function ProjectCard({ title, description, tags, links, index }: ProjectCardProps) {
    return (
        <GlassCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full overflow-hidden border-0 bg-white/50 dark:bg-slate-900/50"
            hoverEffect
        >
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {title.charAt(0)}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto">
                    {links.demo && (
                        <Link
                            href={links.demo}
                            target="_blank"
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                            Live Demo
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    )}
                    {links.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-muted/80 hover:text-foreground transition-colors"
                        >
                            Code
                            <Github className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </GlassCard>
    );
}
