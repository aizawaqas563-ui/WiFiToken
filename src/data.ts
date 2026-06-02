/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureItem, RoadmapStep, TokenDistribution, StepCard, SocialCard, FaqItem } from './types';

export const CONTRACT_ADDRESS = "0x78a9c3d4f5e6b7c89a01f2e3d4c5b6a789f01234";

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "f1",
    title: "Ultra-Fast Transactions",
    description: "Designed with state-of-the-art packet priority consensus, settlement takes less than 800 milliseconds globally.",
    iconName: "Zap",
    glowColor: "cyan"
  },
  {
    id: "f2",
    title: "Zero-Knowledge Privacy",
    description: "Your connection coordinates, payload transfers, and routing identities are fully secured using ZK-SNARK protocols.",
    iconName: "EyeOff",
    glowColor: "gold"
  },
  {
    id: "f3",
    title: "Cross-Chain Compatible",
    description: "Operates seamlessly across Ethereum, Binance Smart Chain, Solana, and custom Layer-2 network relays.",
    iconName: "Container",
    glowColor: "cyan"
  },
  {
    id: "f4",
    title: "Community Governed",
    description: "Every network parameters adjustment, node licensing fee, and buy-back-and-burn allocation is voted by $WIFI holders.",
    iconName: "Users",
    glowColor: "gold"
  },
  {
    id: "f5",
    title: "Deflationary Model",
    description: "A continuous 1.5% transaction burn combined with protocol licensing fees permanently reduces supply over time.",
    iconName: "Flame",
    glowColor: "cyan"
  },
  {
    id: "f6",
    title: "Military-Grade Security",
    description: "Dual-audited smart contracts with integrated multi-sig governance and algorithmic anti-whale lockouts.",
    iconName: "ShieldCheck",
    glowColor: "gold"
  }
];

export const TOKENOMICS_DISTRIBUTION: TokenDistribution[] = [
  {
    name: "Presale Allocation",
    percentage: 30,
    color: "#00f5ff",
    glow: "rgba(0, 245, 255, 0.4)",
    amount: "300,000,000 $WIFI",
    description: "Initial fund pool designed to foster immediate network launch and secure bootstrapping."
  },
  {
    name: "Locked Liquidity Pool",
    percentage: 25,
    color: "#ffd700",
    glow: "rgba(255, 215, 0, 0.4)",
    amount: "250,000,000 $WIFI",
    description: "Locked permanently via smart contracts on launch to assure high depth exchanges trading."
  },
  {
    name: "Ecosystem Development",
    percentage: 20,
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
    amount: "200,000,000 $WIFI",
    description: "Allocated strictly for protocol updates, global developer grants, and node operational rewards."
  },
  {
    name: "Strategic Marketing",
    percentage: 15,
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.4)",
    amount: "150,000,000 $WIFI",
    description: "Reserved for high-impact target campaigns, exchange listings, and real-world sponsorships."
  },
  {
    name: "Core Advisory & Team",
    percentage: 10,
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.4)",
    amount: "100,000,000 $WIFI",
    description: "Locked for a minimum of 24 months with linear quarterly vesting schedules."
  }
];

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    phase: "Phase 1",
    title: "Genesis Setup",
    description: "Foundational launch of the $WIFI core connectivity engine and smart contract deployment.",
    items: [
      "Smart Contract Security Audit by CertiK",
      "Official Token Presale & Launchpool Launching",
      "Targeted Global PR and Premium Web3 Campaign",
      "CoinMarketCap & CoinGecko Registrations"
    ],
    status: "completed"
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
    ],
    status: "in-progress"
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
    ],
    status: "upcoming"
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
    ],
    status: "upcoming"
  }
];

export const STEPS_TO_BUY: StepCard[] = [
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
];

export const SOCIAL_CHANNELS: SocialCard[] = [
  {
    platform: "Telegram Portal",
    handle: "t.me/WiFiTokenOfficial",
    count: "48,250 Members Online",
    link: "https://telegram.org",
    buttonText: "Join Channel",
    colorClass: "from-sky-500/20 to-sky-600/30 text-sky-400 border-sky-500/30 hover:border-sky-400",
    iconName: "Send"
  },
  {
    platform: "Twitter / X Profile",
    handle: "@WiFiToken_Crypto",
    count: "124,800 Active Network Followers",
    link: "https://twitter.com",
    buttonText: "Follow Updates",
    colorClass: "from-zinc-800/20 to-zinc-700/30 text-zinc-300 border-zinc-500/30 hover:border-zinc-300",
    iconName: "Twitter"
  },
  {
    platform: "Discord Community",
    handle: "discord.gg/WiFiGlobal",
    count: "62,500 Registered Nodes",
    link: "https://discord.com",
    buttonText: "Launch Chat",
    colorClass: "from-indigo-500/20 to-indigo-600/30 text-indigo-400 border-indigo-500/30 hover:border-indigo-400",
    iconName: "MessageSquareCode"
  },
  {
    platform: "Reddit Subreddit",
    handle: "r/WiFiToken",
    count: "18,400 Certified Contributors",
    link: "https://reddit.com",
    buttonText: "Subscribe",
    colorClass: "from-orange-500/20 to-orange-600/30 text-orange-400 border-orange-500/30 hover:border-orange-400",
    iconName: "TrendingUp"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
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
];
