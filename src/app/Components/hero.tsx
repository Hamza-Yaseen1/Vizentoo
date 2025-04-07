"use client";
import "../globals.css";
 
import { useAnimate } from "framer-motion";
import { CircleCheckBig } from 'lucide-react';
import ShapesAnimation from "./ShapesAnimation";

export default function Hero() {
  const [scope, animate] = useAnimate();

  function sequence() {
      animate([
          [scope.current, { rotate: -90 }],
          [scope.current, { scale: 1.5 }],
          [scope.current, { rotate: 0 }],
          [scope.current, { scale: 1 }]
      ]);
  }
  return (
    <div className="hero px-4 py-12 md:px-10 md:py-16 xl:px-20 xl:py-24 2xl:px-32 2xl:py-32 max-w-7xl 2xl:max-w-[1280px] mx-auto ">
      <ShapesAnimation/>
      <div className="text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-4xl text-green-700 font-medium">
          7 Days Free Trial
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl text-white font-bold mt-3 mb-8 md:mb-12 leading-tight">
          Unlimited graphic design
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 md:gap-8 xl:gap-10 2xl:gap-12">
        <div className="text-white p-4 xl:p-6 2xl:p-8 rounded-lg backdrop-blur-sm transition-shadow">
          <p className="text-base md:text-md xl:text-lg 2xl:text-lg flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={24} />
            <span>Unlimited graphic design work for a flat monthly fee.</span>
          </p>
        </div>
        
        <div className="text-white p-4 xl:p-6 2xl:p-8 rounded-lg backdrop-blur-sm transition-shadow">
          <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={24} />
            <span>No complicated hiring process</span>
          </p>
        </div>
        
        <div className="text-white p-4 xl:p-6 2xl:p-8 rounded-lg backdrop-blur-sm transition-shadow">
          <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={24} />
            <span>We handle all your creative needs</span>
          </p>
        </div>
        
        <div className="text-white p-4 xl:p-6 2xl:p-8 rounded-lg backdrop-blur-sm transition-shadow">
          <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={24} />
            <span>Without any contracts or unreliable freelancers</span>
          </p>
        </div>
      </div>
      
      <div className="mt-10 xl:mt-12 2xl:mt-16 text-center md:text-left">
        <button
          ref={scope} 
          onClick={sequence}
          className="mt-5 bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-3 xl:px-10 xl:py-4 2xl:px-12 2xl:py-5 rounded-full font-medium text-lg xl:text-xl 2xl:text-2xl transition-colors"
        >
          Booking
        </button>
      </div>
    </div>
  );
}
