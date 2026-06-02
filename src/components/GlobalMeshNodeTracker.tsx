import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Globe2, Activity, Server, RadioReceiver } from 'lucide-react';

export default function GlobalMeshNodeTracker() {
  const [nodes, setNodes] = useState(1405);
  
  const [logs, setLogs] = useState<{ id: string; time: string; type: string; msg: string }[]>([]);

  useEffect(() => {
    // Simulate real-time node growth
    const timer = setInterval(() => {
      setNodes((prev) => prev + Math.floor(Math.random() * 3));
    }, 4500);

    // Initial logs
    const initial = Array.from({ length: 5 }).map((_, i) => ({
      id: `init-${i}`,
      time: new Date(Date.now() - (5 - i) * 1000).toISOString().substring(11, 19),
      type: 'P2P_SYNC',
      msg: `Connection established with Node ${Math.floor(Math.random() * 9000) + 1000}`
    }));
    setLogs(initial);

    // Dynamic log generator
    const logTimer = setInterval(() => {
      const types = ['P2P_SYNC', 'BLOCK_MINT', 'PACKET_RELAY', 'NODE_JOIN'];
      const type = types[Math.floor(Math.random() * types.length)];
      const msgMap: Record<string, string> = {
        'P2P_SYNC': `Syncing state with Node ${Math.floor(Math.random() * 9000) + 1000}`,
        'BLOCK_MINT': `Validating block #${Math.floor(Math.random() * 1000000)}`,
        'PACKET_RELAY': `Relaying ${Math.floor(Math.random() * 500) + 10} packets to sector 7G`,
        'NODE_JOIN': `New node authenticated from Region ${Math.floor(Math.random() * 40) + 1}`
      };
      
      const newLog = {
        id: `log-${Date.now()}`,
        time: new Date().toISOString().substring(11, 19),
        type,
        msg: msgMap[type]
      };

      setLogs(prev => [...prev.slice(-6), newLog]);
    }, 2800);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <div className="w-full relative rounded-3xl border border-cyber-cyan/20 bg-slate-950/60 overflow-hidden backdrop-blur-md">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyber-cyan/5 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyber-blue/10 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyber-cyan/20 border-dotted animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 cyber-grid z-0" />

      {/* Animated Ping in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 2.5, 1], opacity: [0.1, 0, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-32 h-32 rounded-full border-[10px] border-cyber-cyan/50"
        />
      </div>

      <div className="relative z-20 p-8 sm:p-12 h-full flex flex-col justify-between">
        
        {/* Top Header stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyber-blue/20 border border-cyber-cyan/30 flex items-center justify-center relative">
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <Globe2 className="text-cyber-cyan w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-cyber-cyan mb-1">M-01 Core Mainnet</div>
              <div className="text-2xl font-display font-black text-white tracking-widest">LIVE MESH</div>
            </div>
          </div>
          
          <div className="glass-panel p-4 rounded-xl border border-cyber-cyan/20 flex gap-6">
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400">Total Validating Nodes</div>
              <div className="text-xl font-mono font-bold text-cyber-cyan flex items-center gap-2">
                {nodes.toLocaleString()}
                <Activity className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Center Mock Data Logs */}
        <div className="flex-grow w-full max-w-xl mx-auto rounded-xl bg-[#030612]/80 border border-slate-800 p-4 font-mono text-xs overflow-hidden h-[200px] flex flex-col gap-2 relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#030612] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#030612] to-transparent z-10" />
          
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 text-slate-500"
            >
              <span className="text-cyber-blue/80 w-16">[{log.time}]</span>
              <span className="text-green-500/80 min-w-24">{log.type}</span>
              <span className="flex-1 text-slate-300 truncate">{log.msg}</span>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
            className="text-cyber-cyan flex items-center gap-2 mt-auto z-20"
          >
            <RadioReceiver className="w-4 h-4 animate-pulse" />
            <span>Awaiting new sync signals...</span>
          </motion.div>
        </div>

        {/* Bottom Modules */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full">
          {[
            { label: 'Latency', val: '12ms', color: 'text-green-400' },
            { label: 'Uptime', val: '99.99%', color: 'text-cyber-cyan' },
            { label: 'Bandwidth', val: '45.2 TB', color: 'text-[#ffd700]' },
            { label: 'Regions', val: '46', color: 'text-purple-400' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">{stat.label}</span>
              <span className={`text-lg font-bold font-mono ${stat.color}`}>{stat.val}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
