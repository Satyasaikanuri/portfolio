import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-dark-card to-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl text-center text-white overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resume & Curriculum Vitae</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Interested in Working Together?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Download my official resume to review my complete technical skills, academic performance, and project experience as a Java Full Stack Developer.
            </p>

            {/* Feature Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium py-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Spring Boot & React Stack</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>B.Tech Computer Science</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Full PDF Document</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={portfolioData.personalInfo.resumePath}
                download={portfolioData.personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={portfolioData.personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700 transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 text-brand-400" />
                <span>View Resume Online</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              Configured Document Path: <span className="text-brand-300">{portfolioData.personalInfo.resumeFileName}</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
