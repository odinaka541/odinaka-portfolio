"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

interface BlogCardProps {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    index: number;
}

export function BlogCard({ slug, title, excerpt, date, author, index }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground overflow-hidden">
                            {/* Placeholder avatar or initial */}
                            {author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-semibold text-sm text-foreground">{author}</div>
                            <div className="text-xs text-muted-foreground">{author}</div>
                        </div>
                    </div>
                    <Bookmark className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {new Date(date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        })}
                    </span>
                    <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Post →
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
