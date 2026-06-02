/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { translations, Language } from '../translations';

export default function FaqAccordion({ lang = 'en' }: { lang?: Language }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const t = translations[lang] || translations.en;
  const isRtl = lang === 'ur' || lang === 'ar';

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={`max-w-3xl mx-auto w-full flex flex-col gap-4 ${isRtl ? 'dir-rtl' : ''}`}>
      {t.faqs.map((item, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
              isOpen
                ? 'bg-[#0b1a30]/80 border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,245,255,0.05)]'
                : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
            }`}
          >
            {/* Header Trigger Click block */}
            <button
              onClick={() => toggleIdx(idx)}
              className="faq-header w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3 text-left">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-cyber-cyan' : 'text-slate-500'}`} />
                <span className="font-display font-bold text-sm md:text-base text-gray-100 tracking-wide">
                  {item.question}
                </span>
              </div>

              {/* Rotating Custom Indicator */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-800 transition-all duration-300 ${
                  isOpen ? 'border-cyber-cyan/30 text-cyber-cyan bg-cyber-blue shadow-inner' : 'text-slate-400'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
            </button>

            {/* Collapsed content with smooth framer height transition */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="border-t border-slate-900/60"
                >
                  <p className="p-5 md:p-6 text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/20 text-left">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
