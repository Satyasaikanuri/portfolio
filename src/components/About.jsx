import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Cpu, FolderCheck, CheckCircle2, User, Target, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const statIcons = [Award, Code, Cpu, FolderCheck];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 text-xs font-semibold uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Developer Building Modern Web Applications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed"
          >
            <div className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-500" />
                <span>Who I Am & What I Do</span>
              </h3>
              <p>
                I am <strong className="text-slate-900 dark:text-white font-semibold">{portfolioData.personalInfo.fullName}</strong>, a Computer Science student with a strong specialization in Artificial Intelligence and Full-Stack Web Development.
              </p>
              <p>
                My focus lies in building scalable enterprise backends with <strong className="text-brand-600 dark:text-brand-400 font-medium">Java & Spring Boot</strong> alongside responsive, highly interactive frontends using <strong className="text-indigo-600 dark:text-indigo-400 font-medium">React.js and modern Web APIs</strong>.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-brand-500 font-bold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Technical Interests</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Microservices Architecture, REST API Design, Relational Database Modeling (MySQL), Machine Learning Concepts, and Frontend UX Engineering.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-500 font-bold">
                  <Target className="w-4 h-4" />
                  <span>Career Goal</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  To contribute as a key Full Stack Software Engineer in high-impact development teams, creating clean, secure, and maintainable software systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
                Core Competencies & Practices
              </h4>

              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "Clean Code Architecture & SOLID Principles",
                  "Robust RESTful API design with Spring Boot",
                  "Component-Driven Frontend Development with React",
                  "Optimized SQL Querying & Relational Schema Design",
                  "Git Version Control & Agile Collaboration Practices"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-sm hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/60 flex items-center justify-center text-brand-500 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
