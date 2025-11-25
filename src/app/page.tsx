"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              I love data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                and numbers
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I am a passionate Data Scientist and AI Engineer focused on building intelligent systems and scalable software solutions. Currently mastering machine learning and working towards becoming a leading quantitative developer in the financial technology space.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:3odinaka@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-border hover:bg-slate-100 transition-colors shadow-sm"
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 max-w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/assets/profile.png"
                  alt="Odinaka"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                Who I Am
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-1 w-20 bg-primary rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I just am.
                <br />
                Beyond the code and algorithms, I am a problem solver who sees the world through data.
                I believe that every dataset has a story to tell, and my mission is to uncover it.
              </p>
              <p>
                I love developing software, and complex code, as much as I do finance. When I'm not training models, you can find me exploring the latest in quantitative finance or space-gazing.
              </p>
            </motion.div>
          </div>
        </GlassCard>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Projects Completed", value: "3+" },
            { label: "Years of Experience", value: "~1" },
            { label: "Technologies Mastered", value: "6+" },
          ].map((stat, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center py-8"
              hoverEffect
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Machine Learning & AI",
              icon: "🟠",
              desc: "Building intelligent systems with advanced machine learning algorithms and neural networks",
              tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
            },
            {
              title: "Quantitative Finance",
              icon: "🟢",
              desc: "Analyzing financial data and building models to predict market trends",
              tags: ["Python", "Pandas", "NumPy", "SciPy"]
            },
            {
              title: "Backend & Database",
              icon: "🔵",
              desc: "Designing robust backend architectures and managing data efficiently",
              tags: ["Node.js", "PostgreSQL", "MongoDB", "API Design"]
            }
          ].map((skill, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              hoverEffect
              className="h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
