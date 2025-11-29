"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { ScrollArrows } from "@/components/scroll-arrows";
import { InfoBox } from "@/components/info-box";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section - TON 618 */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <HeroSection />
      </div>

      {/* Spacer for Hero */}
      <div className="h-screen flex flex-col justify-end pb-24 pointer-events-none">
        <div className="relative z-10">
          <ScrollArrows />
        </div>
      </div>

      {/* Deep Dive Section */}
      <section className="relative z-10 pt-24 max-w-5xl mx-auto px-4">
        <InfoBox title="first things first..." align="left" delay={0.2} showArrow>
          <p>
            i turned off the auto-caps feature on my phone on a hot, humid and boring day, many summers ago, and it kinda stuck with me. but i assure you, i have a really good grasp of the English language (and a few more, really).<br />
            <em>I'm capable of wonders.</em> see? moving on...
          </p>
        </InfoBox>

        <InfoBox title="now..." align="right" delay={0.4} showArrow>
          <p>
            you are most likely here because you are interested in my work as a software developer. welcome. you can stay for everything else.
          </p>
        </InfoBox>

        <InfoBox title="let's play a game." align="left" delay={0.6}>
          <p>
            i learned something profound. when posed with the question, "why?", everyone usually replies with one of two reasons - the <em>noble</em> reason or the <em>real</em> reason. noble is what you tell everyone else. real is what you know to be true.<br />
            can you figure out mine?
          </p>
        </InfoBox>
      </section>

      {/* Who I Am Section */}
      <section className="max-w-4xl mx-auto relative z-10">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden border-white/10 bg-black/40 backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl"
              >
                <Image
                  src="/assets/profile.png"
                  alt="Odinaka"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white text-center md:text-left font-bodoni tracking-wide lowercase"
              >
                who i am
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                i just am.
                <br />
                beyond the code and algorithms, i am a problem solver who sees the world through data.
                i believe that every dataset has a story to tell, and my mission is to uncover it.
              </p>
              <p>
                i love developing software, and complex code, as much as i do finance. when i'm not training models, you can find me exploring the latest in quantitative finance or stargazing. naturally, you can already tell i love maths and physics a bit too much. but, as of 29-Nov-2025, i am guilty of not solving a single question or studying either subject in <strong><em>TWO WEEKS!</em></strong> damn.
                <br />
                well, it'll change. on to more pressing matters...
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="mailto:3odinaka@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-white font-semibold border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </section>

      {/* Stats Section */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "projects completed (vanity metric, 1/3)", value: "3+" },
            { label: "years of experience (vanity metric, 2/3)", value: "~1" },
            { label: "technologies mastered (vanity metric, 3/3)", value: "6+" },
          ].map((stat, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center py-8 border-white/10 bg-black/40 backdrop-blur-sm"
              hoverEffect
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white font-bodoni lowercase tracking-wide"
        >
          technical expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Machine Learning & AI",
              desc: "i read (well, listened to) Isaac Asimov's Last Question, and i was drawn to the idea of intelligent machines. and since, then, i enjoy building said machines.",
              tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
            },
            {
              title: "Quantitative Finance",
              desc: "i think money makes the world go round. i enjoy the concept of money. moreso, i enjoy applying smart innovative processes to said concept.",
              tags: ["Python", "Pandas", "NumPy", "SciPy"]
            },
            {
              title: "Backend & Database",
              desc: "i just do this for the money. i'm good at it anyways lmao.",
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
              className="h-full flex flex-col border-white/10 bg-black/40 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-1">
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/5 text-sm font-medium text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div >
  );
}
