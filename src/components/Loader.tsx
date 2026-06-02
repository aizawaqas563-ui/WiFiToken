/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, ShieldCheck, Globe, Radio } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing signal handshake...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Setup incremental loader count mimicking real infrastructure booting
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // allow fadeout animation to finish
          }, 400);
          return 100;
        }

        // Variable incremental jumps for realism
        const nextJump = Math.floor(Math.random() * 15) + 3;
        const nextProgress = Math.min(prev + nextJump, 100);

        // Dynamic status descriptive changes
        if (nextProgress < 30) {
          setStatusText('Activating decentralized node cluster relays...');
        } else if (nextProgress < 55) {
          setStatusText('Performing zero-knowledge cryptographic handshakes...');
        } else if (nextProgress < 80) {
          setStatusText('Validating dual audited liquidity gateways...');
        } else {
          setStatusText('Establishing global unstoppable signal mesh...');
        }

        return nextProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#02050c] p-6 text-center select-none"
        >
          {/* Neon Grid Background inside the Loader */}
          <div className="cyber-grid absolute inset-0 opacity-15" />
          <div className="absolute inset-0 bg-radial-gradient(from center, rgba(0,245,255,0.05) 0%, transparent 80%)" />

          <div className="relative z-10 max-w-md w-full">
            {/* Spinning WiFi Signal Halo */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute w-28 h-28 border border-dashed border-cyber-cyan/30 rounded-full"
              />
              <motion.div
                initial={{ rotate: 360 }}
                animate={{ rotate: 0 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute w-24 h-24 border border-glow border-cyber-gold/20 rounded-full"
              />

              <div className="relative w-16 h-16 rounded-full bg-[#0b1a30] flex items-center justify-center border-2 border-cyber-cyan shadow-[0_0_20px_#00f5ff]">
                <Wifi className="w-8 h-8 text-cyber-cyan motion-safe:animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-2xl tracking-widest text-white mb-2">
              WIFITOKEN <span className="text-cyber-cyan cyber-glow-cyan">$WIFI</span>
            </h1>

            {/* Glowing Tagline */}
            <p className="text-xs tracking-[0.3em] font-medium text-cyber-gold/80 mb-8 uppercase">
              Decentralized . Connected . Unstoppable
            </p>

            {/* Progress Percentage Display */}
            <div className="relative mb-3 flex justify-between items-end px-1">
              <span className="font-mono text-xs tracking-wider text-slate-400 lowercase italic">
                syncing_consensus_matrices
              </span>
              <span className="font-display font-extrabold text-2xl text-cyber-cyan cyber-glow-cyan">
                {progress}%
              </span>
            </div>

            {/* Tech-Progress Bar */}
            <div className="w-full h-2 bg-[#0b1a30] rounded-full overflow-hidden p-[2px] border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyan-400 to-cyber-gold shadow-[0_0_8px_#00f5ff] rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loaderProgress"
              />
            </div>

            {/* Interactive console action statement */}
            <p className="mt-4 font-mono text-[11px] tracking-wide text-slate-400 min-h-[1.5em] transition-all duration-300">
              ⚡ {statusText}
            </p>

            {/* Tiny aesthetic validation indicators */}
            <div className="flex justify-center gap-6 mt-12 pt-6 border-t border-slate-900 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-1">
                <ShieldCheck className={`w-3.5 h-3.5 ${progress > 45 ? 'text-green-500' : 'text-slate-700'}`} />
                <span>CERTIK_SECURE</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className={`w-3.5 h-3.5 ${progress > 25 ? 'text-cyber-cyan' : 'text-slate-700'}`} />
                <span>NODES_ONLINE</span>
              </div>
              <div className="flex items-center gap-1">
                <Radio className={`w-3.5 h-3.5 ${progress > 85 ? 'text-cyber-gold' : 'text-slate-700'}`} />
                <span>SIGNAL_ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
