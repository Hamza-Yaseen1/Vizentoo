'use client';

import "../globals.css";
import { useEffect, useCallback } from "react";
import { useAnimate, motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import DotGrid from "../animation/DotGrid";

export default function Hero() {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const sequence = useCallback(async () => {
    if (!scope.current || !animate) return;

    await animate(scope.current, { scale: 1.2 }, { duration: 0.5 });
    await animate(scope.current, { scale: 1 }, { duration: 0.5 });
  }, [animate, scope]);

  useEffect(() => {
    if (!scope.current) return;
    sequence();
  }, [scope, sequence]);

  return (
    <div
      ref={scope}
      /* 🔽 HERO HEIGHT CONTROL (tablet fix) */
      className="relative w-full min-h-[80vh] md:min-h-[70vh] xl:min-h-screen bg-gradient-to-br from-[#0F172A] to-[#000000] flex items-center justify-center px-4 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dot Grid Background */}
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
        />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-green-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div
        /* 🔽 VERTICAL SPACING CONTROL */
        className="relative z-10 hero px-4 py-10 md:px-10 md:py-10 xl:px-20 xl:py-20 2xl:px-32 2xl:py-24 max-w-7xl mx-auto"
      >
        <div className="text-center md:text-left">

          {/* 🔽 Subtitle size */}
          <motion.h2
            className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-green-400 font-medium"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            7 Days Free Trial
          </motion.h2>

          {/* 🔽 Main heading size + margin */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-white font-bold mt-3 mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Unlimited Graphic Design
          </motion.h1>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            "Unlimited graphic design work for a flat monthly fee.",
            "No complicated hiring process.",
            "We handle all your creative needs.",
            "Without any contracts or unreliable freelancers.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="text-white p-4 xl:p-5 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* 🔽 Feature text size */}
              <p className="text-sm md:text-base xl:text-lg flex items-center gap-3">
                <CircleCheckBig
                  className="text-green-400 flex-shrink-0"
                  size={20} /* icon size */
                />
                <span>{text}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div
          /* 🔽 BUTTON SPACING CONTROL */
          className=" flex gap-2 mt-6 xl:mt-8 text-center md:text-left"
        >
          <button
            onClick={sequence}
            className="mt-4 bg-green-500 hover:bg-green-600 cursor-pointer text-black px-6 py-2.5 xl:px-8 xl:py-3 rounded-full font-medium text-base xl:text-lg transition-transform hover:scale-105"
          >
            <a href="/Contact">Booking</a>
          </button>

        </div>
      </div>
    </div>
  );
}
