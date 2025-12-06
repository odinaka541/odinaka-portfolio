"use client";

import { motion } from "framer-motion";

interface BlitzCardProps {
    contentHtml: string;
    date: string;
    index: number;
}

export function BlitzCard({ contentHtml, date, index }: BlitzCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
        >
            <div
                className="prose prose-sm dark:prose-invert max-w-none mb-4 font-medium text-foreground/90"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })}
                </span>
                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
            </div>
        </motion.div>
    );
}
