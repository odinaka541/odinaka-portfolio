"use client";

import { ProjectCard } from "@/components/project-card";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Lemina",
        description: "AI system that helps angel investors and vc firms with their investment careers. Features deal sourcing, due diligence, and network coordination.",
        tags: ["TSX", "Python", "Database", "AI"],
        links: { demo: "https://lemina.co", github: "#" },
        image: "/images/projects/lemina.png"
    },
    {
        title: "Memora AI & Semantic Search",
        description: "AI engine for a meme social media platform that processes uploaded memes to extract intelligence. Features a semantic search engine that sorts memes by meaning and returns semantically similar results.",
        tags: ["Python", "AI", "Semantic Search", "Social Media"],
        links: { demo: "https://memoraapp.co/", github: "https://github.com/MemoraHub" },
        image: "/images/projects/memora_ai.png"
    },
    {
        title: "Selenium Web Scraper",
        description: "Advanced scraper for SEC earnings data with anti-detection measures, robust error handling, and automated data processing. Features comprehensive logging and monitoring capabilities.",
        tags: ["Python", "Selenium", "Web Scraping", "SEC Data"],
        links: { demo: "https://github.com/odinaka541/earnings_scraper", github: "https://github.com/odinaka541/earnings_scraper" },
        image: ""
    },
    {
        title: "AI Contact Automation Tool",
        description: "FastAPI-powered application that analyzes contact relationships using AI-generated summaries of email interactions. Generates realistic conversation histories and provides action recommendations using Google Gemini AI.",
        tags: ["FastAPI", "Python", "Google Gemini AI", "Pandas"],
        links: { demo: "https://gmail-contact-conversation-summarizer-production.up.railway.app/", github: "https://github.com/odinaka541/gmail-contact-conversation-summarizer-" },
        image: "/images/projects/contact_automation.png"
    },
    {
        title: "Financial Risk Factor Analysis",
        description: "BERT-based classifier for categorizing financial risk statements from 10-K filings. Uses deep learning to categorize risks into Operational, Financial, Market, Regulatory, and Technology sectors.",
        tags: ["Python", "PyTorch", "BERT", "NLP"],
        links: { demo: "https://github.com/odinaka541/deep-NLP-risk-filing-analysis", github: "https://github.com/odinaka541/deep-NLP-risk-filing-analysis" },
        image: ""
    },
    {
        title: "Financial Text Preprocessing",
        description: "NLP preprocessing pipeline for financial text data with an interactive Streamlit interface. Implements URL removal, punctuation cleaning, and lemmatization for financial datasets.",
        tags: ["Python", "Streamlit", "NLTK", "NLP"],
        links: { demo: "https://odinaka-flexisaf-intermeddsmod3.streamlit.app/", github: "https://github.com/odinaka541/nlp_text-processing_mod3" },
        image: "/images/projects/text_preprocessing.png"
    },
    {
        title: "High-Frequency Microstructure LSTM",
        description: "LSTM-based model for predicting bid-ask spreads and price direction in high-frequency trading environments. Uses simulated market microstructure data to model volatility and order flow.",
        tags: ["Python", "PyTorch", "LSTM", "Trading"],
        links: { demo: "https://odinaka-flexisaf-intermeddsmod1-1.streamlit.app/", github: "  https://github.com/odinaka541/hft-microstructures-lstm" },
        image: "/images/projects/lstm_trading.png"
    },
    {
        title: "Swapam AI Microservice",
        description: "Computer vision system for item analysis and valuation in a student marketplace. Uses OpenAI CLIP for zero-shot categorization and condition assessment with a trust-rooted valuation system.",
        tags: ["Python", "FastAPI", "OpenAI CLIP", "Computer Vision"],
        links: { demo: "https://swap-am-kappa.vercel.app/", github: "https://github.com/swapam-ai" },
        image: "/images/projects/swapam_ai.png"
    },
    {
        title: "Telegram AI Bot",
        description: "Telegram bot that analyzes Excel sheets with conversational AI. Allows users to edit spreadsheets, generate content, and perform analysis using natural language commands.",
        tags: ["Python", "Telegram API", "Pandas", "NLP"],
        links: { demo: "https://t.me/lemina_data_bot", github: "#" },
        image: "/images/projects/telegram_bot.png"
    }
];

const experience = [
    {
        role: "Freelance AI & Backend Engineer",
        company: "Self-Employed",
        period: "2024 - Present",
        description: "Specializing in building robust backend systems and integrating advanced AI capabilities for diverse clients. Delivering high-performance solutions for data processing, automation, and intelligent systems.",
        achievements: [
            "Architected and deployed scalable FastAPI microservices for AI-powered applications",
            "Implemented custom RAG pipelines and LLM integrations for specialized business use cases",
            "Conducted technical workshops and mentoring sessions on Python backend development and AI fundamentals"
        ]
    },
    {
        role: "AI/ML Engineer",
        company: "Memora",
        period: "2025 - Present",
        description: "Leading the development of machine learning systems for automated image data analysis and prediction. Building scalable ML pipelines and deploying models to production.",
        achievements: [
            "Architected and optimized AI engine for real-time semantic search across image and GIF datasets",
            "Built scalable retrieval system handling high-volume concurrent requests from backend services",
            "Engineered multi-modal processing pipeline supporting diverse image formats"
        ]
    },
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


            {/* Content */}
            <div className="space-y-24">
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
                        {/* Gradient Line Overlay */}
                        <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline Marker */}
                                <div className="absolute -left-[43px] md:-left-[59px] top-0 flex items-center justify-center w-5 h-5">
                                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] z-10" />
                                    <div className="absolute w-5 h-5 rounded-full bg-primary/20 animate-pulse" />
                                </div>

                                <GlassCard className="p-6 md:p-8" hoverEffect>
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground font-bodoni tracking-wide">{item.role}</h3>
                                            <div className="text-primary font-medium text-sm uppercase tracking-wider mt-1">{item.company}</div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/20">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                                    <ul className="space-y-3">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 shadow-[0_0_5px_rgba(var(--primary-rgb),0.3)]" />
                                                <span className="leading-relaxed">{achievement}</span>
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
