/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon resolving inside React
  glowColor: 'cyan' | 'gold';
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface TokenDistribution {
  name: string;
  percentage: number;
  color: string;
  glow: string;
  amount: string;
  description: string;
}

export interface StepCard {
  step: string;
  title: string;
  description: string;
  subText: string;
}

export interface SocialCard {
  platform: string;
  handle: string;
  count: string;
  link: string;
  buttonText: string;
  colorClass: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
