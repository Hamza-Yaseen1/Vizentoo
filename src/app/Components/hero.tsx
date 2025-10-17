'use client';

import "../globals.css";
import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

export default function Hero() {
  // Properly typed animate hook
  const [scope, animate] = useAnimate<HTMLDivElement>();

  // Animation sequence (rotate + scale)
  async function sequence() {
    await animate([
      [scope.current, { rotate: -90 }, { duration: 0.4 }],
      [scope.current, { scale: 1.5 }, { duration: 0.4 }],
      [scope.current, { rotate: 0 }, { duration: 0.4 }],
      [scope.current, { scale: 1 }, { duration: 0.4 }],
    ]);
  }

  // Run animation when component mounts
  useEffect(() => {
    sequence();
  }, []);

  return (
    <div
      ref={scope}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#0F172A] to-[#000000] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Blurred Decorative Shapes */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-green-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Content */}
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
