/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TOKENOMICS_DISTRIBUTION } from '../data';
import { translations, Language } from '../translations';

export default function TokenomicsChart({ lang = 'en' }: { lang?: Language }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const t = translations[lang] || translations.en;
  const isRtl = lang === 'ur' || lang === 'ar';

  const mappedDistribution = t.tokenomicsDistribution.map((dist, idx) => ({
    ...dist,
    percentage: TOKENOMICS_DISTRIBUTION[idx]?.percentage || 20,
    color: TOKENOMICS_DISTRIBUTION[idx]?.color || '#00f5ff',
    glow: TOKENOMICS_DISTRIBUTION[idx]?.glow || 'rgba(0, 245, 255, 0.4)',
  }));

  // SVG dimensions & coordinates matching a radius of 80 for crisp borders
  const size = 300;
  const radius = 90;
  const strokeWidth = 32;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  // Compute accumulated stroke ratios
  let accumulatedAngle = -90; // start at top vertical core
  let currentOffset = 0;

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-around gap-12 w-full ${isRtl ? 'dir-rtl' : ''}`}>
      {/* LEFT: Premium Neon Interactive Pie Chart */}
      <div className="relative flex items-center justify-center clickable-card w-[320px] h-[320px]">
        {/* Subtle decorative target background */}
        <div className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/15 animate-[spin_60s_linear_infinite]" />
        
        {/* SVG Drawing Canvas */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="relative z-10 filter drop-shadow-[0_0_15px_rgba(0,245,255,0.05)] transform hover:scale-105 transition-transform duration-500"
        >
          {/* Base Background Track Layer */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(11, 26, 48, 0.4)"
            strokeWidth={strokeWidth + 2}
          />

          {mappedDistribution.map((dist, idx) => {
            const segmentLength = (dist.percentage / 100) * circumference;
            const strokeOffset = circumference - segmentLength;
            const rotationAngle = (currentOffset / circumference) * 360 - 90;
            currentOffset += segmentLength;

            const isHighlighted = hoveredIdx === null || hoveredIdx === idx;
            const isActive = hoveredIdx === idx;

            return (
              <g
                key={dist.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Visual Segment Arc */}
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={dist.color}
                  strokeWidth={isActive ? strokeWidth + 6 : strokeWidth}
                  strokeDasharray={`${segmentLength} ${circumference}`}
                  strokeDashoffset={strokeOffset}
                  transform={`rotate(${rotationAngle} ${center} ${center})`}
                  style={{
                    transition: 'stroke-width 0.3s ease, stroke 0.3s ease, filter 0.3s ease',
                    opacity: isHighlighted ? 1 : 0.4,
                    filter: isActive ? `drop-shadow(0 0 12px ${dist.color})` : 'none',
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Center Core Information Display */}
        <div className="absolute w-[114px] h-[114px] rounded-full bg-[#050a18] flex flex-col items-center justify-center border border-slate-800 shadow-inner z-20 text-center pointer-events-none">
          <AnimatePresence mode="wait">
            {hoveredIdx !== null ? (
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="px-2"
              >
                <div className="text-[10px] font-mono tracking-widest text-slate-400 font-bold truncate max-w-[100px]">
                  {mappedDistribution[hoveredIdx].name.split(" ")[0].toUpperCase()}
                </div>
                <div
                  className="text-2xl font-display font-black"
                  style={{ color: mappedDistribution[hoveredIdx].color }}
                >
                  {mappedDistribution[hoveredIdx].percentage}%
                </div>
                <div className="text-[9px] font-mono tracking-wider text-slate-500 truncate max-w-[100px]">
                  {mappedDistribution[hoveredIdx].amount.split(" ")[0]}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-1"
              >
                <div className="text-[9px] font-mono tracking-widest text-[#ffd700] uppercase font-bold leading-none mb-1">
                  {isRtl ? "وائی فائی سپلائی" : "WIFI SUPPLY"}
                </div>
                <div className="text-[17px] font-display font-extrabold text-white leading-tight">
                  100%
                </div>
                <div className="text-[8px] font-mono tracking-normal text-slate-400 mt-0.5 uppercase">
                  {isRtl ? "1 ارب ٹوکن" : "1B TOKENS"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: High-End Distribution Detail Cards */}
      <div className="flex-grow max-w-xl w-full flex flex-col gap-3">
        {mappedDistribution.map((dist, idx) => {
          const isActive = hoveredIdx === idx;
          const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;

          return (
            <div
              key={dist.name}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`p-4 rounded-xl transition-all duration-300 glass-panel border border-slate-900 flex items-center justify-between cursor-pointer ${
                isActive
                  ? 'border-gray-600 scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.02)]'
                  : 'hover:border-slate-800'
              }`}
              style={{
                opacity: isDimmed ? 0.35 : 1,
              }}
            >
              <div className="flex items-center gap-4 text-left">
                {/* Glowing Color Block Dial */}
                <div
                  className="w-4 h-4 rounded"
                  style={{
                    backgroundColor: dist.color,
                    boxShadow: `0 0 10px ${dist.glow}`,
                  }}
                />
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide text-white">
                    {dist.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-1 max-w-[280px]">
                    {dist.description}
                  </p>
                </div>
              </div>

              <div className="text-right pl-4">
                <span className="block font-display font-extrabold text-white text-base">
                  {dist.percentage}%
                </span>
                <span className="block font-mono text-[10px] tracking-wider text-slate-500 whitespace-nowrap">
                  {dist.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Inline AnimatePresence support to keep files robust and tidy
import { AnimatePresence } from 'motion/react';
