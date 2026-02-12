"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#E5E5E5] font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter mix-blend-difference text-white opacity-90">
              i am<br />
              Odinaka.
            </h1>
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 pt-8 md:pt-12">
              <div className="space-y-6 flex-1">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-400 max-w-md">
                  hello, i am <span className="text-white font-medium">odinaka</span>.
                  i enjoy building out intelligent systems and digital experiences. these experiences usually lie at the intersection of finance and tech, but i build whatever i want.
                </p>
                <div className="flex gap-6 pt-4">
                  <Link href="/work" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">
                    View Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="mailto:3odinaka@gmail.com" className="group flex items-center gap-2 text-neutral-400 border-b border-neutral-400 pb-1 hover:text-white hover:border-white transition-all">
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Profile Image - Small Circle */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-neutral-900 border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-700 shrink-0">
                <Image
                  src="/assets/profile.png"
                  alt="Odinaka"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Preview - Minimal Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">SELECTED WORKS</h2>
            <p className="text-neutral-500 max-w-md text-sm">
              some of them are hobby projects for problems i have personally had. i just enjoy building.
            </p>
          </div>
          <Link href="/work" className="text-sm text-neutral-500 hover:text-white transition-colors">See all projects</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {[
            {
              title: "Lemina",
              category: "AI Operating System for Institutional Investors",
              src: "/images/projects/lemina.png"
            },
            {
              title: "Memora AI",
              category: "Semantic Search Engine",
              src: "/images/projects/memora_ai.png"
            },
            {
              title: "YouVersion Sync",
              category: "Automation",
              src: "/images/projects/youversion-sync.jpg"
            }
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer space-y-4">
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden rounded-sm">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
                <div>
                  <h3 className="text-2xl font-medium text-white group-hover:text-neutral-300 transition-colors">{project.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{project.category}</p>
                </div>
                <ArrowRight className="w-5 h-5 -rotate-45 text-neutral-600 group-hover:text-white group-hover:rotate-0 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest sticky top-32 h-fit">Philosophy</h2>
          <div className="space-y-12">
            <p className="text-3xl md:text-5xl leading-tight font-light text-neutral-200">
              "Use the noble reason or the real reason. I prefer the real one."
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-neutral-400 leading-relaxed">
              <p>
                Beyond the code and algorithms, I am a problem solver who sees the world through data.
                I believe that every dataset has a story to tell, and my mission is to uncover it.
              </p>
              <p>
                I love developing software and complex code as much as I do finance. When I'm not training models,
                you can find me exploring the latest in quantitative finance or stargazing.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
