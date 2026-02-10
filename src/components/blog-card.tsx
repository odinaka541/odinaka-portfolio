"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        <Link href={`/blog/${slug}`} className="group block">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="py-12 border-b border-neutral-900 group-hover:border-neutral-800 transition-colors"
            >
                <div className="flex flex-col md:flex-row gap-6 md:items-baseline justify-between mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-neutral-400 transition-colors leading-tight tracking-tight">
                        {title}
                    </h3>
                    <span className="text-sm font-mono text-neutral-600 shrink-0 uppercase tracking-widest">
                        {new Date(date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric"
                        })}
                    </span>
                </div>

                <div className="flex justify-between items-end gap-8">
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl line-clamp-2">
                        {excerpt}
                    </p>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
