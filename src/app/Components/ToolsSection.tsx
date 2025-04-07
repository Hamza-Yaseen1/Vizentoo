'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const ToolsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const tools = [
    { image: "/images/SVG-1.png", alt: "Tool 1" },
    { image: "/images/SVG-2.png", alt: "Tool 2" },
    { image: "/images/SVG-3.png", alt: "Tool 3" },
    { image: "/images/SVG-4.png", alt: "Tool 4" },
    { image: "/images/SVG-5.png", alt: "Tool 5" },
    { image: "/images/SVG-6.png", alt: "Tool 6" },
    { image: "/images/SVG-7.png", alt: "Tool 7" },
    { image: "/images/SVG-8.png", alt: "Tool 8" },
    { image: "/images/SVG-9.png", alt: "Tool 9" },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="tools">
      <h1 className="text-3xl text-white text-center p-7">Tools We Use</h1>
      <Carousel 
        opts={{ 
          align: "start", 
          loop: true,
        }}
        setApi={setApi}
        className="w-full pt-4"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {tools.map((tool, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/4">
              <div className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative w-full h-16 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, (min-width: 1920px) 33vw"
                    priority={index < 3}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </div>
  );
};

export default ToolsSection;