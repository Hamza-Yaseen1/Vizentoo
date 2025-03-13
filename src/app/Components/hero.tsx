import "../globals.css";
 

import { CircleCheckBig } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero px-4 py-12 md:px-10 md:py-16 max-w-7xl mx-auto ">
      <div className="text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl text-green-700 font-medium">
          7 Days Free Trial
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold mt-3 mb-8 md:mb-12 leading-tight">
          Unlimited graphic design
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="text-white p-4 rounded-lg backdrop-blur-sm  transition-shadow">
          <p className="text-base md:text-lg flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={20} />
            <span>Unlimited graphic design work for a flat monthly fee.</span>
          </p>
        </div>
        
        <div className="text-white p-4 rounded-lg backdrop-blur-sm transition-shadow">
          <p className="text-base md:text-lg flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={20} />
            <span>No complicated hiring process</span>
          </p>
        </div>
        
        <div className="text-white p-4 rounded-lg backdrop-blur-sm  transition-shadow">
          <p className="text-base md:text-lg flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={20} />
            <span>We handle all your creative needs</span>
          </p>
        </div>
        
        <div className="text-white p-4 rounded-lg backdrop-blur-sm  transition-shadow">
          <p className="text-base md:text-lg flex items-center gap-3">
            <CircleCheckBig className="text-green-600 flex-shrink-0" size={20} />
            <span>Without any contracts or unreliable freelancers</span>
          </p>
        </div>
      </div>
      
      <div className="mt-10 text-center md:text-left">
        <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-3 rounded-full font-medium text-lg transition-colors">
          Booking
        </button>
      </div>
    </div>
  );
}