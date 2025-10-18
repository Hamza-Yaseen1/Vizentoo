'use client';

import "../globals.css";
import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import DotGrid from "../animation/DotGrid";

export default function Hero() {
  // typed animate hook
  const [scope, animate] = useAnimate<HTMLDivElement>();

  // Animation sequence (rotate + scale) — safe guard if scope.current is missing
  async function sequence() {
    if (!scope.current || !animate) return;
    try {
      await animate([
        [scope.current, { rotate: -90 }, { duration: 0.4 }],
        [scope.current, { scale: 1.5 }, { duration: 0.4 }],
        [scope.current, { rotate: 0 }, { duration: 0.4 }],
        [scope.current, { scale: 1 }, { duration: 0.4 }],
      ]);
    } catch (e) {
      // fail silently — but you can console.log(e) while debugging
      console.error('Animation failed', e);
    }
  }

  // Run animation only when ref is mounted
  useEffect(() => {
    if (!scope.current) return;
    sequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, animate]);

  return (
    <div
      ref={scope}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#0F172A] to-[#000000] flex items-center justify-center px-4 overflow-hidden"
      aria-label="Hero section"
    >
      {/* DotGrid positioned absolutely to cover the whole hero and behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#000"
          activeColor="#F8F9FA"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          // If DotGrid accepts style props, ensure it fills container:
          // style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Blurred Decorative Shapes (z-0 so they sit behind content but above DotGrid if needed) */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-green-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* Content (z-10 so it sits on top) */}
      <div className="relative z-10 hero px-4 py-12 md:px-10 md:py-16 xl:px-20 xl:py-24 2xl:px-32 2xl:py-32 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <motion.h2
            className="text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-4xl text-green-400 font-medium"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            7 Days Free Trial
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl text-white font-bold mt-3 mb-8 md:mb-12 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Unlimited Graphic Design
          </motion.h1>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          {[
            "Unlimited graphic design work for a flat monthly fee.",
            "No complicated hiring process.",
            "We handle all your creative needs.",
            "Without any contracts or unreliable freelancers.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="text-white p-4 xl:p-6 2xl:p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-3">
                <CircleCheckBig
                  className="text-green-400 flex-shrink-0"
                  size={24}
                />
                <span>{text}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Booking Button */}
        <div className="mt-10 xl:mt-12 2xl:mt-16 text-center md:text-left">
          <button
            onClick={sequence}
            className="mt-5 bg-green-500 hover:bg-green-600 cursor-pointer text-black px-8 py-3 xl:px-10 xl:py-4 2xl:px-12 2xl:py-5 rounded-full font-medium text-lg xl:text-xl 2xl:text-2xl transition-transform hover:scale-105"
          >
            <a href="/Contact">Booking</a>
          </button>
        </div>
      </div>
    </div>
  );
}
