import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, AlertCircle, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 text-xs font-semibold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education History
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Academic qualifications and technical foundations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 shadow-sm hover:shadow-glow transition-all duration-300 flex flex-col justify-between space-y-6 text-left group"
            >
              <div className="space-y-4">
                {/* Header Icon & Year Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/60 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-xs font-semibold">
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {edu.institution}
                  </div>
                </div>

                {/* Details Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {/* Grade / Score pill */}
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Grade / CGPA:</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 font-mono">
                    {edu.score}
                  </span>
                </div>

                {/* Placeholder Notice */}
                {edu.isPlaceholder && (
                  <div className="flex items-center space-x-1.5 text-[11px] text-amber-600 dark:text-amber-400 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{edu.placeholderNotice}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
