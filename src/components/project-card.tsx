import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    image?: string;
}

export function ProjectCard({ title, description, tags, links, index, image }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col gap-4"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden rounded-sm border border-neutral-800/50">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                        <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">No Preview</span>
                    </div>
                )}

                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {links.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            className="p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </Link>
                    )}
                    {links.demo && (
                        <Link
                            href={links.demo}
                            target="_blank"
                            className="p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2 border-b border-neutral-800 pb-6 group-hover:border-white/20 transition-colors">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                        {title}
                    </h3>
                    <ArrowRight className="w-5 h-5 -rotate-45 text-neutral-600 group-hover:text-white group-hover:rotate-0 transition-all duration-300" />
                </div>

                <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed max-w-[90%]">
                    {description}
                </p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1">
                    {tags.slice(0, 3).map((tag, i) => (
                        <span key={tag} className="text-xs font-mono text-neutral-600 uppercase">
                            {tag}{i < tags.slice(0, 3).length - 1 && " /"}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
