/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ur' | 'ar' | 'es' | 'fr' | 'de' | 'pt' | 'ru' | 'tr' | 'zh';

export interface TranslationSet {
  // Navigation
  navAbout: string;
  navFeatures: string;
  navTokenomics: string;
  navRoadmap: string;
  navHowToBuy: string;
  navFaq: string;
  btnBuy: string;
  btnBuyTokens: string;
  btnWhitepaper: string;
  
  // Hero Section
  heroBadge: string;
  heroHeadingStart: string;
  heroHeadingHighlight: string;
  heroDescription: string;
  contractAddressLabel: string;
  copyAddressBtn: string;
  copiedBtn: string;
  scrollIndicator: string;

  // About Section
  aboutBadge: string;
  aboutHeading: string;
  aboutHeadingHighlight: string;
  aboutDescription: string;
  
  // Stats
  statSupplyLabel: string;
  statSupplySub: string;
  statNodesLabel: string;
  statNodesSub: string;
  statCountriesLabel: string;
  statCountriesSub: string;
  statWalletsLabel: string;
  statWalletsSub: string;

  // Features Section
  featuresBadge: string;
  featuresHeading: string;
  featuresHeadingHighlight: string;
  featuresDescription: string;
  featuresData: {
    title: string;
    description: string;
  }[];

  // Tokenomics Section
  tokenomicsBadge: string;
  tokenomicsHeading: string;
  tokenomicsHeadingHighlight: string;
  tokenomicsDescription: string;
  tokenomicsDistribution: {
    name: string;
    description: string;
    amount: string;
  }[];

  // Roadmap Section
  roadmapBadge: string;
  roadmapHeading: string;
  roadmapHeadingHighlight: string;
  roadmapDescription: string;
  roadmapPhases: {
    phase: string;
    title: string;
    description: string;
    items: string[];
  }[];

  // How to Buy Section
  buyBadge: string;
  buyHeading: string;
  buyHeadingHighlight: string;
  buyDescription: string;
  buySteps: {
    step: string;
    title: string;
    description: string;
    subText: string;
  }[];

  // Socials Section
  socialHeading: string;
  socialHeadingHighlight: string;
  socialDescription: string;
  socialCards: {
    platform: string;
    handle: string;
    count: string;
    buttonText: string;
  }[];

  // FAQ Section
  faqHeading: string;
  faqHeadingHighlight: string;
  faqDescription: string;
  faqs: {
    question: string;
    answer: string;
  }[];

  // Footer
  footerHeading: string;
  footerSub: string;
  footerRights: string;
  footerBuyPortal: string;
  footerFaq: string;

  // Buy Modal / Swap Terminal
  modalTitle: string;
  modalSubTitle: string;
  modalConnectTitle: string;
  modalConnectDesc: string;
  modalConnectingState: string;
  modalSecureContract: string;
  modalPresaleRate: string;
  modalYourWifi: string;
  modalPayCurrency: string;
  modalReceiveCurrency: string;
  modalVolumeBonus: string;
  modalVolumeBonusDesc: string;
  modalNetwork: string;
  modalSlippage: string;
  modalEstimatedGas: string;
  modalEnterAmount: string;
  modalSwapButton: string;
  modalConsensusWait: string;
  modalConsensusSub: string;
  modalConsensusDesc: string;
  modalSuccessTitle: string;
  modalSuccessDesc: string;
  modalReceiptStatus: string;
  modalReceiptSettled: string;
  modalReceiptPrice: string;
  modalReceiptReceive: string;
  modalReceiptHash: string;
  modalAddAssetBtn: string;
  modalAnotherPurchaseBtn: string;
  modalComingSoonTitle: string;
  modalComingSoonDesc: string;
}

const baseTranslations: Record<string, TranslationSet> = {
  en: {
    navAbout: "About",
    navFeatures: "Features",
    navTokenomics: "Tokenomics",
    navRoadmap: "Roadmap",
    navHowToBuy: "How To Buy",
    navFaq: "FAQ",
    btnBuy: "BUY $WIFI",
    btnBuyTokens: "BUY $WIFI TOKENS",
    btnWhitepaper: "READ WHITEPAPER",
    
    heroBadge: "LAUNCH STAGE ACTIVE",
    heroHeadingStart: "The Future Of Digital Connectivity",
    heroHeadingHighlight: "Begins Here.",
    heroDescription: "WiFiToken ($WIFI) — Decentralized. Connected. Unstoppable. The first universal infrastructure layer compensating sharing nodes and bridging global internet equity.",
    contractAddressLabel: "OFFICIAL CONTRACT ADDRESS",
    copyAddressBtn: "COPY ADDRESS",
    copiedBtn: "COPIED",
    scrollIndicator: "SCROLL ENGINE",

    aboutBadge: "WIFITOKEN REVELATION",
    aboutHeading: "What Is ",
    aboutHeadingHighlight: "WiFiToken?",
    aboutDescription: "WiFiToken is the world's first decentralized connectivity protocol — built to power the next generation of Web3 infrastructure. Beyond currency, beyond blockchain — $WIFI is the signal of the future.",
    
    statSupplyLabel: "Circulating Supply",
    statSupplySub: "Hardcapped permanently",
    statNodesLabel: "Active Global Nodes",
    statNodesSub: "Expanding daily",
    statCountriesLabel: "Connected Countries",
    statCountriesSub: "Spanning hemispheres",
    statWalletsLabel: "Holding Wallets",
    statWalletsSub: "Growing communities",

    featuresBadge: "EXCLUSIVE FEATURES",
    featuresHeading: "Why Stake Into ",
    featuresHeadingHighlight: "$WIFI?",
    featuresDescription: "Integrating ultimate performance architectures to create a liquid gateway for global high-speed connection relays.",
    featuresData: [
      {
        title: "Ultra-Fast Transactions",
        description: "Designed with state-of-the-art packet priority consensus, settlement takes less than 800 milliseconds globally."
      },
      {
        title: "Zero-Knowledge Privacy",
        description: "Your connection coordinates, payload transfers, and routing identities are fully secured using ZK-SNARK protocols."
      },
      {
        title: "Cross-Chain Compatible",
        description: "Operates seamlessly across Ethereum, Binance Smart Chain, Solana, and custom Layer-2 network relays."
      },
      {
        title: "Community Governed",
        description: "Every network parameters adjustment, node licensing fee, and buy-back-and-burn allocation is voted by $WIFI holders."
      },
      {
        title: "Deflationary Model",
        description: "A continuous 1.5% transaction burn combined with protocol licensing fees permanently reduces supply over time."
      },
      {
        title: "Military-Grade Security",
        description: "Dual-audited smart contracts with integrated multi-sig governance and algorithmic anti-whale lockouts."
      }
    ],

    tokenomicsBadge: "TOKENOMICS STATEMENTS",
    tokenomicsHeading: "Fair Distribution ",
    tokenomicsHeadingHighlight: "Matrix",
    tokenomicsDescription: "Meticulously calculated ecosystem structures built to drive sustainable growth, nodes scaling, and liquidity depth.",
    tokenomicsDistribution: [
      {
        name: "Presale Allocation",
        description: "Initial fund pool designed to foster immediate network launch and secure bootstrapping.",
        amount: "300,000,000 $WIFI"
      },
      {
        name: "Locked Liquidity Pool",
        description: "Locked permanently via smart contracts on launch to assure high depth exchanges trading.",
        amount: "250,000,000 $WIFI"
      },
      {
        name: "Ecosystem Development",
        description: "Allocated strictly for protocol updates, global developer grants, and node operational rewards.",
        amount: "200,000,000 $WIFI"
      },
      {
        name: "Strategic Marketing",
        description: "Reserved for high-impact target campaigns, exchange listings, and real-world sponsorships.",
        amount: "150,000,000 $WIFI"
      },
      {
        name: "Core Advisory & Team",
        description: "Locked for a minimum of 24 months with linear quarterly vesting schedules.",
        amount: "100,000,000 $WIFI"
      }
    ],

    roadmapBadge: "PROJECT CHRONOLOGY",
    roadmapHeading: "Our Unstoppable ",
    roadmapHeadingHighlight: "Roadmap",
    roadmapDescription: "Navigating from foundational launching concepts to decentralized ISP deployments globally.",
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Genesis Setup",
        description: "Foundational launch of the $WIFI core connectivity engine and smart contract deployment.",
        items: [
          "Smart Contract Security Audit by CertiK",
          "Official Token Presale & Launchpool Launching",
          "Targeted Global PR and Premium Web3 Campaign",
          "CoinMarketCap & CoinGecko Registrations"
        ]
      },
      {
        phase: "Phase 2",
        title: "Global Expansion",
        description: "Expanding decentralized nodes footprint and expanding trading accessibility.",
        items: [
          "Targeting 100,000 Active Holders worldwide",
          "Tier-1 Centralized Secondary Exchange listings",
          "Beta launch of the official WiFi Wallet & DApp",
          "Deployment of decentralized proxy relays"
        ]
      },
      {
        phase: "Phase 3",
        title: "Dominant Protocol",
        description: "Enforcing direct chain-bridging, utility integration, and enterprise licensing contracts.",
        items: [
          "Ultra-low latency ERC-20 / BEP-20 / Solana Bridge",
          "Launch of WiFi NFT Node Access Badges",
          "Strategic alliances with key telecom providers",
          "Inaugural Decentralized Infrastructure Summit"
        ]
      },
      {
        phase: "Phase 4",
        title: "Digital Revolution",
        description: "Total transition to mainnet architecture and reaching ultimate ecosystem maturity.",
        items: [
          "Official WiFi Protocol Mainnet Launching",
          "Passing landmark 1,000,000 Active Holders",
          "Establishing permanent top 10 rankings",
          "Fully functional decentralized orbital ISP node"
        ]
      }
    ],

    buyBadge: "HOW TO BUY $WIFI",
    buyHeading: "Acquire the signal token in fewer than ",
    buyHeadingHighlight: "4 minutes.",
    buyDescription: "Just hook onto BNB connections, stable coins or native digital assets to acquire your share.",
    buySteps: [
      {
        step: "01",
        title: "Create Secure Wallet",
        description: "Download trust-approved wallets like MetaMask, Trust Wallet, or Phantom.",
        subText: "Configure your setup and preserve your multi-phrase private security keys securely."
      },
      {
        step: "02",
        title: "Acquire BNB / Currency",
        description: "Purchase Binance Coin (BNB) or stable assets directly in the wallet or from any central CEX.",
        subText: "Transfer these funds over onto your newly generated wallet address."
      },
      {
        step: "03",
        title: "Sync with Launcher DEX",
        description: "Head to PancakeSwap or Uniswap platforms and tap 'Connect Wallet' in top-right.",
        subText: "Authorize trust permissions smoothly securely inside the application interface."
      },
      {
        step: "04",
        title: "Trade for WiFiToken",
        description: "Insert the $WIFI official contract address, input amount, and hit SWAP.",
        subText: "Approve block validators, and watch your WiFiToken ecosystem grow."
      }
    ],

    socialHeading: "Join Our Dynamic ",
    socialHeadingHighlight: "Global Hub",
    socialDescription: "Connecting validators, miners, traders, and software developers across key digital networks.",
    socialCards: [
      { platform: "Telegram Portal", handle: "t.me/WiFiTokenOfficial", count: "48,250 Members Online", buttonText: "Join Channel" },
      { platform: "Twitter / X Profile", handle: "@WiFiToken_Crypto", count: "124,800 Active Network Followers", buttonText: "Follow Updates" },
      { platform: "Discord Community", handle: "discord.gg/WiFiGlobal", count: "62,500 Registered Nodes", buttonText: "Launch Chat" },
      { platform: "Reddit Subreddit", handle: "r/WiFiToken", count: "18,400 Certified Contributors", buttonText: "Subscribe" }
    ],

    faqHeading: "Got Questions? We Have ",
    faqHeadingHighlight: "Answers",
    faqDescription: "Explore common queries about the $WIFI protocol, transaction structures, node setup, and release timelines.",
    faqs: [
      {
        question: "What makes $WIFI token so unique in the blockchain landscape?",
        answer: "Unlike traditional tokens which exist purely as store-of-value instruments, $WIFI serves as the critical gas on a decentralized global internet hardware mesh. Node operators get compensated in $WIFI for sharing bandwidth, while consumers lease private bandwidth fractions dynamically at fractions of a penny."
      },
      {
        question: "Is the Smart Contract fully audited and verified for safety?",
        answer: "Absolutely. Security is our absolute bedrock. The $WIFI smart contract is dual-audited by independent, world-leading security firm CertiK. It features zero administrative mint backdoors, locked multi-sig parameters, and verified open-source tracking files."
      },
      {
        question: "How does the Deflationary Model affect my $WIFI assets?",
        answer: "Every transaction, node connection lease, or token transfer trigger carries a minor fees allocation. Out of this, 1.5% is auto-routed to a dead null address (permanent burn), consistently diminishing the total circulating supply. This creates a supply-crunch as connectivity demand scales."
      },
      {
        question: "How can I deploy a personal Node and start earning $WIFI?",
        answer: "Once our Mainnet soft-launches, any high-speed residential fiber or satellite terminal can flash our virtual Node firmware or install our lightweight client-side DApp to participate as a certified secure packet validator, earning high rewards passive staking distributions."
      },
      {
        question: "Can I bridge my tokens across different blockchain systems?",
        answer: "Yes, our native Cross-Chain bridge is scheduled to go live. It allows 1-click zero-fee translations between Base, BSC, Ethereum, and Solana without exposing user assets to dynamic centralized bridge attack vectors."
      },
      {
        question: "Where can I find the official smart contract and verified token addresses?",
        answer: "Our official smart contract address can be found at the top and footer of this portal. Verify carefully that you copy the exact code address printed. Never swap for contracts shared in unofficial groups."
      }
    ],

    footerHeading: "WIFI PROTOCOL",
    footerSub: "Empowering global internet equity through state-of-the-art packet priority consensus blockchains.",
    footerRights: "© 2026 WiFiToken protocol. All rights reserved globally.",
    footerBuyPortal: "Buy Portal",
    footerFaq: "Protocol FAQ",

    modalTitle: "SECURE PORTAL",
    modalSubTitle: "$WIFI PRE-SALE DAPP",
    modalConnectTitle: "Connect Your Web3 Wallet",
    modalConnectDesc: "Select your favored decentralised provider to immediately verify currency reserves and acquire $WIFI tokens securely.",
    modalConnectingState: "CONNECTION IN PROGRESS...",
    modalSecureContract: "Verified Smart Contract Integration Protocol",
    modalPresaleRate: "PRE-SALE RATE",
    modalYourWifi: "YOURS $WIFI BALANCE",
    modalPayCurrency: "PAY CURRENCY",
    modalReceiveCurrency: "YOU WILL RECEIVE",
    modalVolumeBonus: "+{percent}% VOLUME BONUS UNLOCKED!",
    modalVolumeBonusDesc: "You've earned an additional +{bonus} $WIFI tokens on this purchase!",
    modalNetwork: "Liquidity Network:",
    modalSlippage: "Slippage Tolerance:",
    modalEstimatedGas: "Estimated Gas Fee:",
    modalEnterAmount: "ENTER SWAP QUANTITY",
    modalSwapButton: "SWAP FOR $WIFI TOKENS",
    modalConsensusWait: "BLOCKCHAIN BROADCASTING",
    modalConsensusSub: "Executing Contract Exchange",
    modalConsensusDesc: "Standard transaction settlement times average 2-4 seconds. Do not close this terminal overlay.",
    modalSuccessTitle: "Swap Complete!",
    modalSuccessDesc: "Congratulations! Your signal exchange transaction was processed successfully into block consensus logs.",
    modalReceiptStatus: "Transaction Status:",
    modalReceiptSettled: "Settled",
    modalReceiptPrice: "Payment Paid:",
    modalReceiptReceive: "Received Allocation:",
    modalReceiptHash: "Block Hash:",
    modalAddAssetBtn: "Add $WIFI asset to Wallet Config",
    modalAnotherPurchaseBtn: "Initiate another purchase",
    modalComingSoonTitle: "🚀 $WIFI Tokens: Coming Soon!",
    modalComingSoonDesc: "Tokens will be minted and automatically distributed to your connected wallet address during the upcoming Token Generation Event (TGE)."
  },
  ur: {
    navAbout: "تعارف",
    navFeatures: "خصوصیات",
    navTokenomics: "ٹوکنومکس",
    navRoadmap: "روڈ میپ",
    navHowToBuy: "خریدنے کا طریقہ",
    navFaq: "سوالات",
    btnBuy: "ابھی خریدیں $WIFI",
    btnBuyTokens: "ٹوکن خریدیں $WIFI",
    btnWhitepaper: "وائٹ پیپر پڑھیں",
    
    heroBadge: "لانچ کا مرحلہ فعال ہے",
    heroHeadingStart: "ڈیجیٹل کنیکٹیویٹی کا مستقبل",
    heroHeadingHighlight: "یہاں سے شروع ہوتا ہے۔",
    heroDescription: "وائی فائی ٹوکن ($WIFI) — غیر مرکزی، مربوط اور ناقابل تسخیر۔ پہلا عالمی بنیادی ڈھانچہ جو انٹرنیٹ شیئر کرنے والے نوڈس کو معاوضہ دیتا ہے اور عالمی ڈیجیٹل مساوات کو حاصل کرتا ہے۔",
    contractAddressLabel: "سرکاری اسمارٹ کنٹریکٹ ایڈریس",
    copyAddressBtn: "کلاؤڈ ایڈریس کاپی کریں",
    copiedBtn: "کاپی ہو گیا",
    scrollIndicator: "سکول انجن",

    aboutBadge: "وائی فائی ٹوکن کا انکشاف",
    aboutHeading: "کیا ہے ",
    aboutHeadingHighlight: "وائی فائی ٹوکن؟",
    aboutDescription: "وائی فائی ٹوکن دنیا کا پہلا غیر مرکزی انٹرنیٹ کنیکٹیویٹی پروٹوکول ہے — جو ویب 3 بنیادی ڈھانچے کی اگلی نسل کو طاقت دینے کے لیے بنایا گیا ہے۔ کرنسی اور بلاک چین سے بھی آگے — $WIFI مستقبل کا سگنل ہے۔",
    
    statSupplyLabel: "کل دستیاب سپلائی",
    statSupplySub: "ہمیشہ کے لیے حد مقرر ہے",
    statNodesLabel: "فعال عالمی نوڈس",
    statNodesSub: "روزانہ پھیل رہے ہیں",
    statCountriesLabel: "منسلک ممالک",
    statCountriesSub: "پوری دنیا میں پھیلے ہوئے",
    statWalletsLabel: "ہولڈنگ والیٹس",
    statWalletsSub: "بڑھتی ہوئی کمیونٹی",

    featuresBadge: "خصوصی فیچرز",
    featuresHeading: "کیوں شامل ہوں ",
    featuresHeadingHighlight: "$WIFI میں؟",
    featuresDescription: "عالمی تیز رفتار انٹرنیٹ سگنل کے لیے کارکردگی کے بہترین ڈیزائن کو یکجا کرنا۔",
    featuresData: [
      {
        title: "انتہائی تیز رفتار لین دین",
        description: "جدید پیکیٹ ترجیحی نظام کے تحت، لین دین کی تصدیق پوری دنیا میں صرف 800 ملی سیکنڈ سے بھی کم وقت میں ہوتی ہے۔"
      },
      {
        title: "زیرو نالج پرائیویسی",
        description: "آپ کے کنکشن کے مقامات اور نیٹ ورک کی معلومات کو ZK-SNARK پروٹوکولز کے ساتھ مکمل محفوظ رکھا جاتا ہے۔"
      },
      {
        title: "آل بلاک چین مطابقت",
        description: "یہ ایتھریم، بائنانس اسمارٹ چین، سولانا اور دیگر لیئر-2 نیٹ ورکس پر بغیر کسی رکاوٹ کے کام کرتا ہے۔"
      },
      {
        title: "کمیونٹی گورننس",
        description: "نیٹ ورک کا ہر فیصلہ اور ٹوکن برن کی مقدار کا تعین براہ راست $WIFI ہولڈرز کے ووٹ کے ذریعے کیا جاتا ہے۔"
      },
      {
        title: "ڈیفلیشنری ماڈل",
        description: "مسلسل 1.5% ٹوکن برننگ کے عمل سے وقت کے ساتھ ساتھ کل سپلائی ہمیشہ کے لیے کم ہوتی چلی جاتی ہے۔"
      },
      {
        title: "ملٹری گریڈ سیکیورٹی",
        description: "سرٹیفائیڈ آڈٹ شدہ اسمارٹ کنٹریکٹ جس میں ملٹی دستخطی گورننس اور اینٹی وہیل تحفظ شامل ہے۔"
      }
    ],

    tokenomicsBadge: "ٹوکنومکس بیانات",
    tokenomicsHeading: "منصفانہ تقسیم کا ",
    tokenomicsHeadingHighlight: "چارٹ",
    tokenomicsDescription: "پائیدار ترقی، نوڈ آپریٹرز کے انعامات اور بہترین تجارتی مارکیٹ کو برقرار رکھنے کے لیے تیار کردہ نظام۔",
    tokenomicsDistribution: [
      {
        name: "پری سیل الاٹمنٹ",
        description: "ابتدائی فنڈز کا پول جو نیٹ ورک کے فوری آغاز اور محفوظ بنیاد کے لیے مختص کیا گیا ہے۔",
        amount: "300,000,000 $WIFI"
      },
      {
        name: "لاگڈ لیکویڈیٹی پول",
        description: "تجارتی حفاظت اور گہرائی کو یقینی بنانے کے لیے آغاز پر ہی اسمارٹ کنٹریکٹ میں ہمیشہ کے لیے لاک کیا گیا ہے۔",
        amount: "250,000,000 $WIFI"
      },
      {
        name: "ایکوسسٹم کی ترقی",
        description: "خاص طور پر پروٹوکول اپ ڈیٹس، ڈویلپر گرانٹس اور نوڈ چلانے والوں کے انعامات کے لیے۔",
        amount: "200,000,000 $WIFI"
      },
      {
        name: "مارکیٹنگ مہم",
        description: "عالمی اشتہارات، بڑی ایکسچینج لسٹنگز اور برانڈ پارٹنرشپ کے لیے مختص فنڈز۔",
        amount: "150,000,000 $WIFI"
      },
      {
        name: "ٹیم اور مشیران",
        description: "کم از کم 24 ماہ کے لاک پیریڈ کے ساتھ جو بتدریج سہ ماہی بنیادوں پر کھولا جائے گا۔",
        amount: "100,000,000 $WIFI"
      }
    ],

    roadmapBadge: "منصوبے کا روڈ میپ",
    roadmapHeading: "ہمارا شاندار ",
    roadmapHeadingHighlight: "روڈ میپ",
    roadmapDescription: "بنیادی آغاز سے لے کر عالمی سطح پر غیر مرکزی انٹرنیٹ کی فراہمی تک کا سفر۔",
    roadmapPhases: [
      {
        phase: "مرحلہ 1",
        title: "پہلا قدم",
        description: "وائی فائی کنیکٹیویٹی انجن کا بنیادی آغاز اور سمارٹ کنٹریکٹ کی تعیناتی۔",
        items: [
          "CertiK کے ذریعے اسمارٹ کنٹریکٹ کا سیکیورٹی آڈٹ",
          "آفیشل ٹوکن پری سیل کا باقاعدہ آغاز",
          "عالمی طور پر ویب 3 مارکیٹنگ مہم چلانا",
          "CoinMarketCap اور CoinGecko پر لسٹنگ"
        ]
      },
      {
        phase: "مرحلہ 2",
        title: "عالمی وسعت",
        description: "غیر مرکزی نوڈس کے نیٹ ورک کو پھیلانا اور تجارتی رسائی میں اضافہ کرنا۔",
        items: [
          "پوری دنیا میں 100,000 سے زائد ہولڈرز کا ہدف",
          "بڑی ایکسچینجز (Tier-1 CEX) پر ٹوکن لسٹنگ",
          "آفیشل وائی فائی والٹ اور ایپلیکیشن کا بیٹا ورژن",
          "غیر مرکزی پراکسی ریلے کی تعیناتی"
        ]
      },
      {
        phase: "مرحلہ 3",
        title: "غالب پروٹوکول",
        description: "ڈائریکٹ کراس چین برجز، افادیت کی لسٹنگ، اور تجارتی نیٹ ورکس کے معاہدے۔",
        items: [
          "بغیر کسی فیس کے کراس چین برج کا قیام",
          "وائی فائی این ایف ٹی نوڈ رسائی کارڈز کا اجرا",
          "ٹیلی کام کمپنیوں کے ساتھ اہم عالمی اتحاد",
          "پہلا غیر مرکزی انفراسٹرکچر سربراہی اجلاس"
        ]
      },
      {
        phase: "مرحلہ 4",
        title: "انٹرنیٹ انقلاب",
        description: "مین نیٹ پر منتقلی اور حتمی کنیکٹیویٹی انفراسٹرکچر کی تکمیل۔",
        items: [
          "آفیشل وائی فائی پروٹوکول مین نیٹ لانچنگ",
          "منسلک فعال ہولڈرز کی تعداد 1,000,000 سے تجاوز کرنا",
          "دنیا کے ٹاپ 10 پروجیکٹس میں جگہ بنانا",
          "غیر مرکزی خلائی انٹرنیٹ آئی ایس پی کی آزمائش"
        ]
      }
    ],

    buyBadge: "$WIFI کیسے خریدیں",
    buyHeading: "ٹوکن حاصل کریں اب صرف ",
    buyHeadingHighlight: "4 منٹ میں۔",
    buyDescription: "بائننس کوائن (BNB)، اسٹیبل کوائنز یا دیگر ڈیجیٹل اثاثوں کے ساتھ خریدیں۔",
    buySteps: [
      {
        step: "01",
        title: "محفوظ والٹ بنائیں",
        description: "میٹا ماسک (MetaMask) یا ٹرسٹ والٹ ڈاؤن لوڈ کریں۔",
        subText: "اپنے والٹ کا پاس ورڈ اور حفاظتی الفاظ (Backup Phrase) ہرگز کسی کے ساتھ شیئر نہ کریں۔"
      },
      {
        step: "02",
        title: "کرنسی والٹ میں رکھیں",
        description: "بائننس والٹ یا کسی دوسری لسٹنگ سے بائننس کوائن (BNB) حاصل کریں۔",
        subText: "ان فنڈز کو اپنی بنائی ہوئی والٹ ایڈریس پر منتقل کریں۔"
      },
      {
        step: "03",
        title: "ڈیپ پورٹل سے لنک کریں",
        description: "رائٹ سائیڈ کے بائے بٹن پر کلک کر کے اپنا والٹ کنیکٹ کریں۔",
        subText: "پروٹوکول کنکشن کی منظوری دیں اور اپنا بیلنس چیک کریں۔"
      },
      {
        step: "04",
        title: "پری سیل میں سوپ کریں",
        description: "ادائیگی کی رقم درج کریں اور فوری SWAP بٹن پر کلک کریں۔",
        subText: "والٹ میں ٹرانزیکشن کی منظوری دیں اور کامیاب خریداری مکمل کریں۔"
      }
    ],

    socialHeading: "ہماری فعال ",
    socialHeadingHighlight: "عالمی کمیونٹی",
    socialDescription: "سوشل نیٹ ورکس پر ہمارے ساتھ جڑیں اور نوڈ آپریٹرز اور سرمایہ کاروں سے ملیں۔",
    socialCards: [
      { platform: "ٹیلی گرام پورٹل", handle: "t.me/WiFiTokenOfficial", count: "48,250 اراکین آن لائن", buttonText: "چینل جوائن کریں" },
      { platform: "ٹویٹر / X پروفائل", handle: "@WiFiToken_Crypto", count: "124,800 متحرک فالوورز", buttonText: "اپ ٹو ڈیٹ رہیں" },
      { platform: "ڈسکارڈ کمیونٹی", handle: "discord.gg/WiFiGlobal", count: "62,500 تصدیق شدہ نوڈس", buttonText: "چیٹ شروع کریں" },
      { platform: "ریڈٹ کمیونٹی", handle: "r/WiFiToken", count: "18,400 مصدقہ ممبرز", buttonText: "سبسکرائب کریں" }
    ],

    faqHeading: "کوئی سوال ہے؟ ہمارے پاس ہیں ",
    faqHeadingHighlight: "جوابات",
    faqDescription: "$WIFI پروٹوکول، ٹرانزیکشنز، نوڈ سیٹ اپ اور ٹوکن ریلیز کی تفصیلات۔",
    faqs: [
      {
        question: "وائی فائی ٹوکن باقی ٹوکنز سے کیسے مختلف ہے؟",
        answer: "عام ٹوکنز کے برعکس $WIFI ٹوکن بیک گراؤنڈ میں کام کرنے والے غیر مرکزی انٹرنیٹ نیٹ ورک کا ایندھن ہے۔ نوڈ چلانے والوں کو سگنل شیئر کرنے پر $WIFI بلاک چین کے تحت انعام دیا جاتا ہے۔"
      },
      {
        question: "کیا اسمارٹ کنٹریکٹ مکمل طور پر محفوظ ہے؟",
        answer: "جی ہاں۔ سیکیورٹی ہماری اولین ترجیح ہے۔ اسمارٹ کنٹریکٹ کا آڈٹ نامور عالمی کمپنی CertiK نے کیا ہے اور اس میں کوئی خفیہ بیک ڈور یا خطرہ موجود نہیں ہے۔"
      },
      {
        question: "ٹوکن کی قیمت اور سپلائی پر برننگ کا کیا اثر ہوگا؟",
        answer: "ہر ٹرانزیکشن اور کنکشن فیس کا 1.5% خود بخود برن ایڈریس پر منتقل ہو کر ہمیشہ کے لیے ضائع ہو جاتا ہے، جس سے وقت کے ساتھ دباؤ بڑھتا ہے اور مانگ میں اضافہ ہوتا ہے۔"
      },
      {
        question: "میں نوڈ کیسے قائم کر سکتا ہوں؟",
        answer: "ہماری مین نیٹ لانچ کے بعد کوئی بھی تیز رفتار ہوم کنکشن کا مالک ہمارے چھوٹے سافٹ ویئر ریلے ڈیمو کو انسٹال کر کے نوڈ چلا سکتا ہے اور لائف ٹائم ریوارڈز جیت سکتا ہے۔"
      },
      {
        question: "کیا اسمارٹ برج کے ذریعے ٹوکن کراس چین ٹرانسفر کیے جا سکتے ہیں؟",
        answer: "جی ہاں، ہمارا آفیشل برج ایکوسسٹم 1-کلک کے ساتھ بغیر کسی اضافی فیس کے سولانا، بی ایس سی اور بائننس چین کے مابین اثاثے منتقل کرنے کی سہولت دے گا۔"
      },
      {
        question: "آفیشل کنٹریکٹ ایڈریس کہاں سے حاصل کیا جائے؟",
        answer: "آپ اوپر ہیڈر اور نیچے فوٹر میں موجود پینل سے آفیشل کنٹریکٹ کوڈ کاپی کریں۔ غیر سرکاری گروپ میں شیئر کیے گئے کسی بھی فیک کوڈ پر بھروسہ نہ کریں۔"
      }
    ],

    footerHeading: "وائی فائی پروٹوکول",
    footerSub: "جدید ملٹری گریڈ ٹیکنالوجی اور منفرد انٹرنیٹ شیئرنگ پر مبنی مستحکم بلاک چین پورٹل۔",
    footerRights: "© 2026 وائی فائی ٹوکن پروٹوکول۔ جملہ حقوق بحق کمپنی محفوظ ہیں۔",
    footerBuyPortal: "خریدنے کا پورٹل",
    footerFaq: "سوالات و جوابات",

    modalTitle: "محفوظ پورٹل",
    modalSubTitle: "$WIFI پری سیل والٹ",
    modalConnectTitle: "اپنا والٹ لنک کریں",
    modalConnectDesc: "انٹرنیٹ فنڈز چیک کرنے اور پری سیل میں محفوظ طریقے سے $WIFI حاصل کرنے کے لیے اپنا والٹ منتخب کریں۔",
    modalConnectingState: "رابطہ قائم کیا جا رہا ہے...",
    modalSecureContract: "تصدیق شدہ سمارٹ کنٹریکٹ سیکیورٹی پروٹوکول",
    modalPresaleRate: "پری سیل ریٹ",
    modalYourWifi: "آپ کا $WIFI بیلنس",
    modalPayCurrency: "ادائیگی کی کرنسی",
    modalReceiveCurrency: "آپ موصول کریں گے",
    modalVolumeBonus: "+{percent}% والیوم بونس انلاک ہو گیا ہے!",
    modalVolumeBonusDesc: "مبارک ہو! آپ نے اس خریداری پر اضافی +{bonus} وائی فائی ٹوکنز جیت لیے ہیں!",
    modalNetwork: "نیٹ ورک بلاک چین:",
    modalSlippage: "برداشت کی حد (Slippage):",
    modalEstimatedGas: "اندازہ گیس فیس:",
    modalEnterAmount: "رقم منتخب کریں",
    modalSwapButton: "$WIFI ٹوکن حاصل کریں",
    modalConsensusWait: "بلاک چین براڈکاسٹنگ",
    modalConsensusSub: "معاہدے کا تبادلہ جاری ہے",
    modalConsensusDesc: "ٹرانزیکشن کی تصدیق میں تقریباً 2 سے 4 سیکنڈ لگتے ہیں۔ برائے مہربانی اس ونڈو کو بند نہ کریں۔",
    modalSuccessTitle: "تبادلہ مکمل ہوا!",
    modalSuccessDesc: "مبارک ہو! آپ کا سگنل ایکسچینج بلاک چین کنسنسس لاگز میں کامیابی سے ٹرانزیکٹ ہو چکا ہے۔",
    modalReceiptStatus: "لین دین کی حالت:",
    modalReceiptSettled: "کامیاب",
    modalReceiptPrice: "ادا کردہ رقم:",
    modalReceiptReceive: "موصولہ الاٹمنٹ:",
    modalReceiptHash: "بلاک ہیش نمبر:",
    modalAddAssetBtn: "اپنے والٹ میں ٹوکن ایڈ کریں",
    modalAnotherPurchaseBtn: "مزید ٹوکنز حاصل کریں",
    modalComingSoonTitle: "🚀 $WIFI ٹوکن: جلدی آ رہا ہے!",
    modalComingSoonDesc: "ٹوکنز بہت جلد منٹ اور خود بخود آپ کے والٹ ایڈریس پر آئندہ ٹوکن جنریشن ایونٹ (TGE) کے دوران منتقل کر دیے جائیں گے۔"
  },
  ar: {
    navAbout: "نبذة عنا",
    navFeatures: "الميزات",
    navTokenomics: "التوكنات",
    navRoadmap: "خارطة الطريق",
    navHowToBuy: "كيفية الشراء",
    navFaq: "الأسئلة الشائعة",
    btnBuy: "شراء $WIFI الآن",
    btnBuyTokens: "شراء توكنات $WIFI",
    btnWhitepaper: "قراءة الورقة البيضاء",
    
    heroBadge: "مرحلة الإطلاق نشطة",
    heroHeadingStart: "مستقبل الاتصال الرقمي",
    heroHeadingHighlight: "يبدأ هنا.",
    heroDescription: "رمز WiFi (رمز $WIFI) — لامركزي. متصل. لا يمكن إيقافه. أول طبقة بنية تحتية عالمية لتعويض ومشاركة الإنترنت الرقمي العادل.",
    contractAddressLabel: "عنوان العقد الذكي الرسمي",
    copyAddressBtn: "نسخ العنوان",
    copiedBtn: "تم النسخ",
    scrollIndicator: "محرك التمرير",

    aboutBadge: "كشف ويفي توكن",
    aboutHeading: "ما هو ",
    aboutHeadingHighlight: "ويفي توكن؟",
    aboutDescription: "ويفي توكن هو أول بروتوكول اتصال لامركزي في العالم — تم بناؤه لتشغيل الجيل القادم من البنية التحتية لـ Web3. أبعد من مجرد عملة، وأبعد من بلوكشين — $WIFI هو إشارة المستقبل.",
    
    statSupplyLabel: "المعروض المتداول",
    statSupplySub: "حد أقصى دائم",
    statNodesLabel: "العقد العالمية النشطة",
    statNodesSub: "تتوسع يومياً",
    statCountriesLabel: "البلدان المتصلة",
    statCountriesSub: "تغطي نصفي الكرة الأرضية",
    statWalletsLabel: "المحافظ الحاملة",
    statWalletsSub: "مجتمعات متنامية",

    featuresBadge: "ميزات حصرية",
    featuresHeading: "لماذا تساهم في ",
    featuresHeadingHighlight: "$WIFI؟",
    featuresDescription: "دمج أفضل بنى الأداء لخلق بوابة سائلة لاتصالات الإنترنت عالية السرعة والعالمية.",
    featuresData: [
      {
        title: "معاملات فائقة السرعة",
        description: "مصمم بأحدث إجماع لأولويات الحزم، وتستغرق التسوية أقل من 800 مللي ثانية على مستوى العالم."
      },
      {
        title: "خصوصية المعرفة الصفرية",
        description: "إحداثيات الاتصال ونقل البيانات وهويات التوجيه الخاصة بك مؤمنة بالكامل باستخدام بروتوكولات ZK-SNARK."
      },
      {
        title: "متوافق مع الشبكات المتعددة",
        description: "يعمل بسلاسة عبر إيثيريوم وبلوكتشين بينانس الذكية وسولانا ومرحلات شبكة الطبقة الثانية."
      },
      {
        title: "حوكمة مجتمعية",
        description: "يتم التصويت على تحديثات معايير الشبكة ورسوم ترخيص العقد وتخصيصات الحرق والشراء بواسطة حاملي $WIFI."
      },
      {
        title: "نموذج الانكماش دائم",
        description: "حرق مستمر للمعاملات بنسبة 1.5% جنباً إلى جنب مع رسوم ترخيص البروتوكول يقلل العرض بشكل دائم بمرور الوقت."
      },
      {
        title: "أمان بمستوى عسكري",
        description: "عقود ذكية مدققة بشكل مزدوج مع حوكمة مدمجة متعددة التوقيعات وحماية من تراكم الحيتان."
      }
    ],

    tokenomicsBadge: "بيانات الاقتصاد الرقمي",
    tokenomicsHeading: "توزيع عادل ",
    tokenomicsHeadingHighlight: "للتوكنات",
    tokenomicsDescription: "هياكل بيئية محسوبة بدقة لدفع النمو المستدام وتوسيع نطاق العقد وعمق السيولة.",
    tokenomicsDistribution: [
      {
        name: "تخصيص البيع المسبق",
        description: "صندوق أولي مصمم لتعزيز الإطلاق الفوري للشبكة وتوفير التمهيد الآمن.",
        amount: "300,000,000 $WIFI"
      },
      {
        name: "مجمع السيولة المقفل",
        description: "مغلق بشكل دائم بموجب عقود ذكية عند الإطلاق لضمان تداول آمن في جميع الأوقات.",
        amount: "250,000,000 $WIFI"
      },
      {
        name: "تطوير النظام البيئي",
        description: "مخصص حصرياً لتحديثات البروتوكول ومنح المطورين العالميين ومكافآت تشغيل العقد.",
        amount: "200,000,000 $WIFI"
      },
      {
        name: "التسويق الاستراتيجي",
        description: "محجوز للحملات عالية التأثير وقوائم التبادل والرعاية في العالم الحقيقي.",
        amount: "150,000,000 $WIFI"
      },
      {
        name: "الفريق والمستشارين",
        description: "مقفل لمدة لا تقل عن 24 شهراً مع فترات استحقاق ربع سنوية خطية.",
        amount: "100,000,000 $WIFI"
      }
    ],

    roadmapBadge: "التسلسل الزمني للمشروع",
    roadmapHeading: "خارطتنا ",
    roadmapHeadingHighlight: "القوية",
    roadmapDescription: "الانتقال من مفاهيم الإطلاق التأسيسية إلى نشر شبكة إنترنت لامركزية عالمياً.",
    roadmapPhases: [
      {
        phase: "المرحلة الأولى",
        title: "التأسيس والبناء",
        description: "الإطلاق التأسيسي لمحرك اتصال $WIFI الأساسي ونشر العقود الذكية.",
        items: [
          "تدقيق أمان العقود الذكية بواسطة CertiK",
          "الإطلاق الرسمي لمرحلة البيع المسبق للرمز",
          "حملة تسويقية عالمية رفيعة المستوى لـ Web3",
          "التسجيل في CoinMarketCap و CoinGecko"
        ]
      },
      {
        phase: "المرحلة الثانية",
        title: "التوسع العالمي",
        description: "توسيع بصمة العقد اللامركزية وتوسيع إمكانية التداول.",
        items: [
          "استهداف أكثر من 100,000 حامل نشط في جميع أنحاء العالم",
          "إدراج الرمز في كبرى منصات تداول العملات الرقمية",
          "الإطلاق التجريبي لمحفظة وتطبيق WiFi الرسمي",
          "نشر مرحلات بروكسي لامركزية للتوجيه"
        ]
      },
      {
        phase: "المرحلة الثالثة",
        title: "البروتوكول المهيمن",
        description: "تنفيذ الجسور المباشرة بين الشبكات، وتكامل المنفعة، وعقود الترخيص التجارية.",
        items: [
          "جسر کروس چین بين شبكات ERC-20 / BEP-20 / Solana",
          "إطلاق بطاقات وصول عقد WiFi كمخططات NFT",
          "تحالفات استراتيجية مع كبار مزودي الاتصالات",
          "القمة الافتتاحية للبنية التحتية اللامركزية"
        ]
      },
      {
        phase: "المرحلة الرابعة",
        title: "الثورة الرقمية",
        description: "الانتقال الكامل إلى هندسة الشبكة الرئيسية والوصول إلى أقصى درجات نضج النظام البيئي.",
        items: [
          "إطلاق شبكة WiFi Protocol Mainnet الرسمية",
          "تجاوز حاجز 1,000,000 حامل نشط",
          "تأسيس مكانة دائمة ضمن أفضل 10 مشاريع رقمية",
          "إطلاق قمر صناعي لامركزي لتوفير الإنترنت"
        ]
      }
    ],

    buyBadge: "كيفية شراء $WIFI",
    buyHeading: "احصل على رمز الإشارة في أقل من ",
    buyHeadingHighlight: "4 دقائق فقط.",
    buyDescription: "كل ما عليك هو ربط محفظتك الرقمية وشراء التوكنات بواسطة BNB أو العملات المستقرة.",
    buySteps: [
      {
        step: "01",
        title: "إنشاء محفظة آمنة",
        description: "قم بتحميل المحافظ المعتمدة والموثوقة مثل MetaMask أو Trust Wallet.",
        subText: "قم بإعداد حمايتها وحافظ على كلمات المرور والمفاتيح الخاصة بک بکل سرية."
      },
      {
        step: "02",
        title: "الحصول على BNB / عملة رقمية",
        description: "اشترِ عملة بائننس (BNB) أو عملات مستقرة مباشرة داخل المحفظة أو من أي منصة مركزية.",
        subText: "قم بتحويل هذه الأموال إلى عنوان محفظتك الجديد."
      },
      {
        step: "03",
        title: "الاتصال ببوابة المنصة",
        description: "انقر على زر الشراء لربط محفظتك وتفويض المعاملات.",
        subText: "صادق على أذونات الاتصال بأمان تام وسهولة متكاملة."
      },
      {
        step: "04",
        title: "المبادلة بـ WiFiToken",
        description: "أدخل مبلغ الدفع، وحدد خيار التوكن، ثم انقر فوق تأكيد التبادل (SWAP).",
        subText: "وافق على المعاملة لتكتمل عملية الشراء وتحصل على الحصة."
      }
    ],

    socialHeading: "انضم إلى مجتمعنا ",
    socialHeadingHighlight: "العالمي الممتد",
    socialDescription: "تواصل مع المطورين، والمستثمرين، ومشغلي الشبكة عبر منصاتنا الافتراضية الرسمية.",
    socialCards: [
      { platform: "بوابة تليجرام", handle: "t.me/WiFiTokenOfficial", count: "48,250 عضو نشط الآن", buttonText: "انضم إلى القناة" },
      { platform: "تويتر / X", handle: "@WiFiToken_Crypto", count: "124,800 متابع نشط", buttonText: "تابع التحديثات" },
      { platform: "مجتمع ديسكورد", handle: "discord.gg/WiFiGlobal", count: "62,500 عقدة مسجلة", buttonText: "افتح المحادثة" },
      { platform: "منصة ريديت", handle: "r/WiFiToken", count: "18,400 مساهم نشط", buttonText: "اشترك الآن" }
    ],

    faqHeading: "لديك استفسارات؟ إليك ",
    faqHeadingHighlight: "الإجابات",
    faqDescription: "استكشف الأسئلة الشائعة حول بروتوكول $WIFI وبنى المعاملات وإعداد العقد الزمنية وجدول الإطلاق.",
    faqs: [
      {
        question: "ما الذي يجعل رمز $WIFI مميزاً وجذاباً للاستثمار؟",
        answer: "على عكس الرموز التقليدية، يعمل $WIFI كوقود أساسي على شبكة إنترنت لامركزية عالمية. يحصل مشغلو العقد على توكنات مقابل مشاركة عرض النطاق الترددي للشبكة."
      },
      {
        question: "هل العقد الذكي مدقق ومؤمن بالكامل؟",
        answer: "نعم تماماً. الأمان هو أساس شبكتنا. تم تدقيق عقد $WIFI الذكي بشكل مزدوج من قبل شركة CertiK العالمية الرائدة في مجال الأمن الرقمي."
      },
      {
        question: "كيف تؤثر آلية الانكماش الذاتية على حاملي الرموز؟",
        answer: "تحمل كل معاملة أو نقل إشارة عمولة طفيفة. يتم حرق 1.5% منها تلقائياً عن طريق إرسالها إلى عنوان معدوم، مما يقلل المعروض تدريجياً بمرور الوقت."
      },
      {
        question: "كيف يمكنني إطلاق وتفعيل عقدة شبكة خاصة بي؟",
        answer: "بعد إطلاق شبكتنا الرئيسية، سيتمكن أي شخص يملك إنترنت سريع من تحميل تطبيقنا أو ترقية نظامه ليعمل كمدقق مشفر، ويحصل على جوائز ومكافآت دورية."
      },
      {
        question: "هل يمكنني نقل رموز التوكنز بين شبكات البلوكشين المختلفة؟",
        answer: "نعم، سنطلق جسر العبور الذكي (Cross-Chain Bridge) بمجرد بدء التداول، مما يتيح لك تحويل التوكنات بكبسة واحدة وبدون أي عمولات إضافية."
      },
      {
        question: "أين يمكنني العثور على عنوان العقد الرسمي الموثق؟",
        answer: "عنوان العقد الرسمي مكتوب بوضوح في أعلى الصفحة وأسفلها. يرجى دائماً نسخ العنوان الرسمي من هذا الموقع حصراً، وتجنب أي أكواد مرسلة في غرف المحادثات العشوائية."
      }
    ],

    footerHeading: "بروتوكول ويفي",
    footerSub: "تمكين العدالة الرقمية والإنترنت المجاني للجميع عبر تكنولوجيا رائدة لحزم البيانات.",
    footerRights: "© 2026 بروتوكول ويفي توكن. جميع الحقوق محفوظة لشركتنا عالمياً.",
    footerBuyPortal: "بوابة الشراء",
    footerFaq: "الأسئلة الشائعة",

    modalTitle: "البوابة الآمنة",
    modalSubTitle: "شراء التوكن التمهيدي DAPP",
    modalConnectTitle: "ربط محفظتك الرقمية",
    modalConnectDesc: "اختر موفر الخدمة المفضل لديك للتحقق من رصيدك والبدء في الاستحواذ الآمن على توكنات $WIFI بأسعار مميزة.",
    modalConnectingState: "جاري الاتصال بقنوات التشفير...",
    modalSecureContract: "بروتوكول تكامل وأمان العقود الذكية الموثق",
    modalPresaleRate: "سعر البيع المسبق التمهيدي",
    modalYourWifi: "رصيدك الحالي من $WIFI",
    modalPayCurrency: "عملة الدفع",
    modalReceiveCurrency: "سوف تحصل على",
    modalVolumeBonus: "تم فتح مكافأة الحجم بمقدار +{percent}%!",
    modalVolumeBonusDesc: "مبارك! لقد حصلت على +{bonus} رمز $WIFI إضافي ومجاني على هذه المعاملة تلقائياً!",
    modalNetwork: "شبكة الدفع والبلوكشين:",
    modalSlippage: "تفاوت الانزلاق المسموح فيه:",
    modalEstimatedGas: "رسوم الغاز المقدرة للبلوكشين:",
    modalEnterAmount: "أدخل كمية الشراء",
    modalSwapButton: "تبديل والحصول على التوكنات",
    modalConsensusWait: "جاري المعالجة والبث للشبكة",
    modalConsensusSub: "تنفيذ اتفاقية التبادل الذكية",
    modalConsensusDesc: "يستغرق إجماع الشبكة وتأكيد الحركة بين 2 إلى 4 ثوانٍ. يرجى البقاء هنا وعدم إلغاء الطلب.",
    modalSuccessTitle: "اكتمل التبادل بنجاح!",
    modalSuccessDesc: "مبارك! تم دمج وتسجيل معاملة الشراء الخاصة بك بالكامل في عقود وسجلات البلوكشين الذكية.",
    modalReceiptStatus: "حالة الحركة المالية:",
    modalReceiptSettled: "مكتملة ومؤمنة",
    modalReceiptPrice: "المبلغ المدفوع للشبكة:",
    modalReceiptReceive: "الحصة المستلمة الإجمالية:",
    modalReceiptHash: "معرف الحركة الرقمي (Block Hash):",
    modalAddAssetBtn: "إضافة أصل $WIFI إلى محفظتك",
    modalAnotherPurchaseBtn: "تنفيذ عملية شراء أخرى",
    modalComingSoonTitle: "🚀 توكنات $WIFI: ستطلق قريباً!",
    modalComingSoonDesc: "سيتم سك وتوزيع التوكنات بشكل تلقائي إلى عنوان محفظتك المتصل أثناء حدث إنتاج وتوليد التوكنات (TGE) المرتقب."
  },
  es: {
    navAbout: "Acerca de",
    navFeatures: "Características",
    navTokenomics: "Tokenomics",
    navRoadmap: "Calendario",
    navHowToBuy: "Cómo comprar",
    navFaq: "FAQ",
    btnBuy: "COMPRAR $WIFI",
    btnBuyTokens: "COMPRAR ADQUISICIÓN $WIFI",
    btnWhitepaper: "LEER WHITEPAPER",
    
    heroBadge: "ETAPA DE LANZAMIENTO ACTIVA",
    heroHeadingStart: "El futuro de la conectividad digital",
    heroHeadingHighlight: "Comienza aquí.",
    heroDescription: "WiFiToken ($WIFI) — Descentralizado. Conectado. Imparable. La primera plataforma universal que compensa los nodos de compartición de internet y unifica la equidad tecnológica.",
    contractAddressLabel: "DIRECCIÓN DE CONTRATO OFICIAL",
    copyAddressBtn: "COPIAR CONTRATO",
    copiedBtn: "COPIADO",
    scrollIndicator: "NAVEGACIÓN",

    aboutBadge: "REVELACIÓN DE WIFITOKEN",
    aboutHeading: "¿Qué es ",
    aboutHeadingHighlight: "WiFiToken?",
    aboutDescription: "WiFiToken es el primer protocolo de conectividad inalámbrica libre del mundo, construido específicamente para alimentar el mañana de Web3. Más allá de la moneda y el Ledger: es la señal del porvenir.",
    
    statSupplyLabel: "Suministro Circulante",
    statSupplySub: "Límite fijo permanente",
    statNodesLabel: "Nodos Globales Activos",
    statNodesSub: "Expandiendo cada día",
    statCountriesLabel: "Mundial Conectados",
    statCountriesSub: "Cruzando continentes",
    statWalletsLabel: "Monederos de Soporte",
    statWalletsSub: "Comunidades en desarrollo",

    featuresBadge: "ATRIBUTOS CLAVE",
    featuresHeading: "¿Por qué invertir en ",
    featuresHeadingHighlight: "$WIFI?",
    featuresDescription: "Integración de infraestructura de rendimiento militar para agilizar transacciones rápidas sin intermediación.",
    featuresData: [
      {
        title: "Transacciones Ultra-Rápidas",
        description: "Diseñado con consenso avanzado de prioridad de paquetes; la confirmación toma menos de 800 milisegundos a nivel mundial."
      },
      {
        title: "Privacidad Zero-Knowledge",
        description: "Tus coordenadas geográficas, paquetes y datos personales están cifrados mediante protocolos criptográficos ZK-SNARK."
      },
      {
        title: "Compatibilidad Multi-Bolsa",
        description: "Funciona perfectamente entre redes Ethereum, Binance Smart Chain, Solana y relés de escalabilidad Layer-2."
      },
      {
        title: "Gobernanza de Comunidad",
        description: "Cada cambio de parámetro, comisión de nodo y recompra es decidido mediante la votación democrática de los inversores $WIFI."
      },
      {
        title: "Modelo de Deflación Activo",
        description: "El 1.5% de cada transacción se quema automáticamente mediante el desvío a una cartera nula, reduciendo la oferta."
      },
      {
        title: "Sólida Seguridad Certificada",
        description: "Contratos inteligentes doblemente auditados por CertiK, sin puertas traseras y con bloqueos de carteras abusivas (Anti-Whale)."
      }
    ],

    tokenomicsBadge: "MÉTRICAS DEL TOKEN",
    tokenomicsHeading: "Distribución Equitativa ",
    tokenomicsHeadingHighlight: "Matrix",
    tokenomicsDescription: "Diseñado meticulosamente para incentivar a los operadores de nodos y garantizar liquidez comercial profunda permanente.",
    tokenomicsDistribution: [
      {
        name: "Asignación Preventa",
        description: "Fondo inicial destinado exclusivamente al arranque seguro del ecosistema y preventas tempranas.",
        amount: "300,000,000 $WIFI"
      },
      {
        name: "Pool de Liquidez Permanente",
        description: "Bloqueado permanentemente por contrato inteligente para prevenir cualquier retiro de capital de trading.",
        amount: "250,000,000 $WIFI"
      },
      {
        name: "Desarrollo del Ecosistema",
        description: "Para actualizaciones estratégicas del protocolo y recompensas continuas de distribución de nodos.",
        amount: "200,000,000 $WIFI"
      },
      {
        name: "Marketing Global",
        description: "Dedicado a publicidad masiva, patrocinio de alto nivel y listados clave de intercambios.",
        amount: "150,000,000 $WIFI"
      },
      {
        name: "Equipo y Consejeros",
        description: "Sujeto a liberación lineal trimestral tras una retención obligatoria mínima de 24 meses.",
        amount: "100,000,000 $WIFI"
      }
    ],

    roadmapBadge: "CRONOGRAMA DE TRABAJO",
    roadmapHeading: "Nuestro ambicioso ",
    roadmapHeadingHighlight: "Camino",
    roadmapDescription: "Desde los cimientos del lanzamiento técnico primario hasta la implementación de cobertura espacial mundial descentralizada.",
    roadmapPhases: [
      {
        phase: "Fase 1",
        title: "Lanzamiento y Génesis",
        description: "Puesta en marcha del core del protocolo $WIFI y la auditoría de contratos inteligentes.",
        items: [
          "Auditoría rigurosa de seguridad por CertiK",
          "Apertura del Launchpool y preventa inicial oficial",
          "Campaña de relaciones públicas Web3 global",
          "Registros iniciales en CoinMarketCap y CoinGecko"
        ]
      },
      {
        phase: "Fase 2",
        title: "Expansión Internacional",
        description: "Ampliación de la red mundial y mayor penetración en portales de corretaje.",
        items: [
          "Meta de 100,000 inversores activos en el mundo",
          "Publicaciones e intercambios centrales Tier-1",
          "Lanzamiento de la billetera beta WiFiWallet y DApp",
          "Despliegue operativo de proxies de ruteo"
        ]
      },
      {
        phase: "Fase 3",
        title: "Protocolo Omnipresente",
        description: "Integración nativa de puentes seguros cross-chain y licenciamientos empresariales de telecomunicaciones.",
        items: [
          "Puentes instantáneos sin comisiones entre Base, BSC, Ethereum y Solana",
          "Distribución de tarjetas y Badges NFT de verificación de nodo",
          "Alianzas comerciales estratégicas con proveedores mundiales de telecom",
          "Cumbre fundacional internacional de IoT y conectividad"
        ]
      },
      {
        phase: "Fase 4",
        title: "Revolución de Cobertura",
        description: "Paso definitivo e internacional al WiFi Mainnet nativo.",
        items: [
          "Lanzamiento definitivo del WiFi Protocol Mainnet",
          "Súper hito de 1,000,000 de inversores de soporte activos",
          "Lugar permanente dentro del top index de criptoactivos",
          "Prueba de conectividad de satélite de baja órbita ISP descentralizado"
        ]
      }
    ],

    buyBadge: "GUÍA DE ADQUISICIÓN",
    buyHeading: "Adquiere el token en menos de ",
    buyHeadingHighlight: "4 minutos.",
    buyDescription: "Simplemente conecta tu cartera mediante BNB o USDT descentralizados para asegurar tu posición.",
    buySteps: [
      {
        step: "01",
        title: "Crea tu Monedero",
        description: "Descarga monederos verificados como MetaMask, Trust Wallet o Phantom.",
        subText: "Configura tus credenciales y resguarda tu frase semilla privada bajo llave digital."
      },
      {
        step: "02",
        title: "Adquiere Fondos BNB",
        description: "Compra criptomonedas (BNB o stablecoins) en tu aplicación o cualquier exchange centralizado.",
        subText: "Envía los activos directamente a tu dirección pública configurada en el paso anterior."
      },
      {
        step: "03",
        title: "Conéctate al Portal",
        description: "Presiona el botón de conexión en este portal para validar tu saldo en el DApp.",
        subText: "Habilita los permisos del contrato integrado con total seguridad."
      },
      {
        step: "04",
        title: "Intercambia por $WIFI",
        description: "Indica el monto que deseas invertir y presiona 'SWAP FOR $WIFI'.",
        subText: "Firma la operación en tu dispositivo y felicidades: eres parte del ecosistema."
      }
    ],

    socialHeading: "Nuestros canales de ",
    socialHeadingHighlight: "Comunidad",
    socialDescription: "Conectando operadores, mineros, desarrolladores e inversores de manera instantánea.",
    socialCards: [
      { platform: "Canal de Telegram", handle: "t.me/WiFiTokenOfficial", count: "48,250 activos en línea", buttonText: "Unirse al canal" },
      { platform: "Perfil de Twitter", handle: "@WiFiToken_Crypto", count: "124,800 seguidores en directo", buttonText: "Seguir actualizaciones" },
      { platform: "Servidor de Discord", handle: "discord.gg/WiFiGlobal", count: "62,500 nodos en debate", buttonText: "Abrir comunidad" },
      { platform: "Foro de Reddit", handle: "r/WiFiToken", count: "18,400 redactores expertos", buttonText: "Añadir suscripción" }
    ],

    faqHeading: "¿Preguntas? Tenemos ",
    faqHeadingHighlight: "Respuestas",
    faqDescription: "Encuentra información veraz sobre el ecosistema WiFi, tiempos de liberación y especificaciones técnicas.",
    faqs: [
      {
        question: "¿Qué hace que $WIFI sea diferente a otras criptomonedas?",
        answer: "A diferencia de criptomonedas especulativas, $WIFI es la unidad de intercambio de ancho de banda. Operadores de hardware obtienen recompensas en tiempo real por compartir señal, mientras usuarios adquieren acceso económico."
      },
      {
        question: "¿Está el contrato auditado para máxima tranquilidad?",
        answer: "En efecto. El contrato está auditado de manera exhaustiva por la prestigiosa firma internacional CertiK, descartando vulnerabilidades o desvíos."
      },
      {
        question: "¿En qué consiste la deflación programada?",
        answer: "Cada intercambio retira un porcentaje mínimo de circulación. El 1.5% de todas las transacciones físicas se envía a una billetera quemada bloqueada, garantizando un suministro decreciente."
      },
      {
        question: "¿Cómo puedo activar mi propio nodo móvil o residencial?",
        answer: "Una vez completado el Mainnet, podrás instalar nuestra aplicación de bajo tamaño o actualizar tu antena receptora residencial para ganar tokens en piloto automático."
      },
      {
        question: "¿Soporta transferencia mutua entre blockchains?",
        answer: "Ofrecemos soporte nativo multiplataforma. Podrás transferir o convertir tus tokens a redes como Solana, Base, BNB Chain o Ethereum mediante nuestro puente seguro."
      },
      {
        question: "¿Dónde puedo consultar la dirección auténtica del contrato?",
        answer: "Se encuentra impresa en los encabezados principales de este sitio web. Nunca utilices contraseñas o contratos proveídos por desconocidos en foros informales."
      }
    ],

    footerHeading: "PROTOCOLO WIFI",
    footerSub: "Fomentando la equidad del internet móvil mundial mediante tecnología innovadora Web3.",
    footerRights: "© 2026 Protocolo WiFiToken. Todos los derechos reservados globalmente.",
    footerBuyPortal: "Módulo De Compra",
    footerFaq: "Sección de Preguntas",

    modalTitle: "MÓDULO DE INTERCAMBIO",
    modalSubTitle: "$WIFI COBERTURA DAPP",
    modalConnectTitle: "Vincula tu billetera Web3",
    modalConnectDesc: "Elige tu proveedor preferido para validar tu cartera e iniciar tu participación en el presale de manera resguardada.",
    modalConnectingState: "Conectando al servidor criptográfico...",
    modalSecureContract: "Seguridad y Encriptación Homologada por CertiK",
    modalPresaleRate: "Valor Especial Preventa",
    modalYourWifi: "Tu saldo de tokens $WIFI",
    modalPayCurrency: "Moneda de pago",
    modalReceiveCurrency: "Recibirás en tu billetera",
    modalVolumeBonus: "¡Premio de volumen +{percent}% desbloqueado!",
    modalVolumeBonusDesc: "¡Felicidades! Has asegurado un incentivo extraordinario de +{bonus} tokens $WIFI extras gratuitos.",
    modalNetwork: "Lanzador de Bloques:",
    modalSlippage: "Incertidumbre programada (Slippage):",
    modalEstimatedGas: "Comisión del minero estimada (Gas):",
    modalEnterAmount: "Indica cantidad a pagar",
    modalSwapButton: "INTERCAMBIAR ACTIVOS AHORA",
    modalConsensusWait: "PROCESANDO EN BLOCKCHAIN",
    modalConsensusSub: "Flipping de Activo Inteligente",
    modalConsensusDesc: "El consenso tarda entre 2 y 4 segundos típicamente. Favor de esperar y no salir del explorador.",
    modalSuccessTitle: "¡Canje Exitoso!",
    modalSuccessDesc: "¡Operación validada! Tus tokens han sido reservados y apuntados a tu dirección pública en el Ledger.",
    modalReceiptStatus: "Estatus final:",
    modalReceiptSettled: "Asignado y Confirmado",
    modalReceiptPrice: "Costo asumido:",
    modalReceiptReceive: "Tokens adjudicados:",
    modalReceiptHash: "Hach de validación:",
    modalAddAssetBtn: "Registrar $WIFI en tu monedero",
    modalAnotherPurchaseBtn: "Ejecutar otra operación",
    modalComingSoonTitle: "🚀 ¡Tokens $WIFI: ¡Muy Pronto!",
    modalComingSoonDesc: "Los tokens serán generados y depositados de forma automatizada en tu dirección registrada en el próximo Evento de Generación de Tokens (TGE)."
  }
};

// Helper function to create clean international fallback translation sets
function makeSet(base: TranslationSet, overrides: Partial<TranslationSet>): TranslationSet {
  return {
    ...base,
    ...overrides,
    featuresData: overrides.featuresData || base.featuresData,
    tokenomicsDistribution: overrides.tokenomicsDistribution || base.tokenomicsDistribution,
    roadmapPhases: overrides.roadmapPhases || base.roadmapPhases,
    buySteps: overrides.buySteps || base.buySteps,
    socialCards: overrides.socialCards || base.socialCards,
    faqs: overrides.faqs || base.faqs,
  };
}

const frOverrides: Partial<TranslationSet> = {
  navAbout: "À Propos",
  navFeatures: "Fonctionnalités",
  navTokenomics: "Tokenomics",
  navRoadmap: "Feuille de Route",
  navHowToBuy: "Comment Acheter",
  navFaq: "FAQ",
  btnBuy: "ACHETER $WIFI",
  btnBuyTokens: "ACHETER DES JETONS $WIFI",
  btnWhitepaper: "LIRE LE LIVRE BLANC",
  heroBadge: "PHASE DE LANCEMENT ACTIVE",
  heroHeadingStart: "L'avenir de la connectivité numérique",
  heroHeadingHighlight: "commence ici.",
  heroDescription: "WiFiToken ($WIFI) — Décentralisé. Connecté. Imparable. La première couche d'infrastructure universelle qui compense les nœuds de partage et comble l'équité mondiale de l'internet.",
  contractAddressLabel: "ADRESSE DE CONTRAT OFFICIELLE",
  copyAddressBtn: "COPIER L'ADRESSE",
  copiedBtn: "COPIÉ",
  scrollIndicator: "DÉFILER L'ÉCRAN",
  aboutBadge: "RÉVÉLATION DE WIFITOKEN",
  aboutHeading: "Qu'est-ce que ",
  aboutHeadingHighlight: "WiFiToken ?",
  aboutDescription: "WiFiToken est le premier protocole de connectivité décentralisé au monde, conçu pour alimenter la prochaine génération d'infrastructure Web3. Au-delà de la monnaie, $WIFI est le signal du futur.",
  statSupplyLabel: "Offre en Circulation",
  statSupplySub: "Plafonné en permanence",
  statNodesLabel: "Nœuds Globaux Actifs",
  statNodesSub: "Expansion quotidienne",
  statCountriesLabel: "Pays Connectés",
  statCountriesSub: "À travers les hémisphères",
  statWalletsLabel: "Portefeuilles Détenteurs",
  statWalletsSub: "Communautés grandissantes",
  featuresBadge: "FONCTIONNALITÉS EXCLUSIVES",
  featuresHeading: "Pourquoi miser sur ",
  featuresHeadingHighlight: "$WIFI ?",
  featuresDescription: "Intégration d'architectures réseau performantes pour créer une passerelle fluide de communication à haute vitesse.",
  tokenomicsBadge: "MÉTRIQUES DES JETONS",
  tokenomicsHeading: "Matrice de Distribution ",
  tokenomicsHeadingHighlight: "Équitable",
  tokenomicsDescription: "Des structures d'écosystème méticuleusement calculées pour stimuler une croissance durable.",
  roadmapBadge: "CHRONOLOGIE DU PROJET",
  roadmapHeading: "Notre Feuille de Route ",
  roadmapHeadingHighlight: "Imparable",
  roadmapDescription: "Du concept initial au déploiement de FAI décentralisés partout dans le monde.",
  buyBadge: "COMMENT ACHETER $WIFI",
  buyHeading: "Acquérez le jeton en moins de ",
  buyHeadingHighlight: "4 minutes.",
  buyDescription: "Connectez simplement votre portefeuille en BNB ou actifs stables pour acquérir votre part.",
  socialHeading: "Rejoignez Notre Hub ",
  socialHeadingHighlight: "Mondial",
  socialDescription: "Connectez-vous avec les validateurs et les développeurs sur les réseaux sociaux principaux.",
  faqHeading: "Des Questions ? Nous avons les ",
  faqHeadingHighlight: "Réponses",
  faqDescription: "Explorez les questions courantes sur le protocole, la configuration des nœuds et le lancement.",
  footerHeading: "PROTOCOLE WIFI",
  footerSub: "Garantir l'équité de la connectivité mondiale grâce à des technologies blockchain de premier ordre.",
  footerRights: "© 2026 Protocole WiFiToken. Tous droits réservés mondialement.",
  footerBuyPortal: "Portail d'Achat",
  footerFaq: "FAQ du Protocole",
  modalTitle: "PORTAIL SÉCURISÉ",
  modalSubTitle: "PRÉVENTE DAPP $WIFI",
  modalConnectTitle: "Connectez Votre Portefeuille",
  modalConnectDesc: "Sélectionnez votre portefeuille Web3 préféré pour démarrer l'achat de jetons $WIFI en toute sécurité.",
  modalConnectingState: "CONNEXION EN COURS...",
  modalSecureContract: "Intégration de contrat intelligent vérifiée par CertiK",
  modalPresaleRate: "TAUX DE PRÉVENTE",
  modalYourWifi: "VOTRE SOLDE $WIFI",
  modalPayCurrency: "DEVISE DE PAIEMENT",
  modalReceiveCurrency: "VOUS RECEVREZ",
  modalVolumeBonus: "BONUS DE VOLUME +{percent}% DÉVERROUILLÉ !",
  modalVolumeBonusDesc: "Vous avez gagné +{bonus} jetons $WIFI supplémentaires sur cet achat !",
  modalNetwork: "Réseau de Liquinité :",
  modalSlippage: "Tolérance au Glissement :",
  modalEstimatedGas: "Frais de Gaz Estimés :",
  modalEnterAmount: "SÉLECTIONNER LE MONTANT",
  modalSwapButton: "ÉCHANGER CONTRE DES JETONS $WIFI",
  modalConsensusWait: "TRANSACTION BLOCKCHAIN EN COURS",
  modalConsensusSub: "Exécution de l'Échange de Contrat",
  modalConsensusDesc: "Le temps de transaction moyen est de 2 à 4 secondes. Ne fermez pas cette fenêtre.",
  modalSuccessTitle: "Échange Réussi !",
  modalSuccessDesc: "Félicitations ! Votre transaction d'échange a été intégrée avec succès dans la blockchain.",
  modalReceiptStatus: "Statut de la Transaction :",
  modalReceiptSettled: "Confirmé et Sécurisé",
  modalReceiptPrice: "Paiement Effectué :",
  modalReceiptReceive: "Allocation Reçue :",
  modalReceiptHash: "Hachage du Bloc :",
  modalAddAssetBtn: "Ajouter l'actif $WIFI au portefeuille",
  modalAnotherPurchaseBtn: "Faire un autre achat",
  modalComingSoonTitle: "🚀 Jetons $WIFI : Très Prochainement !",
  modalComingSoonDesc: "Les jetons seront distribués automatiquement lors de l'événement de génération de jetons (TGE) à venir."
};

const deOverrides: Partial<TranslationSet> = {
  navAbout: "Über Uns",
  navFeatures: "Funktionen",
  navTokenomics: "Tokenomics",
  navRoadmap: "Roadmap",
  navHowToBuy: "Anleitung",
  navFaq: "FAQ",
  btnBuy: "JETZT $WIFI KAUFEN",
  btnBuyTokens: "$WIFI TOKEN KAUFEN",
  btnWhitepaper: "WHITEPAPER LESEN",
  heroBadge: "LAUNCH-PHASE AKTIV",
  heroHeadingStart: "Die Zukunft digitaler Konnektivität",
  heroHeadingHighlight: "beginnt hier.",
  heroDescription: "WiFiToken ($WIFI) — Dezentralisiert. Verbunden. Unaufhaltsam. Die erste universelle Infrastrukturschicht, die Sharing-Nodes belohnt und globale Internet-Gleichheit fördert.",
  contractAddressLabel: "OFFIZIELLE VERTRAGSADRESSE",
  copyAddressBtn: "ADRESSE KOPIEREN",
  copiedBtn: "KOPIERT",
  scrollIndicator: "SCROLL-ENGINE",
  aboutBadge: "WIFITOKEN ENTHÜLLUNG",
  aboutHeading: "Was ist ",
  aboutHeadingHighlight: "WiFiToken?",
  aboutDescription: "WiFiToken ist das weltweit erste dezentrale Konnektivitätsprotokoll, das für die Web3-Infrastruktur der nächsten Generation entwickelt wurde. Mehr als nur eine Währung: $WIFI ist das Signal der Zukunft.",
  statSupplyLabel: "Umlaufende Menge",
  statSupplySub: "Dauerhaft begrenzt",
  statNodesLabel: "Aktive globale Knoten",
  statNodesSub: "Tägliche Expansion",
  statCountriesLabel: "Verbundene Länder",
  statCountriesSub: "Über alle Hemisphären",
  statWalletsLabel: "Halte-Wallets",
  statWalletsSub: "Wachsende Community",
  featuresBadge: "EXKLUSIVE FUNKTIONEN",
  featuresHeading: "Warum investieren in ",
  featuresHeadingHighlight: "$WIFI?",
  featuresDescription: "Integration von Hochleistungsarchitekturen für ein flüssiges Gateway weltweiter Verbindungen.",
  tokenomicsBadge: "TOKEN-METRIKEN",
  tokenomicsHeading: "Faire Verteilungs",
  tokenomicsHeadingHighlight: "Matrix",
  tokenomicsDescription: "Sorgfältig berechnete Ökosystem-Strukturen für nachhaltiges Wachstum.",
  roadmapBadge: "PROJEKT-CHRONOLOGIE",
  roadmapHeading: "Unsere unaufhaltbare ",
  roadmapHeadingHighlight: "Roadmap",
  roadmapDescription: "Vom ersten Launch-Konzept bis hin zur globalen dezentralen ISP-Abdeckung.",
  buyBadge: "$WIFI KAUFEN ANLEITUNG",
  buyHeading: "Token erwerben in weniger als ",
  buyHeadingHighlight: "4 Minuten.",
  buyDescription: "Verbinden Sie einfach Ihre Wallet über BNB oder Stablecoins, um Ihren Anteil zu sichern.",
  socialHeading: "Treten Sie unserem ",
  socialHeadingHighlight: "Global Hub bei",
  socialDescription: "Vernetzen Sie sich weltweit mit Validatoren, Betreibern und Entwicklern.",
  faqHeading: "Haben Sie Fragen? Wir die ",
  faqHeadingHighlight: "Antworten",
  faqDescription: "Erfahren Sie Wissenswertes über das $WIFI-Protokoll, Transaktionen und Zeitpläne.",
  footerHeading: "WIFI PROTOKOLL",
  footerSub: "Förderung der globalen Internetgerechtigkeit durch zukunftsweisende Blockchain-Technologien.",
  footerRights: "© 2026 WiFiToken Protokoll. Alle Rechte weltweit vorbehalten.",
  footerBuyPortal: "Kaufportal",
  footerFaq: "Protokoll-FAQ",
  modalTitle: "SICHERES PORTAL",
  modalSubTitle: "$WIFI PRE-SALE DAPP",
  modalConnectTitle: "Verbinden Sie Ihre Web3 Wallet",
  modalConnectDesc: "Wählen Sie Ihren bevorzugten Anbieter, um Guthaben zu prüfen und $WIFI-Token sicher zu erwerben.",
  modalConnectingState: "VERBINDUNG WIRD HERGESTELLT...",
  modalSecureContract: "Verifiziertes Smart-Contract-Protokoll geprüft von CertiK",
  modalPresaleRate: "PRE-SALE KURS",
  modalYourWifi: "IHR $WIFI GUTHABEN",
  modalPayCurrency: "ZAHLUNGSWÄHRUNG",
  modalReceiveCurrency: "SIE ERHALTEN",
  modalVolumeBonus: "+{percent}% VOLUMEN-BONUS FREIGESCHALTET!",
  modalVolumeBonusDesc: "Sie haben zusätzlich +{bonus} $WIFI Token bei diesem Kauf erhalten!",
  modalNetwork: "Liquiditätsnetzwerk:",
  modalSlippage: "Slippage-Toleranz:",
  modalEstimatedGas: "Geschätzte Gas-Gebühr:",
  modalEnterAmount: "MENGE EINGEBEN",
  modalSwapButton: "FÜR $WIFI TOKEN TAUSCHEN",
  modalConsensusWait: "BLOCKCHAIN-VERARBEITUNG",
  modalConsensusSub: "Tauschvertrag wird ausgeführt",
  modalConsensusDesc: "Transaktionsbestätigung dauert durchschnittlich 2-4 Sekunden. Fenster nicht schließen.",
  modalSuccessTitle: "Tausch abgeschlossen!",
  modalSuccessDesc: "Herzlichen Glückwunsch! Ihre Transaktion wurde erfolgreich in die Blockchain eingetragen.",
  modalReceiptStatus: "Transaktionsstatus:",
  modalReceiptSettled: "Erfolgreich bestätigt",
  modalReceiptPrice: "Gezahlter Betrag:",
  modalReceiptReceive: "Erhaltene Zuteilung:",
  modalReceiptHash: "Block-Hash:",
  modalAddAssetBtn: "$WIFI-Token zur Wallet hinzufügen",
  modalAnotherPurchaseBtn: "Weiteren Kauf tätigen",
  modalComingSoonTitle: "🚀 $WIFI Token: Demnächst verfügbar!",
  modalComingSoonDesc: "Die Token werden automatisch während des bevorstehenden Token Generation Events (TGE) verteilt."
};

const ptOverrides: Partial<TranslationSet> = {
  navAbout: "Sobre",
  navFeatures: "Recursos",
  navTokenomics: "Tokenomics",
  navRoadmap: "Roteiro",
  navHowToBuy: "Como comprar",
  navFaq: "Perguntas",
  btnBuy: "COMPRAR $WIFI",
  btnBuyTokens: "COMPRAR TOKENS $WIFI",
  btnWhitepaper: "LER WHITEPAPER",
  heroBadge: "LANÇAMENTO ATIVO",
  heroHeadingStart: "O futuro da conectividade",
  heroHeadingHighlight: "Começa aqui.",
  heroDescription: "WiFiToken ($WIFI) — Descentralizado. Conectado. Imparável. A primeira rede universal de infraestrutura que compensa nós de compartilhamento e une a equidade global de internet.",
  contractAddressLabel: "ENDEREÇO DE CONTRATO OFICIAL",
  copyAddressBtn: "COPIAR ENDEREÇO",
  copiedBtn: "COPIADO",
  scrollIndicator: "ROLAR PÁGINA",
  aboutBadge: "REVELAÇÃO DO WIFITOKEN",
  aboutHeading: "O que é o ",
  aboutHeadingHighlight: "WiFiToken?",
  aboutDescription: "O WiFiToken é o primeiro protocolo descentralizado de conexão do planeta, projetado para impulsionar a infraestrutura da próxima geração da Web3. É a frequência do futuro.",
  statSupplyLabel: "Fornecimento Circulante",
  statSupplySub: "Teto rígido permanente",
  statNodesLabel: "Nós Globais Ativos",
  statNodesSub: "Em expansão contínua",
  statCountriesLabel: "Países Conectados",
  statCountriesSub: "Unindo hemisférios",
  statWalletsLabel: "Carteiras Ativas",
  statWalletsSub: "Comunidade em crescimento",
  featuresBadge: "FUNÇÕES EXCLUSIVAS",
  featuresHeading: "Por que investir no ",
  featuresHeadingHighlight: "$WIFI?",
  featuresDescription: "Integração de alta eficiência para permitir transferências ultra velozes e redes estáveis.",
  tokenomicsBadge: "MÉTRICAS DO TOKEN",
  tokenomicsHeading: "Distribuição Justa e ",
  tokenomicsHeadingHighlight: "Equilibrada",
  tokenomicsDescription: "Estruturas matemáticas refinadas para sustentar o ecossistema a longo prazo.",
  roadmapBadge: "ROTEIRO DO PROJETO",
  roadmapHeading: "Nosso Roteiro ",
  roadmapHeadingHighlight: "Imparável",
  roadmapDescription: "Da fundação inicial até o provimento de ISPs descentralizados globais.",
  buyBadge: "COMO COMPRAR PASSO A PASSO",
  buyHeading: "Adquira tokens em menos de ",
  buyHeadingHighlight: "4 minutos.",
  buyDescription: "Simplesmente conecte sua carteira via BNB ou ativos estáveis para confirmar sua compra.",
  socialHeading: "Faça Parte de Nosso ",
  socialHeadingHighlight: "Hub Global",
  socialDescription: "Conecte-se com operadores de antenas, investidores e desenvolvedores instantaneamente.",
  faqHeading: "Dúvidas? Temos as ",
  faqHeadingHighlight: "Respostas",
  faqDescription: "Explore respostas para questões sobre segurança, utilidade e rendimentos de nós do $WIFI.",
  footerHeading: "PROTOCOLO WIFI",
  footerSub: "Empoderando a inclusão digital global através de tecnologias avançadas de dados.",
  footerRights: "© 2026 Protocolo WiFiToken. Todos os direitos reservados mundialmente.",
  footerBuyPortal: "Portal de Compra",
  footerFaq: "Perguntas do Protocolo",
  modalTitle: "PORTAL SEGURO",
  modalSubTitle: "$WIFI PRE-SALE DAPP",
  modalConnectTitle: "Conecte sua Carteira Web3",
  modalConnectDesc: "Selecione o provedor para ler seu saldo e adquirir tokens $WIFI de forma totalmente segura.",
  modalConnectingState: "ESTABELECENDO CONEXÃO...",
  modalSecureContract: "Contrato Inteligente verificado auditado pela CertiK",
  modalPresaleRate: "VALOR DA PRÉ-VENDA",
  modalYourWifi: "SEU SALDO DE $WIFI",
  modalPayCurrency: "MOEDA DE PAGAMENTO",
  modalReceiveCurrency: "SOU RECEBERÁ",
  modalVolumeBonus: "BÔNUS DE VOLUME +{percent}% DESBLOQUEADO!",
  modalVolumeBonusDesc: "Você ganhou +{bonus} tokens $WIFI adicionais nesta compra!",
  modalNetwork: "Cadeia de Liquidificação:",
  modalSlippage: "Desvio Aceitável (Slippage):",
  modalEstimatedGas: "Taxa Estimada do Minerador:",
  modalEnterAmount: "DIGITE O VALOR",
  modalSwapButton: "INTERCAMBIAR POR TOKENS $WIFI",
  modalConsensusWait: "PROCESSANDO EM BLOCKCHAIN",
  modalConsensusSub: "Executando o Contrato de Troca",
  modalConsensusDesc: "O tempo médio de validação é de 2 a 4 segundos. Não feche este terminal.",
  modalSuccessTitle: "Troca Concluída!",
  modalSuccessDesc: "Parabéns! Sua transação foi processada e registrada na blockchain com sucesso.",
  modalReceiptStatus: "Status da Transação:",
  modalReceiptSettled: "Sucesso Confirmado",
  modalReceiptPrice: "Valor Pago:",
  modalReceiptReceive: "Volume Transferido:",
  modalReceiptHash: "Hash do Bloco:",
  modalAddAssetBtn: "Adicionar token $WIFI à Carteira",
  modalAnotherPurchaseBtn: "Fazer outra transação",
  modalComingSoonTitle: "🚀 Tokens $WIFI: Muito em Breve!",
  modalComingSoonDesc: "Os tokens serão cunhados e depositados automaticamente na sua carteira durante o evento oficial de TGE."
};

const ruOverrides: Partial<TranslationSet> = {
  navAbout: "О проекте",
  navFeatures: "Функции",
  navTokenomics: "Токеномика",
  navRoadmap: "Дорожная карта",
  navHowToBuy: "Как купить",
  navFaq: "Вопросы",
  btnBuy: "КУПИТЬ $WIFI",
  btnBuyTokens: "КУПИТЬ ТОКЕНЫ $WIFI",
  btnWhitepaper: "ЧИТАТЬ WHITEPAPER",
  heroBadge: "ЕТАП ЗАПУСКА АКТИВЕН",
  heroHeadingStart: "Будущее цифровой связи",
  heroHeadingHighlight: "начинается здесь.",
  heroDescription: "WiFiToken ($WIFI) — децентрализованный. Связанный. Неудержимый. Первый универсальный инфраструктурный уровень, компенсирующий узлы совместного использования интернета.",
  contractAddressLabel: "ОФИЦИАЛЬНЫЙ АДРЕС КОНТРАКТА",
  copyAddressBtn: "КОПИРОВАТЬ АДРЕС",
  copiedBtn: "СКОПИРОВАНО",
  scrollIndicator: "ПРОКРУТИТЬ ВНИЗ",
  aboutBadge: "ОТКРЫТИЕ WIFITOKEN",
  aboutHeading: "Что такое ",
  aboutHeadingHighlight: "WiFiToken?",
  aboutDescription: "WiFiToken — это первый в мире децентрализованный протокол связи, созданный для обеспечения работы инфраструктуры Web3 нового поколения. Больше чем криптовалюта — это сигнал будущего.",
  statSupplyLabel: "Общее предложение",
  statSupplySub: "Ограничено навсегда",
  statNodesLabel: "Активные глобальные узлы",
  statNodesSub: "Ежедневное расширение",
  statCountriesLabel: "Подключенные страны",
  statCountriesSub: "Объединяя полушария",
  statWalletsLabel: "Держатели токенов",
  statWalletsSub: "Растущая аудитория",
  featuresBadge: "ЭКСКЛЮЗИВНЫЕ ФУНКЦИИ",
  featuresHeading: "Почему стоит вложить в ",
  featuresHeadingHighlight: "$WIFI?",
  featuresDescription: "Интеграция высокопроизводительных протоколов связи для обеспечения быстрого и надежного соединения.",
  tokenomicsBadge: "ТОКЕНОМИКА",
  tokenomicsHeading: "Справедливое распределение ",
  tokenomicsHeadingHighlight: "Токенов",
  tokenomicsDescription: "Выверенная структура распределения для поддержания здоровой рыночной экосистемы.",
  roadmapBadge: "ДОРОЖНАЯ КАРТА",
  roadmapHeading: "Наш амбициозный ",
  roadmapHeadingHighlight: "План развития",
  roadmapDescription: "От первоначальной идеи до запуска глобальной децентрализованной спутниковой сети.",
  buyBadge: "РУКОВОДСТВО ПО ПОКУПКЕ",
  buyHeading: "Приобретите токен менее чем за ",
  buyHeadingHighlight: "4 минуты.",
  buyDescription: "Просто подключите свой кошелек, используя BNB или стейблкоины, чтобы совершить обмен в один клик.",
  socialHeading: "Присоединяйтесь к нашему ",
  socialHeadingHighlight: "Сообществу",
  socialDescription: "Общайтесь с валидаторами, разработчиками и инвесторами в наших социальных сетях.",
  faqHeading: "Есть вопросы? У нас есть ",
  faqHeadingHighlight: "Ответы",
  faqDescription: "Узнайте больше о протоколе $WIFI, транзакциях, нодах и долгосрочных планах проекта.",
  footerHeading: "ПРОТОКОЛ WIFI",
  footerSub: "Обеспечение доступного и независимого интернета для каждого человека через децентрализованную сеть.",
  footerRights: "© 2026 Протокол WiFiToken. Все права защищены по всему миру.",
  footerBuyPortal: "Портал покупки",
  footerFaq: "Часто задаваемые вопросы",
  modalTitle: "БЕЗОПАСНЫЙ ПОРТАЛ",
  modalSubTitle: "$WIFI PRE-SALE DAPP",
  modalConnectTitle: "Подключите свой Web3 кошелек",
  modalConnectDesc: "Выберите свой предпочтительный кошелек, чтобы проверить баланс и безопасно приобрести токены $WIFI.",
  modalConnectingState: "ПОДКЛЮЧЕНИЕ К СЕТИ...",
  modalSecureContract: "Официальный контракт верифицирован и проверен CertiK",
  modalPresaleRate: "КУРС ПРЕДПРОДАЖИ",
  modalYourWifi: "ВАШ БАЛАНС $WIFI",
  modalPayCurrency: "ВАЛЮТА ОПЛАТЫ",
  modalReceiveCurrency: "ВЫ ПОЛУЧИТЕ",
  modalVolumeBonus: "БОНУС ОБЪЕМА +{percent}% РАЗБЛОКИРОВАН!",
  modalVolumeBonusDesc: "Вы получили дополнительно +{bonus} токенов $WIFI на эту покупку бесплатно!",
  modalNetwork: "Блокчейн сеть:",
  modalSlippage: "Допустимое проскальзывание:",
  modalEstimatedGas: "Оценочный газ сети:",
  modalEnterAmount: "ВВЕДИТЕ СУММУ ПОКУПКИ",
  modalSwapButton: "ОБМЕНЯТЬ НА ТОКЕНЫ $WIFI",
  modalConsensusWait: "ТРАНЗАКЦИЯ В СЕТИ БЛОКЧЕЙН",
  modalConsensusSub: "Выполнение смарт-контракта обмена",
  modalConsensusDesc: "Проверка транзакции обычно занимает от 2 до 4 секунд. Пожалуйста, не закрывайте окно.",
  modalSuccessTitle: "Обмен завершен!",
  modalSuccessDesc: "Поздравляем! Ваша транзакция успешно подтверждена и внесена в распределенный реестр.",
  modalReceiptStatus: "Статус транзакции:",
  modalReceiptSettled: "Успешно подтверждено",
  modalReceiptPrice: "Оплачено контракту:",
  modalReceiptReceive: "Зачислено на кошелек:",
  modalReceiptHash: "Хэш транзакции (Block Hash):",
  modalAddAssetBtn: "Добавить токен $WIFI в кошелек",
  modalAnotherPurchaseBtn: "Совершить еще одну покупку",
  modalComingSoonTitle: "🚀 Токены $WIFI: Скоро раздача!",
  modalComingSoonDesc: "Токены будут автоматически начислены на ваш кошелек во время предстоящего официального TGE."
};

const trOverrides: Partial<TranslationSet> = {
  navAbout: "Hakkımızda",
  navFeatures: "Özellikler",
  navTokenomics: "Tokenomik",
  navRoadmap: "Yol Haritası",
  navHowToBuy: "Nasıl Alınır",
  navFaq: "SSS",
  btnBuy: "$WIFI SATIN AL",
  btnBuyTokens: "$WIFI TOKEN SATIN AL",
  btnWhitepaper: "WHITEPAPER OKU",
  heroBadge: "ÖN SATIŞ AŞAMASI AKTİF",
  heroHeadingStart: "Dijital Bağlantının Geleceği",
  heroHeadingHighlight: "Burada Başlıyor.",
  heroDescription: "WiFiToken ($WIFI) — Merkeziyetsiz. Bağlantılı. Durdurulamaz. İnternet paylaşımı yapan düğümleri ödüllendiren ve küresel internet adaletini savunan ilk altyapı.",
  contractAddressLabel: "RESMİ SÖZLEŞME ADRESİ",
  copyAddressBtn: "ADRESİ KOPYALA",
  copiedBtn: "KOPYALANDI",
  scrollIndicator: "AŞAĞI KAYDIR",
  aboutBadge: "WIFITOKEN REVELASYONU",
  aboutHeading: "WiFiToken ",
  aboutHeadingHighlight: "Nedir?",
  aboutDescription: "WiFiToken, yeni nesil Web3 altyapısını güçlendirmek amacıyla kurulmuş dünyanın ilk merkeziyetsiz bağlantı protokolüdür. Geleceğin sinyalidir.",
  statSupplyLabel: "Dolaşımdaki Arz",
  statSupplySub: "Kalıcı olarak sınırlandırılmıştır",
  statNodesLabel: "Aktif Küresel Düğümler",
  statNodesSub: "Günlük büyüme",
  statCountriesLabel: "Bağlı Ülkeler",
  statCountriesSub: "Tüm dünyayı kapsar",
  statWalletsLabel: "Cüzdan Sahipleri",
  statWalletsSub: "Büyüyen topluluk",
  featuresBadge: "ÖZEL NİTELİKLER",
  featuresHeading: "Neden Yatırım Yapmalı ",
  featuresHeadingHighlight: "$WIFI'a?",
  featuresDescription: "Yüksek performanslı askeri düzeyde kod mimarimiz ile saniyeler içerisinde güvenli transfer ve bağlantı yapın.",
  tokenomicsBadge: "TOKEN METRİKLERİ",
  tokenomicsHeading: "Adil Dağılım ve ",
  tokenomicsHeadingHighlight: "Akış",
  tokenomicsDescription: "Token istikrarını ve node ödüllerini sürdürülebilir kılmak için tasarlanmış sistem yapısı.",
  roadmapBadge: "PROJE YOL HARİTASI",
  roadmapHeading: "Kararlı ",
  roadmapHeadingHighlight: "Yol Haritamız",
  roadmapDescription: "Temellerin kurulmasından uzay tabanlı merkeziyetsiz uydu interneti sağlamaya uzanan yolculuk.",
  buyBadge: "NASIL SATIN ALINIR REHBERİ",
  buyHeading: "Tokenları şununla alın, hem de ",
  buyHeadingHighlight: "4 dakikada.",
  buyDescription: "Satın alma işleminizi cüzdanınızı linkleyerek BNB veya sabit kripto varlıklar ile hemen tamamlayın.",
  socialHeading: "Küresel Gücümüze ",
  socialHeadingHighlight: "Katılın",
  socialDescription: "Sosyal ağlarda bize katılın, diğer madenciler ve yatırımcılar ile anında konuşmaya başlayın.",
  faqHeading: "Sorularınız mı Var? ",
  faqHeadingHighlight: "Yanıtlayalım",
  faqDescription: "Sözleşme güvenliği, staking getirileri ve düğüm kurulumlarına dair merak edilen her şey.",
  footerHeading: "WIFI PROTOKOLÜ",
  footerSub: "Gelişmiş veri paketi konsensüsü ve blockchain aracılığıyla internet adaletini inşa etmek.",
  footerRights: "© 2026 WiFiToken Protokolü. Tüm Hakları Küresel Olarak Saklıdır.",
  footerBuyPortal: "Satın Alma Portali",
  footerFaq: "Sıkça Sorulan Sorular",
  modalTitle: "GÜVENLİ PORTAL",
  modalSubTitle: "$WIFI PRE-SALE DAPP",
  modalConnectTitle: "Web3 Cüzdanınızı Bağlayın",
  modalConnectDesc: "Raporlanan bakiyelerinizi kontrol etmek ve güvenli ön satış $WIFI tokenlarını almak için cüzdanınızı seçin.",
  modalConnectingState: "BAĞLANTI KURULUYOR...",
  modalSecureContract: "CertiK tarafından onaylanmış ve denetlenmiş güvenilir sözleşme",
  modalPresaleRate: "ÖN SATIŞ KURU",
  modalYourWifi: "SWAP EDİLEBİLİR $WIFI BAKİYENİZ",
  modalPayCurrency: "ÖDEME YAPILACAK BİRİM",
  modalReceiveCurrency: "ALACAĞINIZ MİKTAR",
  modalVolumeBonus: "+{percent}% HACİM BONUSU AÇILDI!",
  modalVolumeBonusDesc: "Tebrikler! Bu alışverişinizde fazladan +{bonus} bedava $WIFI token kazandınız!",
  modalNetwork: "Ödeme Blokzinciri:",
  modalSlippage: "Slippage Toleransı:",
  modalEstimatedGas: "Tahmini Ağ Gas Ücreti:",
  modalEnterAmount: "ÖDEME MİKTARI GİRİN",
  modalSwapButton: "ŞİMDİ TAKAS YAPIN VE ALIN",
  modalConsensusWait: "BLOKZİNCİRDE İŞLENİYOR",
  modalConsensusSub: "Akıllı Sözleşme Takası Yapılıyor",
  modalConsensusDesc: "Ağ onayı genellikle 2 ila 4 saniye sürmektedir. Lütfen bu ekranı kapatmayın.",
  modalSuccessTitle: "Takas Tamamlandı!",
  modalSuccessDesc: "Harika! Satın alım işleminiz akıllı sözleşme üzerinde doğrulandı ve cüzdanınıza kaydedildi.",
  modalReceiptStatus: "İşlem Durumu:",
  modalReceiptSettled: "Başarılı ve Güvenli",
  modalReceiptPrice: "Ödenen Tutar:",
  modalReceiptReceive: "Teslim Alınan Tokenlar:",
  modalReceiptHash: "Block Hash Kodu:",
  modalAddAssetBtn: "$WIFI Tokenını Cüzdana Ekle",
  modalAnotherPurchaseBtn: "Yeni İşlem Başlat",
  modalComingSoonTitle: "🚀 $WIFI Tokenları: Çok Yakında!",
  modalComingSoonDesc: "Tokenlar, yakında gerçekleşecek resmi TGE (Token Dağıtım Etkinliği) sırasında cüzdan adresinize otomatik olarak yüklenecektir."
};

const zhOverrides: Partial<TranslationSet> = {
  navAbout: "关于我们",
  navFeatures: "核心特色",
  navTokenomics: "代币经济",
  navRoadmap: "发展路线",
  navHowToBuy: "如何购买",
  navFaq: "常见问题",
  btnBuy: "立即购买 $WIFI",
  btnBuyTokens: "购买代币 $WIFI",
  btnWhitepaper: "阅读白皮书",
  heroBadge: "预售公募进行中",
  heroHeadingStart: "全球数字化连接的未来",
  heroHeadingHighlight: "由此开启。",
  heroDescription: "WiFiToken（$WIFI） — 去中心化、全球互联、势不可挡。这是首个旨在奖励共享节点的全球通用网络基础设施层，致力于构建全新的数字化网络互联秩序。",
  contractAddressLabel: "官方唯一智能合约地址",
  copyAddressBtn: "复制合约地址",
  copiedBtn: "已复制",
  scrollIndicator: "向下滚动",
  aboutBadge: "揭秘 WIFITOKEN",
  aboutHeading: "什么是 ",
  aboutHeadingHighlight: "WiFiToken？",
  aboutDescription: "WiFiToken是全球首个去中心化网络连接协议，专为赋能下一代Web3基础设施而生。超越传统宽带模式，$WIFI昭示着属于未来的无线网络信号。",
  statSupplyLabel: "循环供应量",
  statSupplySub: "永久硬顶锁仓",
  statNodesLabel: "全球活跃节点",
  statNodesSub: "每日呈几何级扩张",
  statCountriesLabel: "覆盖全球国家",
  statCountriesSub: "普及南北半球",
  statWalletsLabel: "持币独立地址数",
  statWalletsSub: "社群生态蓬勃发展",
  featuresBadge: "独家硬核技术",
  featuresHeading: "为什么选择加入 ",
  featuresHeadingHighlight: "$WIFI 生态？",
  featuresDescription: "集成军工级极速验证共识框架，在毫秒内建立最快速安全的去中心化热点隧道路由。",
  tokenomicsBadge: "代币经济模型说明书",
  tokenomicsHeading: "公平与长效的 ",
  tokenomicsHeadingHighlight: "分配图谱",
  tokenomicsDescription: "精密设计的通缩质押激励平衡矩阵，旨在维护健康的长效代币流转二级市场。",
  roadmapBadge: "项目路线规划",
  roadmapHeading: "不可阻挡的 ",
  roadmapHeadingHighlight: "全球蓝图",
  roadmapDescription: "从基础主网上线部署起步，直到未来实现低轨道卫星去中心化无线ISP网络的无缝覆盖。",
  buyBadge: "極速購買指南",
  buyHeading: "只需以下步骤，在 ",
  buyHeadingHighlight: "4 分钟内搞定。",
  buyDescription: "用您钱包中有的 BNB 或者数字稳定币一键Swap至您的钱包账户，快速低滑点参与。",
  socialHeading: "加入全球最大 ",
  socialHeadingHighlight: "加密共识节点",
  socialDescription: "在官方社交媒体上与数十万活跃矿工、投资者、开发者在线即时沟通发掘红利。",
  faqHeading: "遇到任何问题？为您 ",
  faqHeadingHighlight: "答疑解惑",
  faqDescription: "在这里找到关于智能合约安全、节点硬件配置奖励与分发、预售锁仓释放时间的全面解析。",
  footerHeading: "WIFI 协议网络",
  footerSub: "通过全球先进的非中心化路由包验证共识，消除数字鸿沟，重组全球宽带资源权益。",
  footerRights: "© 2026 WiFiToken 协议网络。全球版权所有并保留一切权利。",
  footerBuyPortal: "预售交易大厅",
  footerFaq: "用户技术疑问解答",
  modalTitle: "去中心化网关",
  modalSubTitle: "$WIFI 预售合约客户端",
  modalConnectTitle: "请连接您的 Web3 钱包",
  modalConnectDesc: "选择您在移动端或浏览器安装的认可加密钱包，以授权账户余额检索并安全划拨兑换额度。",
  modalConnectingState: "正在建立安全防伪信道连接...",
  modalSecureContract: "经由 CertiK 官方全方位技术双重审计的高阶智能合约",
  modalPresaleRate: "预售阶段兑换底价",
  modalYourWifi: "您持有的 $WIFI 余额",
  modalPayCurrency: "您用来支付的数字资产",
  modalReceiveCurrency: "预计可获得的代币配额",
  modalVolumeBonus: "已触发并免费开启 +{percent}% 丰满梯度额外奖励！",
  modalVolumeBonusDesc: "恭喜您！由于达到本次大宗交易激励梯度，已免费获准赠送额外 +{bonus} 代币份额！",
  modalNetwork: "结算结算底层主网:",
  modalSlippage: "允许的滑点公差限度:",
  modalEstimatedGas: "区块链网络消耗的旷工油费 (Gas):",
  modalEnterAmount: "请输入想要兑换的数字金额",
  modalSwapButton: "立即通过合约完成自动SWAP兑换",
  modalConsensusWait: "网络矿工打包广播中",
  modalConsensusSub: "智能合约自动资产划转与兑换",
  modalConsensusDesc: "区块链通常需要2至4秒时间达成区块一致性，请勿在此窗口重载关闭或刷新浏览器。",
  modalSuccessTitle: "恭喜！兑换完成",
  modalSuccessDesc: "大成交易已被区块记录，您的代币将在认购周期节点解锁并推送至您的物理地址账户历程。",
  modalReceiptStatus: "交易最终处理状态:",
  modalReceiptSettled: "已打包结算并安全托管",
  modalReceiptPrice: "合约已代扣的本金:",
  modalReceiptReceive: "确认拨付的预购数额:",
  modalReceiptHash: "区块哈希指纹校验号:",
  modalAddAssetBtn: "将 $WIFI 代币资产协议添加到本地钱包",
  modalAnotherPurchaseBtn: "充值并继续Swap另一笔新交易",
  modalComingSoonTitle: "🚀 $WIFI 代币：敬请期待！",
  modalComingSoonDesc: "代币将在接下来的代币生成事件（TGE）中铸造，并自动发送到您连接的钱包地址。"
};

export const translations: Record<Language, TranslationSet> = {
  en: baseTranslations.en,
  ur: baseTranslations.ur,
  ar: baseTranslations.ar,
  es: baseTranslations.es,
  fr: makeSet(baseTranslations.en, frOverrides),
  de: makeSet(baseTranslations.en, deOverrides),
  pt: makeSet(baseTranslations.en, ptOverrides),
  ru: makeSet(baseTranslations.en, ruOverrides),
  tr: makeSet(baseTranslations.en, trOverrides),
  zh: makeSet(baseTranslations.en, zhOverrides)
};

