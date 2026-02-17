
import React from 'react';

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  idealFor: string;
  isPopular?: boolean;
  isPremium?: boolean;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  // Fix: Added React import to resolve the missing namespace
  icon: React.ReactNode;
}