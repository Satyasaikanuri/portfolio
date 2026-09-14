import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Terminal,
  Code2,
  Coffee,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const codeSnippets = {
  java: `// Java Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/developer")
public class DeveloperController {
    
    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        Profile profile = new Profile(
            "Kanuri Jagan Satya Sai",
            "Java Full Stack Developer",
            List.of("Java", "Spring Boot", "React", "MySQL")
        );
        return ResponseEntity.ok(profile);
    }
}`,
  react: `// React.js Modern Web Interface
import React, { useState } from 'react';

export default function App() {
  const [status] = useState("Available for Opportunities");
  return (
    <div className="portfolio-hero">
      <h1>Kanuri Jagan Satya Sai</h1>
      <p>Building Scalable Full-Stack Solutions</p>
      <span className="badge">{status}</span>
    </div>
  );
}`,
  sql: `-- Optimized Database Schema
CREATE TABLE developers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    primary_role VARCHAR(100) DEFAULT 'Java Full Stack',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('java');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/60 text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Available for Hire & Full Stack Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base tracking-wider uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text font-black">
                  {portfolioData.personalInfo.fullName}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-brand-500 inline-block" />
                <span>{portfolioData.personalInfo.title}</span>
              </h2>
            </div>

            {/* Short Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {portfolioData.personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personalInfo.resumePath}
                download={portfolioData.personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-800 font-semibold border border-slate-700 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium border border-slate-300 dark:border-slate-700 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center space-x-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs uppercase tracking-widest font-mono font-semibold text-slate-500 dark:text-slate-500">
                Connect With Me:
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white text-slate-700 dark:text-slate-300 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white text-slate-700 dark:text-slate-300 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white text-slate-700 dark:text-slate-300 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual: Professional Developer Interactive Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Accent Glow Behind Window */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 opacity-30 blur-xl animate-pulse-slow" />

              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-left font-mono">
                {/* IDE Window Header Bar */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-brand-400" />
                      jagan-workspace ~ bash
                    </span>
                  </div>
                  
                  <button
                    onClick={copyCode}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                </div>

                {/* File Tabs */}
                <div className="flex bg-slate-900 border-b border-slate-800 text-xs overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`px-4 py-2.5 flex items-center space-x-2 border-r border-slate-800 transition-all ${
                      activeTab === 'java'
                        ? 'bg-slate-800 text-brand-400 font-semibold border-b-2 border-b-brand-500'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 text-amber-500" />
                    <span>DeveloperController.java</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-4 py-2.5 flex items-center space-x-2 border-r border-slate-800 transition-all ${
                      activeTab === 'react'
                        ? 'bg-slate-800 text-cyan-400 font-semibold border-b-2 border-b-cyan-500'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>App.jsx</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`px-4 py-2.5 flex items-center space-x-2 transition-all ${
                      activeTab === 'sql'
                        ? 'bg-slate-800 text-indigo-400 font-semibold border-b-2 border-b-indigo-500'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Schema.sql</span>
                  </button>
                </div>

                {/* Code Display Area */}
                <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto min-h-[220px]">
                  <pre className="font-mono">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Console Footer Status */}
                <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-semibold">Spring Boot & React Ready</span>
                  </div>
                  <span className="text-slate-500">UTF-8 | LF</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
