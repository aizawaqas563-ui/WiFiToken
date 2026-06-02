/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Wifi } from 'lucide-react';

export default function Coin3D() {
  // Generate coin thickness using overlapping translated layers
  const thicknesses = Array.from({ length: 16 }, (_, idx) => idx - 8);

  return (
    <div className="perspective-container relative select-none w-72 h-72 flex items-center justify-center">
      {/* Immersive Staggered Signal Waves from theme template */}
      <div className="signal-wave" />
      <div className="signal-wave" style={{ animationDelay: '1.3s' }} />
      <div className="signal-wave" style={{ animationDelay: '2.6s' }} />

      {/* Dynamic Background Pulse Waves representing signals */}
      <div className="absolute w-64 h-64 sm:w-[360px] sm:h-[360px] rounded-full border border-cyber-cyan/10 motion-safe:animate-signal-wave" />
      <div className="absolute w-64 h-64 sm:w-[360px] sm:h-[360px] rounded-full border border-cyber-gold/5 motion-safe:animate-signal-wave [animation-delay:1.5s]" />
      <div className="absolute w-64 h-64 sm:w-[360px] sm:h-[360px] rounded-full border border-cyber-cyan/5 motion-safe:animate-signal-wave [animation-delay:3s]" />

      {/* Main 3D Coin Space */}
      <div className="coin-container clickable-card cursor-pointer">
        {/* Layer Stack forming 3D edge thickness */}
        <div className="coin-edge">
          {thicknesses.map((z) => (
            <div
              key={z}
              className="coin-edge-segment"
              style={{
                transform: `translateZ(${z * 0.75}px)`,
                borderColor: z === 0 ? '#ffd700' : 'rgba(186, 150, 0, 0.45)',
                boxShadow: z === 0 ? '0 0 20px rgba(0, 245, 255, 0.1)' : 'none',
              }}
            />
          ))}
        </div>

        {/* FRONT FACE (Default Front visual view) */}
        <div className="coin-face coin-front font-display flex flex-col justify-between p-6">
          {/* Inner Golden Border */}
          <div className="absolute inset-2 border-2 border-dashed border-cyber-gold/40 rounded-full pointer-events-none" />

          {/* Sparkly Cyber Details Inside Coin */}
          <div className="absolute top-8 left-12 right-12 flex justify-between px-2 text-[10px] font-mono tracking-widest text-[#ffd700]/70">
            <span>WEB3</span>
            <span>MINT</span>
          </div>

          <div className="flex flex-col items-center justify-center z-10 flex-grow mt-3">
            {/* Holographic Glowing Center Shield */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-cyber-blue to-[#12223c] flex items-center justify-center border border-cyber-cyan/50 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
              {/* Outer spinning dash ring inside shield */}
              <div className="absolute inset-1.5 border border-dashed border-cyber-cyan/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <Wifi className="w-12 h-12 text-cyber-cyan shadow-sm" />
            </div>
            <span className="text-white font-extrabold text-2xl tracking-[0.25em] mt-4 cyber-glow-cyan">
              $WIFI
            </span>
          </div>

          <div className="absolute bottom-7 text-[9px] font-mono tracking-widest text-[#ffd700]/70">
            CONNECTIVITY PROTOCOL
          </div>
        </div>

        {/* BACK FACE (Rotated 180deg) */}
        <div className="coin-face coin-back font-display flex flex-col justify-between p-6">
          {/* Inner Golden Border */}
          <div className="absolute inset-2 border-2 border-dashed border-cyber-cyan/30 rounded-full pointer-events-none" />

          <div className="absolute top-8 text-[9px] font-mono tracking-widest text-cyber-cyan/80">
            DECENTRALIZED SIGNAL MESH
          </div>

          <div className="flex flex-col items-center justify-center z-10 flex-grow mt-3">
            {/* Global Earth Grid Motif */}
            <div className="text-center">
              <div className="font-mono text-xs text-cyber-gold tracking-widest mb-1 font-bold">
                TOTAL SUPPLY
              </div>
              <div className="text-white text-base font-black tracking-wider border-y border-cyber-cyan/20 px-2 py-1 bg-[#12223c]/40 rounded">
                1,000,000,000
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 text-[10px] font-mono tracking-widest text-cyber-cyan/80">
            © 2025 WIFITOKEN
          </div>
        </div>
      </div>
    </div>
  );
}
