// PricingPage.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import '../globals.css';

interface Plan {
  name: string;
  label: string;
  tagline: string;
  price: string;
  discountPrice: string;
  discountNote: string;
  includes: string[];
  benefits: string[];
  description: string;
}

const plans: Plan[] = [
  {
    name: 'Starter Plan',
    label: 'Start-up / Business',
    tagline: 'Your Gateway to Unlimited Creativity at an Unbeatable Price!',
    price: '$599',
    discountPrice: '$299 FOR 3 MONTHS',
    discountNote: 'New Clients Discount – 50% off',
    includes: [
      'Branding & Logos',
      'Social Media Content',
      'Illustrations',
      'Print Designs',
      'Graphic Design',
      'Email & Newsletters',
      'Podcast & YouTube Thumbnails',
    ],
    benefits: [
      '24/5 Customer Chat Support',
      'Adobe & Canva File Delivery',
      'Unlimited Requests & Revisions',
      '1 Active Project at a Time',
    ],
    description: 'Ideal for startups and small businesses needing affordable, high-quality design services.'
  },
  {
    name: 'Growth Plan',
    label: 'Marketing & Ads',
    tagline: 'Elevate Your Agency with Advanced Design Solutions!',
    price: '$1299',
    discountPrice: '$649 FOR 3 MONTHS',
    discountNote: 'New Clients Discount – 50% off',
    includes: [
      'Everything in Start-up / Business',
      'Ad Creatives',
      'Presentations & Pitch Decks',
      'Canva Templates',
      'Infographics',
      'Web Design',
    ],
    benefits: [
      '24/5 Customer Chat Support',
      'Adobe & Canva File Delivery',
      'Dedicated Design Team',
      'Project Manager',
      'Unlimited Requests & Revisions',
      'Share & Review Links',
      'Slack Collaboration',
      'Figma File Delivery',
      '1 Active Project at a Time',
    ],
    description: 'Perfect for agencies ready to level up with advanced, scalable design solutions.'
  },
  {
    name: 'Pro Plan',
    label: 'Agency',
    tagline: 'Push Boundaries with Premium Design & Motion Graphics!',
    price: '$1599',
    discountPrice: '$799 FOR 3 MONTHS',
    discountNote: 'Limited-Time Offer – 50% Off',
    includes: [
      'Everything in Creative Accelerator',
      'Packaging Design',
      'UX/UI Design',
      'Landing Pages',
      'Web Design (Figma)',
    ],
    benefits: [
      '24/5 Customer Chat Support',
      'Adobe & Canva File Delivery',
      'Dedicated Design Team',
      'Project Manager',
      '24 Business Hours Turnaround',
      'Unlimited Requests & Revisions',
      'Share & Review Links',
      'Slack Collaboration',
      'Figma File Delivery',
      '1 Active Project at a Time',
    ],
    description: 'Designed for larger agencies and businesses demanding premium, high-impact creative solutions.'
  }
];

export default function Price() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0F172A] to-black overflow-hidden px-6 py-20 text-white">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Pricing Plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Flexible plans designed to grow with your business — packed with value and creative power.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 hover:scale-[1.03] transition-transform">
                <CardContent className="space-y-5">
                  <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                  <p className="text-sm font-medium text-green-400 uppercase tracking-wide">{plan.label}</p>
                  <p className="text-base text-gray-300 italic">{plan.tagline}</p>

                  <div className="text-center py-4">
                    <p className="text-2xl line-through pr-24 pb-2 text-gray-400">{plan.price}</p>
                    <p className="text-3xl font-extrabold text-green-500">{plan.discountPrice}</p>
                    <p className="text-sm text-orange-400 font-medium mt-1">{plan.discountNote}</p>
                  </div>

                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-2 rounded-xl text-sm"
                    onClick={() => toggleDetails(index)}
                  >
                    {openIndex === index ? 'Hide Details' : 'Show What You Get'}
                  </Button>

                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 pt-4"
                    >
                      <div>
                        <h4 className="text-white font-semibold text-sm uppercase mb-1">Includes:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                          {plan.includes.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold text-sm uppercase mb-1">What You Get:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                          {plan.benefits.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                      <p className="text-sm text-gray-400 italic">{plan.description}</p>
                    </motion.div>
                  )}

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 rounded-xl">
                    <a href="/Contact">Choose Plan</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}