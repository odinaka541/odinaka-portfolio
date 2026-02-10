"use client";

import { motion } from "framer-motion";

interface BlitzCardProps {
    contentHtml: string;
    date: string;
    index: number;
}

export function BlitzCard({ contentHtml, date, index }: BlitzCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group py-8 border-b border-neutral-900 last:border-0 hover:bg-neutral-900/30 transition-colors rounded-sm px-4 -mx-4"
        >
            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                <div
                    className="prose prose-invert prose-lg max-w-none text-neutral-300 group-hover:text-white transition-colors leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

                <span className="text-xs font-mono text-neutral-600 shrink-0 uppercase tracking-widest pt-2">
                    {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })}
                </span>
            </div>
        </motion.article>
    );
}
