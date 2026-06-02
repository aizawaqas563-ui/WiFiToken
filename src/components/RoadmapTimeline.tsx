/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ROADMAP_DATA } from '../data';
import { CheckCircle2, Circle, Radio, Globe2 } from 'lucide-react';
import { translations, Language } from '../translations';

export default function RoadmapTimeline({ lang = 'en' }: { lang?: Language }) {
  const t = translations[lang] || translations.en;
  const isRtl = lang === 'ur' || lang === 'ar';

  const mappedRoadmap = t.roadmapPhases.map((phase, idx) => ({
    ...phase,
    status: ROADMAP_DATA[idx]?.status || 'upcoming',
  }));

  return (
    <div className={`relative w-full py-6 ${isRtl ? 'dir-rtl' : ''}`}>
      {/* BACKGROUND GRAPHIC LINES Connectors (Desktop-only) */}
      <div className={`hidden lg:block absolute top-[164px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-green-500 via-cyber-cyan to-slate-800 z-0 rounded ${isRtl ? 'rotate-180' : ''}`} />

      {/* Grid Layout containing 4 items */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {mappedRoadmap.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isInProgress = step.status === 'in-progress';

          return (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* HEADER CAP: Stage Index Sphere */}
              <div className="mb-6 flex flex-col items-center">
                {/* Visual Status Interactive Pin */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted
                      ? 'bg-green-950/40 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.35)]'
                      : isInProgress
                      ? 'bg-cyber-cyan/5 border-cyber-cyan text-cyber-cyan shadow-[0_0_20px_#00f5ff] animate-pulse'
                      : 'bg-[#0b1a30] border-slate-800 text-slate-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  ) : isInProgress ? (
                    <Radio className="w-6 h-6" />
                  ) : (
                    <Circle className="w-5 h-5 opacity-60" />
                  )}
                </div>

                <div className="text-center mt-3">
                  <span
                    className={`font-display text-xs tracking-widest uppercase font-black px-3 py-1 rounded-full border ${
                      isCompleted
                        ? 'text-green-400 bg-green-500/10 border-green-500/20'
                        : isInProgress
                        ? 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30'
                        : 'text-slate-400 bg-slate-900 border-slate-800'
                    }`}
                  >
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION PANEL CARD */}
              <div
                className={`w-full p-6 rounded-2xl glass-panel relative border flex-grow flex flex-col transition-all duration-300 ${
                  isInProgress
                    ? 'border-cyber-cyan/30 shadow-[0_0_20px_rgba(0,245,255,0.02)]'
                    : 'border-slate-900'
                }`}
              >
                {/* Glowing target details on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    isCompleted
                      ? 'bg-green-500'
                      : isInProgress
                      ? 'bg-cyber-cyan'
                      : 'bg-slate-800'
                  }`}
                />

                <h3 className="font-display font-black text-white text-base md:text-lg mb-2 text-left">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow text-left">
                  {step.description}
                </p>

                {/* Sublist Milestones with Bullet Checks */}
                <ul className="space-y-2 border-t border-slate-900/80 pt-3 text-left">
                  {step.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs">
                      {isCompleted ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      ) : isInProgress && itemIdx === 0 ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0 animate-ping" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1.5 flex-shrink-0" />
                      )}
                      <span className={`${isCompleted ? 'text-slate-400' : 'text-slate-300'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
