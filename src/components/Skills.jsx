import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Coffee,
  Code2,
  Database,
  FileCode,
  Palette,
  Atom,
  Layout,
  FileJson,
  Globe,
  Sparkles,
  Server,
  Cpu,
  Layers,
  HardDrive,
  Search,
  GitBranch,
  Github,
  Terminal,
  Send,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Coffee: Coffee,
  Code2: Code2,
  Database: Database,
  FileCode: FileCode,
  Palette: Palette,
  Atom: Atom,
  Layout: Layout,
  FileJson: FileJson,
  Globe: Globe,
  Sparkles: Sparkles,
  Server: Server,
  Cpu: Cpu,
  Layers: Layers,
  HardDrive: HardDrive,
  Search: Search,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
  Code: Code,
  Send: Send,
};

const categoryTitles = [
  { key: 'languages', label: 'Languages', description: 'Core programming languages & query syntax' },
  { key: 'frontend', label: 'Frontend Stack', description: 'User interface components & styling' },
  { key: 'backend', label: 'Backend & APIs', description: 'Server architecture, REST services & frameworks' },
  { key: 'database', label: 'Databases', description: 'Relational data modeling & SQL engines' },
  { key: 'tools', label: 'Developer Tools', description: 'Version control, editors & testing platforms' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 text-xs font-semibold uppercase tracking-widest">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Modern full-stack technologies and software development tools utilized in building production-ready applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-brand-500 text-white shadow-glow'
                : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-500'
            }`}
          >
            All Skills
          </button>
          {categoryTitles.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-12">
          {categoryTitles
            .filter((cat) => activeCategory === 'all' || activeCategory === cat.key)
            .map((cat) => {
              const skillList = portfolioData.skills[cat.key] || [];
              return (
                <div key={cat.key} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cat.label}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {cat.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {skillList.map((skill, idx) => {
                      const IconComp = iconMap[skill.icon] || Code;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          whileHover={{ y: -4 }}
                          className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 dark:hover:border-brand-500/60 shadow-sm hover:shadow-glow transition-all duration-300 group flex items-center space-x-3"
                        >
                          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {skill.level}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
