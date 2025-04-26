'use client';

import "../globals.css";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0F172A] to-black overflow-hidden px-6 py-20">
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl text-center space-y-8">
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          About Vizentoo
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Vizentoo was born from a simple idea: Creativity should be limitless, accessible, and lightning-fast. We partner with growing businesses, entrepreneurs, and dreamers to bring their visual ideas to life — without the traditional hurdles of hiring or managing design teams.
        </motion.p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Projects Delivered", value: "3,000+" },
            { label: "Happy Clients", value: "1,200+" },
            { label: "Designers Onboard", value: "50+" },
            { label: "Countries Served", value: "18" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center"
            >
              <div className="text-2xl font-bold text-green-400">{stat.value}</div>
              <div className="text-gray-300 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-left space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Founded in 2024, Vizentoo started as a small group of passionate designers and tech enthusiasts who shared a vision: to revolutionize the way businesses access creative services. Frustrated by slow agencies and unreliable freelancers, we decided to build something radically different — an always-on, subscription-based design platform.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, Vizentoo stands as a trusted design partner for hundreds of startups, creators, and global companies. We don&apos;t just deliver designs — we craft brand experiences that connect, inspire, and sell.
          </p>
        </motion.div>

        {/* Our Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform">
            <h3 className="text-green-400 text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-300 text-sm">
              To empower businesses with on-demand, world-class design services — simple, scalable, and stress-free.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform">
            <h3 className="text-pink-400 text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-300 text-sm">
              To be the world&apos;s most trusted design partner, fueling innovation and creativity for every brand on earth.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform">
            <h3 className="text-purple-400 text-xl font-semibold mb-4">Values</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Creativity without compromise</li>
              <li>Radical transparency</li>
              <li>Client-first thinking</li>
              <li>Continuous innovation</li>
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-24"
        >
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition"
          >
            Let’s Create Together
          </a>
        </motion.div>

      </div>
    </div>
  );
}
