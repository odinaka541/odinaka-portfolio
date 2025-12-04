import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
    index: number;
    image?: string;
}

export function ProjectCard({ title, description, tags, links, index, image }: ProjectCardProps) {
    return (
        <GlassCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full overflow-hidden border-0 bg-white/50 dark:bg-slate-900/50"
            hoverEffect
        >
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors border border-primary/10">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
                        <div className="relative z-10 text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors font-bodoni">
                            🟠
                        </div>
                        {/* Abstract Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                    </div>
                )}
            </div>

            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-bodoni tracking-wide">
                    {title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 line-clamp-3 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-medium bg-primary/5 text-primary border border-primary/10"
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
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
                        >
                            Live Demo
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    )}
                    {links.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-muted/80 hover:text-foreground transition-colors border border-border/50"
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
