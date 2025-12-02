import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  bullets?: string[];
  afterBullets?: string;
}

export interface BenefitItem {
  title: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ChatState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}
