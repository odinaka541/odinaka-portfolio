"use client";

import { ProjectCard } from "@/components/project-card";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Memora AI Engine",
        description: "Comprehensive multi-modal AI system for image analysis, text extraction, facial recognition and similarity search. Processes images to extract text, generate captions, detect objects and faces, and enables semantic search across indexed content.",
        tags: ["Python", "Sentence Transformers", "FastAPI", "AWS"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "AI Trading Platform",
        description: "Comprehensive research platform for analyzing market patterns using machine learning. Features real-time data processing, backtesting capabilities, and predictive modeling for various asset classes.",
        tags: ["Python", "TensorFlow", "FastAPI", "Pandas", "NumPy"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Conversational AI Data Platform",
        description: "System that allows users upload spreadsheet data, analyse, visualize charts and create or edit spreadsheets, all in natural language.",
        tags: ["NLP", "Pandas", "FastAPI", "NumPy"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "ML Model Deployment Pipeline",
        description: "Automated CI/CD pipeline for machine learning model deployment. Features model versioning, A/B testing, and automated rollback capabilities for production ML systems.",
        tags: ["Python", "Kubernetes", "MLflow", "AWS"],
        links: { demo: "#", github: "#" }
    }
];

const experience = [
    {
        role: "AI/ML Engineer",
        company: "Memora",
        period: "2025 - Present",
        description: "Leading the development of machine learning systems for automated image data analysis and prediction. Building scalable ML pipelines and deploying models to production.",
        achievements: [
            "Architected and optimized AI engine for real-time semantic search across image and GIF datasets, implementing BLIP, CLIP, and YOLO models",
            "Built scalable retrieval system handling high-volume concurrent requests from backend services",
            "Engineered multi-modal processing pipeline supporting diverse image formats"
        ]
    },
    // {
    //     role: "AI/ML Engineer",
    //     company: "Stealth Tech Startup",
    //     period: "2025 - Present",
    //     description: "Developed AI-first data platform enabling natural language interaction with diverse datasets.",
    //     achievements: [
    //         "Led product development from conception to beta, building core platform using Python-based ML infrastructure"
    //     ]
    // },
    {
        role: "Data Science Consultant",
        company: "International NGO",
        period: "2025 - Present",
        description: "Developed web scraping automation scripts using Python to streamline data collection processes.",
        achievements: [
            "Built text summarization pipelines using NLP techniques to process large document volumes",
            "Reduced manual effort by 80% via data pipelines"
        ]
    },
    {
        role: "Lead Instructor",
        company: "Eureka Financial Academy",
        period: "2022 - 2024",
        description: "Designed and delivered comprehensive curriculum on blockchain technology and investment strategies.",
        achievements: [
            "Developed educational frameworks translating complex blockchain concepts into accessible learning modules for 500+ students"
        ]
    }
];

export default function WorkPage() {
    return (
        <div className="relative min-h-screen">
            {/* Under Reconstruction Overlay */}
            <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-auto">
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                <GlassCard className="relative z-10 max-w-md w-full p-8 text-center border-primary/20 shadow-2xl overflow-hidden">
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-6 text-6xl inline-block grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        👨‍🚀
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                    />

                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        i'm as shocked as you this page is currently down.
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        it'll be back online soon.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                        just refresh the page. it might help
                    </div>
                </GlassCard>
            </div>

            {/* Blurred Content */}
            <div className="space-y-24 filter blur-sm pointer-events-none select-none opacity-50">
                {/* Header */}
                <section className="text-center space-y-4 pt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Featured Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        A collection of projects and professional experience demonstrating my expertise in AI, Machine Learning, and Software Engineering.
                    </motion.p>
                </section>

                {/* Projects Grid */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-primary">⚡</span> Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} index={index} />
                        ))}
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 font-bodoni lowercase tracking-wide">
                        professional journey
                    </h2>
                    <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[43px] md:-left-[59px] top-0 w-5 h-5 rounded-full border-4 border-background bg-primary" />

                                <GlassCard className="p-6 md:p-8" hoverEffect>
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                                            <div className="text-primary font-medium">{item.company}</div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mb-4">{item.description}</p>

                                    <ul className="space-y-2">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
