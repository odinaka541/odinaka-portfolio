"use client";

import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";

const projects = [
    {
        title: "YouVersion to Notion Daily Sync",
        description: "Automatically syncs the YouVersion Bible Verse of the Day (with image!) to your Notion page every morning.",
        tags: ["Python", "Notion API", "GitHub Actions", "Automation"],
        links: { demo: "#", github: "https://github.com/odinaka541/bible-verse-image-2-notion" },
        image: "/images/projects/youversion-sync.jpg"
    },
    {
        title: "Lemina",
        description: "AI operating system for institutional investors. Features deal sourcing and due diligence automation.",
        tags: ["TSX", "Python", "Database", "AI"],
        links: { demo: "https://lemina.co", github: "#" },
        image: "/images/projects/lemina.png"
    },
    {
        title: "Memora AI",
        description: "AI engine for a meme social media platform. Features a semantic search engine that sorts memes by meaning.",
        tags: ["Python", "AI", "Semantic Search"],
        links: { demo: "https://memoraapp.co/", github: "https://github.com/MemoraHub" },
        image: "/images/projects/memora_ai.png"
    },
    {
        title: "Earnings Scraper",
        description: "Advanced scraper for SEC earnings data with anti-detection measures and robust error handling.",
        tags: ["Python", "Selenium", "Web Scraping"],
        links: { demo: "https://github.com/odinaka541/earnings_scraper", github: "https://github.com/odinaka541/earnings_scraper" },
        image: ""
    },
    {
        title: "AI Contact Automation",
        description: "FastAPI-powered application that analyzes contact relationships using AI-generated summaries of email interactions.",
        tags: ["FastAPI", "Python", "Gemini AI"],
        links: { demo: "https://gmail-contact-conversation-summarizer-production.up.railway.app/", github: "https://github.com/odinaka541/gmail-contact-conversation-summarizer-" },
        image: "/images/projects/contact_automation.png"
    },
    {
        title: "Risk Factor Analysis",
        description: "BERT-based classifier for categorizing financial risk statements from 10-K filings.",
        tags: ["Python", "PyTorch", "BERT", "NLP"],
        links: { demo: "https://github.com/odinaka541/deep-NLP-risk-filing-analysis", github: "https://github.com/odinaka541/deep-NLP-risk-filing-analysis" },
        image: ""
    },
    {
        title: "Financial Text Preprocessing",
        description: "NLP preprocessing pipeline for financial text data with an interactive Streamlit interface.",
        tags: ["Python", "Streamlit", "NLTK"],
        links: { demo: "https://odinaka-flexisaf-intermeddsmod3.streamlit.app/", github: "https://github.com/odinaka541/nlp_text-processing_mod3" },
        image: "/images/projects/text_preprocessing.png"
    },
    {
        title: "Microstructure LSTM",
        description: "LSTM-based model for predicting bid-ask spreads and price direction in high-frequency trading.",
        tags: ["Python", "PyTorch", "LSTM"],
        links: { demo: "https://odinaka-flexisaf-intermeddsmod1-1.streamlit.app/", github: "https://github.com/odinaka541/hft-microstructures-lstm" },
        image: "/images/projects/lstm_trading.png"
    },
    {
        title: "Swapam AI",
        description: "Computer vision system for item analysis and valuation in a student marketplace.",
        tags: ["Python", "FastAPI", "OpenAI CLIP"],
        links: { demo: "https://swap-am-kappa.vercel.app/", github: "https://github.com/swapam-ai" },
        image: "/images/projects/swapam_ai.png"
    },
    {
        title: "Ebenezer AMA",
        description: "Portfolio website for a client.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        links: { demo: "https://pace-website-teal.vercel.app", github: "#" },
        image: "/images/projects/ebenezer.png"
    },
    {
        title: "Telegram AI Bot",
        description: "Telegram bot that analyzes Excel sheets with conversational AI.",
        tags: ["Python", "Telegram API", "Pandas"],
        links: { demo: "https://t.me/lemina_data_bot", github: "#" },
        image: "/images/projects/telegram_bot.png"
    }
];

const experience = [
    {
        role: "Founding Engineer",
        company: "Lemina",
        description: "Building an AI-native operating system for investment professionals. Leading architecture of document intelligence systems.",
    },
    {
        role: "Freelance AI Engineer",
        company: "Self-Employed",
        description: "Building robust backend systems and integrating advanced AI capabilities for diverse clients.",
    },
    {
        role: "AI/ML Engineer",
        company: "Memora",
        description: "Leading the development of machine learning systems for automated image data analysis and prediction.",
    },
    {
        role: "Data Science Consultant",
        company: "International NGO",
        description: "Developed web scraping automation scripts using Python to streamline data collection processes.",
    },
    {
        role: "Lead Instructor",
        company: "Eureka Financial Academy",
        description: "Designed and delivered curriculum on blockchain technology and investment strategies.",
    }
];

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-black text-[#E5E5E5] pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Header */}
                <section className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10vw] leading-[0.9] font-bold tracking-tighter text-white"
                    >
                        WORKS &<br />EXPERIENCE
                    </motion.h1>
                    <p className="text-xl text-neutral-400 max-w-2xl font-light">
                        A curated collection of projects exploring the intersection of AI, Finance, and Systems Engineering.
                    </p>
                    <p className="text-neutral-500 max-w-xl text-sm italic">
                        some of them are hobby projects for problems i have personally had. i just enjoy building.
                    </p>
                </section>

                {/* Projects Grid */}
                <section className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </section>

                {/* Experience List - Minimal Table Style */}
                <section className="border-t border-neutral-800 pt-24">
                    <h2 className="text-4xl font-bold mb-16 tracking-tight">CAREER HISTORY</h2>
                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-neutral-900 last:border-0 hover:opacity-100 opacity-60 hover:opacity-100 transition-opacity duration-500">
                                <div>
                                    <h3 className="text-2xl font-medium text-white">{item.company}</h3>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl text-white">{item.role}</h4>
                                    <p className="text-neutral-400 leading-relaxed font-light">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
