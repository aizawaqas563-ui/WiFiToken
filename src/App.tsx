/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  EyeOff,
  Container,
  Users,
  Flame,
  ShieldCheck,
  Send,
  Twitter,
  MessageSquareCode,
  TrendingUp,
  Copy,
  Check,
  Menu,
  X,
  ArrowUpRight,
  Wifi,
  Globe2,
  Lock,
  Wallet,
  Play,
  FileSpreadsheet,
  Cpu,
  ChevronDown
} from 'lucide-react';

// Subcomponents Loader & Animations
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import Coin3D from './components/Coin3D';
import StatsCounter from './components/StatsCounter';
import TokenomicsChart from './components/TokenomicsChart';
import RoadmapTimeline from './components/RoadmapTimeline';
import FaqAccordion from './components/FaqAccordion';
import GlobalMeshNodeTracker from './components/GlobalMeshNodeTracker';

// Shared static structures
import {
  CONTRACT_ADDRESS,
  FEATURES_DATA,
  STEPS_TO_BUY,
  SOCIAL_CHANNELS
} from './data';
import { translations, Language } from './translations';

// Helper Map resolving dynamic string icon keys from static data smoothly
const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  EyeOff,
  Container,
  Users,
  Flame,
  ShieldCheck,
  Send,
  Twitter,
  MessageSquareCode,
  TrendingUp
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [lang, setLang] = useState<Language>('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const LANGUAGES: { code: Language; name: string; nativeName: string; flag: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' }
  ];

  const langLabels: Record<Language, string> = {
    en: 'Language',
    ur: 'زبان منتخب کریں',
    ar: 'اختر اللغة',
    es: 'Seleccionar idioma',
    fr: 'Choisir la langue',
    de: 'Sprache auswählen',
    pt: 'Selecionar idioma',
    ru: 'Выбрать язык',
    tr: 'Dil Seçin',
    zh: '选择语言'
  };

  const toastMessages: Record<Language, string> = {
    en: 'Contract address copied successfully!',
    ur: 'اسمارٹ کانٹریکٹ ایڈریس کاپی ہو گیا ہے!',
    ar: 'تم نسخ عنوان العقد الذكي بنجاح!',
    es: '¡Dirección de contrato copiada con éxito!',
    fr: 'Adresse de contrat copiée avec succès !',
    de: 'Vertragsadresse erfolgreich kopiert!',
    pt: 'Endereço do contrato copiado com sucesso!',
    ru: 'Адрес контракта успешно скопирован!',
    tr: 'Sözleşme adresi başarıyla kopyalandı!',
    zh: '智能合约地址已成功复制！'
  };

  const tooltipLabels: Record<Language, string> = {
    en: 'Copy to clipboard',
    ur: 'کلپ بورڈ پر کاپی کریں',
    ar: 'نسخ إلى الحافظة',
    es: 'Copiar al portapapeles',
    fr: 'Copier dans le presse-papiers',
    de: 'In die Zwischenablage kopieren',
    pt: 'Copiar para a área de transferência',
    ru: 'Копировать в буфер обмена',
    tr: 'Panoya kopyala',
    zh: '复制到剪贴板'
  };

  const currentLangName = LANGUAGES.find(l => l.code === lang)?.nativeName || 'English';

  const t = translations[lang] || translations.en;
  const isRtl = lang === 'ur' || lang === 'ar';

  // Multi-Section scroll observer for active highlight in Navigation Header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'why-wifi', 'tokenomics', 'roadmap', 'live-network', 'faq'];
      const scrollPos = window.scrollY + 120; // offset index trigger

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Secure clipboard copy utility with fallback
  const handleCopyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setIsCopied(true);
      setShowToast(true);
      // Auto dismiss
      setTimeout(() => setIsCopied(false), 2000);
      setTimeout(() => setShowToast(false), 3500);
    } catch (err) {
      console.warn("Fallback dynamic copy required");
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-gray-200 select-none overflow-hidden relative">
      {/* 1. Custom Futuristic Cursor tracker (Desktop-only) */}
      <CustomCursor />

      {/* 2. Welcome Consensus Handshake Loading Interstitial */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main Container renders when sync completes */}
      {!loading && (
        <div className={`relative flex flex-col min-h-screen ${isRtl ? 'dir-rtl text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
          
          {/* Cybernetic ambient grid and rays */}
          <div className="cyber-grid absolute inset-0 z-0 opacity-[0.06] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-cyber-cyan/5 via-transparent to-transparent z-0 pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyber-blue/45 rounded-full blur-[160px] z-0 pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[140px] z-0 pointer-events-none" />

          {/* 3. STICKY GLASSMORPHIC HEADER */}
          <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/[0.05] h-20 transition-all duration-300">
            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
              {/* Brand Logo with Signal State */}
              <a href="#hero" className="flex items-center gap-2.5 group">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-blue to-[#12223c] border border-cyber-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.15)] group-hover:border-cyber-cyan transition-colors">
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-cyber-dark animate-pulse" />
                  <Wifi className="w-5 h-5 text-cyber-cyan group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-white text-base tracking-widest leading-none">
                    WIFI<span className="text-cyber-cyan">TOKEN</span>
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-cyber-gold font-bold leading-none mt-1">
                    $WIFI PROTOCOL
                  </span>
                </div>
              </a>

               {/* Central Nav Links (Desktop) */}
              <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-display text-xs tracking-widest">
                {[
                  { name: t.navAbout, id: 'about' },
                  { name: t.navFeatures, id: 'why-wifi' },
                  { name: t.navTokenomics, id: 'tokenomics' },
                  { name: t.navRoadmap, id: 'roadmap' },
                  { name: 'Live Tracker', id: 'live-network' },
                  { name: t.navFaq, id: 'faq' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`transition-colors py-1 border-b uppercase font-bold tracking-[0.15em] ${
                      activeSection === item.id
                        ? 'text-cyber-cyan border-cyber-cyan'
                        : 'text-slate-400 border-transparent hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* CTA Buy Action Panel (Desktop) */}
              <div className="hidden md:flex items-center gap-4">
                {/* Sleek Custom Language Dropdown Selector */}
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLangMenuOpen(!isLangMenuOpen);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/35 text-xs font-mono font-bold tracking-wider cursor-pointer transition-all duration-300"
                  >
                    <Globe2 className="w-4 h-4 text-cyber-cyan" />
                    <span>{currentLangName}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180 text-cyber-cyan' : ''}`} />
                  </button>
                  {isLangMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-[100]" onClick={() => setIsLangMenuOpen(false)} />
                      <div className="absolute right-0 top-full mt-2 w-72 bg-[#040815]/95 border border-cyber-cyan/30 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,245,255,0.15)] backdrop-blur-md p-3 z-[999] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-2 gap-1.5 text-xs font-sans">
                          {LANGUAGES.map((item) => (
                            <button
                              key={item.code}
                              onClick={() => {
                                setLang(item.code);
                                setIsLangMenuOpen(false);
                              }}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-left hover:bg-slate-900/85 text-slate-300 hover:text-white font-medium cursor-pointer transition-colors ${
                                lang === item.code ? 'text-cyber-cyan bg-cyber-blue/15 border border-cyber-cyan/30 font-bold' : 'border border-transparent'
                              }`}
                            >
                              <span className="text-sm">{item.flag}</span>
                              <span className="truncate">{item.nativeName}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <a
                  href="#live-network"
                  className="px-5 py-2.5 rounded-xl font-display font-extrabold text-xs tracking-widest text-[#050a18] bg-cyber-cyan hover:bg-white border border-transparent shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
                >
                  LIVE TRACKER
                </a>
              </div>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-300 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Immersive Full Screen Mobile Navigation Menu Overlay Drawer */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="fixed inset-0 w-full h-[100dvh] bg-[#050a18] z-[999] flex flex-col p-6 md:hidden overflow-y-auto"
                >
                  {/* Top Bar inside Menu Drawer */}
                  <div className="flex items-center justify-between h-20 border-b border-white/[0.05] mb-6">
                    {/* Brand Logo */}
                    <a 
                      href="#hero" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5"
                    >
                      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-blue to-[#12223c] border border-cyber-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-cyber-dark animate-pulse" />
                        <Wifi className="w-5 h-5 text-cyber-cyan" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display font-black text-white text-base tracking-widest leading-none">
                          WIFI<span className="text-cyber-cyan">TOKEN</span>
                        </span>
                        <span className="font-mono text-[9px] tracking-widest text-[#ffd700] font-bold leading-none mt-1">
                          $WIFI PROTOCOL
                        </span>
                      </div>
                    </a>

                    {/* Close Button Inside Full Screen Drawer */}
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 focus:outline-none cursor-pointer"
                    >
                      <X className="w-5 h-5 text-cyber-cyan" />
                    </button>
                  </div>

                  {/* Nav Links Container */}
                  <div className="flex-grow flex flex-col justify-center gap-1 my-4">
                    {[
                      { name: t.navAbout, id: 'about' },
                      { name: t.navFeatures, id: 'why-wifi' },
                      { name: t.navTokenomics, id: 'tokenomics' },
                      { name: t.navRoadmap, id: 'roadmap' },
                      { name: 'Live Tracker', id: 'live-network' },
                      { name: t.navFaq, id: 'faq' }
                    ].map((item, index) => (
                      <motion.a
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-display font-bold tracking-[0.2em] uppercase py-3 border-b border-white/[0.03] text-center transition-colors ${
                          activeSection === item.id ? 'text-cyber-cyan' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Language Selector Dropdown */}
                  <div className="py-3 border-t border-b border-white/[0.03] my-3 font-sans">
                    <button 
                      onClick={() => setMobileLangOpen(!mobileLangOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-bold text-sm cursor-pointer hover:border-cyber-cyan/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Globe2 className="w-4 h-4 text-cyber-cyan" />
                        <span>{langLabels[lang] || 'Language / زبان'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-cyan text-xs font-mono font-bold">{currentLangName}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileLangOpen ? 'rotate-180 text-cyber-cyan' : ''}`} />
                      </div>
                    </button>
                    
                    {mobileLangOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="grid grid-cols-2 gap-2 mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-900 overflow-hidden"
                      >
                        {LANGUAGES.map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code);
                              setMobileLangOpen(false);
                            }}
                            className={`flex items-center gap-2 px-3 py-3 rounded-lg text-left text-xs text-slate-300 hover:text-white font-medium cursor-pointer transition-all ${
                              lang === item.code ? 'text-cyber-cyan bg-cyber-blue/15 border border-cyber-cyan/40 font-bold' : 'border border-transparent hover:bg-slate-900/40'
                            }`}
                          >
                            <span className="text-sm">{item.flag}</span>
                            <span className="truncate">{item.nativeName}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* CTA Panel at bottom */}
                  <div className="mt-auto pt-6 pb-4">
                    <a
                      href="#live-network"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-4 text-center rounded-xl font-display font-black text-sm tracking-widest text-[#050a18] bg-cyber-cyan shadow-[0_0_20px_rgba(0,245,255,0.4)] block w-full hover:bg-white transition-colors cursor-pointer"
                    >
                      EXPLORE NODES
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* 4. HERO SECTION */}
          <section
            id="hero"
            className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10"
          >
            {/* Interactive Vector Line/Particle background */}
            <ParticleBackground />

            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left-side Text content Block */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 text-left flex flex-col"
              >
                {/* Micro tech announcement badge */}
                <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full glass-panel-gold border border-cyber-gold/20 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyber-gold animate-ping" />
                  <span className="font-mono text-[10px] tracking-widest text-cyber-gold uppercase font-bold">
                    {t.heroBadge}
                  </span>
                </div>

                <h1 className="font-display font-[900] text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
                  {t.heroHeadingStart}{' '}
                  <span className="text-cyber-cyan cyber-glow-cyan text-shimmer">{t.heroHeadingHighlight}</span>
                </h1>

                <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                  {t.heroDescription}
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#live-network"
                    className="group px-7 py-4 rounded-xl font-display font-black text-xs tracking-widest text-[#050a18] bg-[#00f5ff] hover:bg-white text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    EXPLORE NODES
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="#roadmap"
                    className="px-7 py-4 rounded-xl font-display font-black text-xs tracking-widest text-white border border-cyber-cyan hover:bg-cyber-cyan/10 text-center flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {t.btnWhitepaper}
                    <span className="opacity-40">|</span>
                    <span className="text-cyber-cyan">PDF</span>
                  </a>
                </div>

                {/* Secure smart contract address layout bar */}
                <div className="p-3 rounded-2xl glass-panel border border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-lg overflow-hidden">
                  <div className="flex items-center gap-3 pr-2 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-cyber-blue flex items-center justify-center text-cyber-cyan flex-shrink-0 border border-cyber-cyan/15">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <div className="text-[10px] font-mono tracking-widest text-slate-500 font-bold uppercase">
                        {t.contractAddressLabel}
                      </div>
                      <div className="font-mono text-xs text-white truncate max-w-[280px] mt-0.5">
                        {CONTRACT_ADDRESS}
                      </div>
                    </div>
                  </div>

                  <div className="relative group/copy">
                    <button
                      onClick={handleCopyContract}
                      className="py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyber-cyan text-xs font-mono font-bold text-cyber-cyan hover:bg-cyber-blue shadow-inner flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 flex-shrink-0 w-full sm:w-auto"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-green-400 font-extrabold">{t.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="font-extrabold">{t.copyAddressBtn}</span>
                        </>
                      )}
                    </button>
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-sans text-slate-400 whitespace-nowrap opacity-0 group-hover/copy:opacity-100 transition-opacity duration-200 shadow-xl pointer-events-none z-[60] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                      <span>{isCopied ? t.copiedBtn : (tooltipLabels[lang] || tooltipLabels.en)}</span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right-side CSS 3D Coin Model render Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-5 flex justify-center items-center h-full relative"
              >
                <Coin3D />
              </motion.div>
            </div>

            {/* Glowing scroll bottom prompt */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
              <span className="font-mono text-[9px] tracking-widest uppercase">{t.scrollIndicator}</span>
              <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1.5">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1 h-3 bg-cyber-cyan rounded-full"
                />
              </div>
            </div>
          </section>

          {/* 5. ABOUT SECTION */}
          <section
            id="about"
            className="py-24 relative overflow-hidden z-20 border-t border-slate-950"
          >
            {/* Grid Beam Effect */}
            <div className="radar-beam" />

            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header Title alignment */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-gold font-bold uppercase block mb-3">
                  {t.aboutBadge}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-6 uppercase">
                  {t.aboutHeading}<span className="text-cyber-cyan">{t.aboutHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
                  {t.aboutDescription}
                </p>
              </div>

              {/* Counter Stats Dashboard block */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {[
                  { label: t.statSupplyLabel, end: 1000000000, suffix: " $WIFI", subText: t.statSupplySub },
                  { label: t.statNodesLabel, end: 50000, suffix: "+", subText: t.statNodesSub },
                  { label: t.statCountriesLabel, end: 120, suffix: "+", subText: t.statCountriesSub },
                  { label: t.statWalletsLabel, end: 25000, suffix: "+", subText: t.statWalletsSub }
                ].map((stat) => {
                  const isLongSupply = stat.end === 1000000000;
                  return (
                    <div
                      key={stat.label}
                      className="p-4 sm:p-6 rounded-2xl glass-panel border border-slate-900 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 min-h-[140px] sm:min-h-[160px]"
                    >
                      <div>
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#ffd700] uppercase font-bold mb-2 sm:mb-3 block text-left">
                          {stat.label}
                        </span>
                        <span className={`text-[#00f5ff] font-display border-b border-cyber-cyan/10 pb-2 sm:pb-3 mb-2 block tracking-tight break-words font-black text-left ${
                          isLongSupply 
                            ? "text-[12px] min-[340px]:text-[13px] min-[380px]:text-[15px] sm:text-xl lg:text-[18px] xl:text-[22px]" 
                            : "text-base min-[340px]:text-lg sm:text-2xl lg:text-xl xl:text-3xl"
                        }`}
                        >
                          <StatsCounter end={stat.end} suffix={stat.suffix} />
                        </span>
                      </div>
                      <span className="font-sans text-[10px] sm:text-xs text-slate-400 block mt-1 text-left">
                        {stat.subText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 6. FEATURES SECTION (Why $WIFI?) */}
          <section
            id="why-wifi"
            className="py-24 relative overflow-hidden bg-slate-950/40 z-20"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-cyan font-bold uppercase block mb-3">
                  {t.featuresBadge}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-4 uppercase text-center w-full">
                  {t.featuresHeading}<span className="text-cyber-cyan">{t.featuresHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                  {t.featuresDescription}
                </p>
              </div>

              {/* 6 Feature cards Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {t.featuresData.map((feat, idx) => {
                  const staticFeat = FEATURES_DATA[idx];
                  const FeatureIcon = iconMap[staticFeat?.iconName || 'Zap'] || Zap;
                  const isCyan = staticFeat?.glowColor === 'cyan';

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className={`p-8 rounded-3xl glass-panel relative border transition-all duration-300 clickable-card ${
                        isCyan ? 'hover:border-cyber-cyan/30' : 'hover:border-cyber-gold/30'
                      }`}
                    >
                      {/* Interactive visual neon glow circle */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border mr-auto mb-6 transition-transform duration-300 ${
                          isCyan
                            ? 'bg-cyber-cyan/5 border-cyber-cyan/20 text-cyber-cyan shadow-[0_0_15px_rgba(0,245,255,0.15)]'
                            : 'bg-cyber-gold/5 border-cyber-gold/20 text-cyber-gold shadow-[0_0_15px_rgba(255,215,0,0.15)]'
                        }`}
                      >
                        <FeatureIcon className="w-6 h-6" />
                      </div>

                      <h3 className="font-display font-black text-white text-lg tracking-wide mb-3 text-left">
                        {feat.title}
                      </h3>
                      <p className="font-sans text-slate-400 text-sm leading-relaxed text-left">
                        {feat.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 7. TOKENOMICS SECTION */}
          <section
            id="tokenomics"
            className="py-24 relative overflow-hidden z-20 border-t border-slate-950"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-gold font-bold uppercase block mb-3">
                  {t.tokenomicsBadge}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-4 uppercase text-center w-full">
                  {t.tokenomicsHeading}{' '}<span className="text-cyber-cyan">{t.tokenomicsHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-400 text-sm sm:text-base">
                  {t.tokenomicsDescription}
                </p>
              </div>

              {/* Shared Donut Graph & Stats card Row */}
              <TokenomicsChart lang={lang} />
            </div>
          </section>

          {/* 8. ROADMAP TIMELINE SECTION */}
          <section
            id="roadmap"
            className="py-24 relative overflow-hidden bg-slate-950/40 z-20 border-t border-slate-950"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-cyan font-bold uppercase block mb-3">
                  {t.roadmapBadge}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-4 uppercase text-center w-full">
                  {t.roadmapHeading}{' '}<span className="text-cyber-cyan">{t.roadmapHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-400 text-sm sm:text-base">
                  {t.roadmapDescription}
                </p>
              </div>

              {/* Horizontal / Vertical Roadmap */}
              <RoadmapTimeline lang={lang} />
            </div>
          </section>

          {/* LIVE NETWORK SECTION */}
          <section
            id="live-network"
            className="py-24 relative overflow-hidden z-20 border-t border-slate-950"
          >
            <div className="max-w-7xl mx-auto px-6">
              <GlobalMeshNodeTracker />
            </div>
          </section>

          {/* 10. SOCIAL COMMUNITY SECTION */}
          <section
            id="community"
            className="py-24 relative overflow-hidden bg-slate-950/40 z-20 border-t border-slate-950"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-cyan font-bold uppercase block mb-3">
                  {t.socialHeading}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-4 uppercase text-center w-full">
                  {t.socialHeading}{' '}<span className="text-cyber-cyan">{t.socialHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-400 text-sm sm:text-base">
                  {t.socialDescription}
                </p>
              </div>

              {/* Social Channels grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.socialCards.map((chan, idx) => {
                  const staticChan = SOCIAL_CHANNELS[idx];
                  const ChanIcon = iconMap[staticChan?.iconName || 'Send'] || Send;

                  return (
                    <motion.a
                      key={idx}
                      href={staticChan?.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      className={`p-6 rounded-3xl glass-panel border bg-gradient-to-br ${staticChan?.colorClass || 'from-slate-900 to-slate-950'} flex flex-col justify-between h-48 clickable-card`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-display font-black text-white text-base tracking-wide text-left">
                            {chan.platform}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                            <ChanIcon className="w-4 h-4 text-cyber-cyan" />
                          </div>
                        </div>

                        <span className="font-mono text-xs tracking-wide block text-white font-bold text-left">
                          {chan.handle}
                        </span>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="font-sans text-xs opacity-75">
                          {chan.count}
                        </span>
                        <div className="flex items-center gap-1 font-display font-extrabold text-[10px] tracking-widest text-[#ffd700] uppercase">
                          <span>{chan.buttonText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 11. FAQ ACCORDION SECTION */}
          <section
            id="faq"
            className="py-24 relative overflow-hidden z-20 border-t border-slate-950"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="font-mono text-xs tracking-[0.25em] text-cyber-gold font-bold uppercase block mb-3">
                  {lang === 'ur' ? 'اکثر پوچھے گئے سوالات' : lang === 'ar' ? 'الأسئلة الشائعة' : 'FREQUENT QUESTIONS'}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white mb-4 uppercase text-center w-full">
                  {t.faqHeading}{' '}<span className="text-cyber-cyan">{t.faqHeadingHighlight}</span>
                </h2>
                <p className="font-sans text-slate-400 text-sm sm:text-base">
                  {t.faqDescription}
                </p>
              </div>

              {/* Collapsing FAQ Block */}
              <FaqAccordion lang={lang} />
            </div>
          </section>

          {/* 12. ULTRA-PREMIUM FOOTER */}
          <footer className="relative bg-cyber-darker z-20 border-t border-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-950 pb-16">
              
              {/* BRAND CARD */}
              <div className="md:col-span-12 lg:col-span-5 flex flex-col">
                <a href="#hero" className="flex items-center gap-2.5 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-cyber-blue border border-cyber-cyan/30 flex items-center justify-center">
                    <Wifi className="w-4.5 h-4.5 text-cyber-cyan" />
                  </div>
                  <span className="font-display font-black text-white text-base tracking-widest uppercase text-left">
                    WIFI<span className="text-cyber-cyan">TOKEN</span>
                  </span>
                </a>

                <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 text-left">
                  {t.footerSub}
                </p>

                {/* Secure contract badge with clipboard copy */}
                <div className="p-3 rounded-xl border border-slate-900 bg-slate-950/40 flex items-center justify-between gap-4 max-w-sm">
                  <div className="min-w-0 pr-2">
                    <div className="text-[9px] font-mono tracking-widest text-[#ffd700] font-bold text-left uppercase">
                      {t.contractAddressLabel}
                    </div>
                    <div className="font-mono text-xs text-white truncate max-w-[220px] mt-0.5 text-left">
                      {CONTRACT_ADDRESS}
                    </div>
                  </div>

                  <div className="relative group/copy-footer">
                    <button
                      onClick={handleCopyContract}
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-800 hover:border-cyber-cyan text-cyber-cyan cursor-pointer transition-all active:scale-90 flex-shrink-0"
                    >
                      {isCopied ? <Check className="w-4.5 h-4.5 text-green-500" /> : <Copy className="w-4.5 h-4.5" />}
                    </button>
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-sans text-slate-400 whitespace-nowrap opacity-0 group-hover/copy-footer:opacity-100 transition-opacity duration-200 shadow-xl pointer-events-none z-[60] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                      <span>{isCopied ? t.copiedBtn : (tooltipLabels[lang] || tooltipLabels.en)}</span>
                      <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-950" />
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="md:col-span-6 lg:col-span-3 flex flex-col">
                <h4 className="font-display font-bold text-xs tracking-widest text-[#ffd700] uppercase mb-5 text-left">
                  {lang === 'ur' ? 'ایکو سسٹم گیٹ وے' : lang === 'ar' ? 'بوابة النظام البيئي' : 'Ecosystem Gateway'}
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans text-slate-400 text-left">
                  <a href="#about" className="hover:text-cyber-cyan transition-colors">{t.navAbout}</a>
                  <a href="#why-wifi" className="hover:text-cyber-cyan transition-colors">{t.navFeatures}</a>
                  <a href="#tokenomics" className="hover:text-cyber-cyan transition-colors">{t.navTokenomics}</a>
                  <a href="#roadmap" className="hover:text-cyber-cyan transition-colors">{t.navRoadmap}</a>
                  <a href="#live-network" className="hover:text-cyber-cyan transition-colors">Live Tracker</a>
                  <a href="#faq" className="hover:text-cyber-cyan transition-colors">{t.navFaq}</a>
                </div>
              </div>

              {/* DISCLAIMER / POLICY */}
              <div className="md:col-span-6 lg:col-span-4 flex flex-col">
                <h4 className="font-display font-bold text-xs tracking-widest text-[#ffd700] uppercase mb-5 text-left">
                  {lang === 'ur' ? 'سرمایہ کاری کی حفاظتی وارننگ' : lang === 'ar' ? 'تحذير سلامة الاستثمار' : 'Investment Safety Warning'}
                </h4>
                <p className="font-sans text-[11px] text-slate-500 leading-relaxed uppercase text-left">
                  {lang === 'ur'
                    ? 'کرپٹو کرنسی ٹوکن سٹرکچرل اثاثوں پر جدید ترین ڈی سینٹرلائزڈ افادیت کی نمائندگی کرتے ہیں۔ رقم مختص کرنے سے پہلے تکنیکی تندہی کو یقینی بنائیں۔ تمام مہمات لوکلائزڈ سینڈ باکس پالیسیوں کے مطابق عمل میں لائی گئی ہیں۔'
                    : lang === 'ar'
                    ? 'تمثل رموز العملات الرقمية مرافق لا مركزية متطورة على الأصول الهيكلية. تأكد من إجراء العناية الواجبة الفنية الهيكلية قبل التخصيص.'
                    : 'Cryptocurrency tokens represent cutting-edge decentralized utilities on structural assets. Ensure you perform structural technical diligence before allocations. All actions conducted here conform entirely with localized sandbox policies.'}
                </p>
              </div>
            </div>

            {/* Bottom Credits section */}
            <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
              <span className="text-left">{t.footerRights}</span>
              <div className="flex items-center gap-4">
                <a href="#hero" className="hover:text-cyber-cyan">{lang === 'ur' ? 'پرائیویسی میٹرکس' : lang === 'ar' ? 'مصفوفة الخصوصية' : 'Privacy Matrix'}</a>
                <span>|</span>
                <a href="#hero" className="hover:text-cyber-cyan">{lang === 'ur' ? 'لائسنسنگ نوڈز' : lang === 'ar' ? 'تراخيص عقد الشبكة' : 'Licensing Node Badges'}</a>
              </div>
            </div>
          </footer>

          {/* Custom Cyberpunk Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-[9999] flex items-center gap-3.5 p-4 rounded-2xl bg-[#040815]/95 border border-cyber-cyan/45 text-white shadow-[0_0_35px_rgba(0,245,255,0.25)] backdrop-blur-md max-w-sm`}
              >
                <div className="w-8 h-8 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/35 flex items-center justify-center text-cyber-cyan flex-shrink-0 animate-pulse">
                  <Check className="w-4 h-4 text-cyber-cyan" />
                </div>
                <div className="min-w-0 flex-grow">
                  <h5 className="font-display font-black text-[10px] tracking-widest text-[#ffd700] uppercase">
                    {lang === 'ur' ? 'کامیابی' : lang === 'ar' ? 'تمت العملية' : 'NODE SECURED'}
                  </h5>
                  <p className="font-sans text-xs text-slate-200 mt-0.5 leading-relaxed">
                    {toastMessages[lang] || toastMessages.en}
                  </p>
                </div>
                <button 
                  onClick={() => setShowToast(false)} 
                  className="p-1 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors cursor-pointer flex-shrink-0"
                >
                  <span className="text-[10px] block font-bold">✕</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
