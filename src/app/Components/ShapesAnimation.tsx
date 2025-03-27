'use client';

import { useEffect } from 'react';
import anime from 'animejs';

const ShapesAnimation = () => {
  useEffect(() => {
    const randomValues = () => {
      anime({
        targets: '.shape',
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-300, 300),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.2, 2),
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: randomValues,
      });
    };

    randomValues();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={`square-${i}`} className="shape square absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-b from-gray-800 to-gray-500"></div>
      ))}
      {[...Array(5)].map((_, i) => (
        <div key={`circle-${i}`} className="shape circle absolute top-1/2 left-1/2 w-12 h-12 bg-green-400 rounded-full"></div>
      ))}
      {[...Array(5)].map((_, i) => (
        <div key={`triangle-${i}`} className="shape triangle absolute top-1/2 left-1/2 w-12 h-12 bg-white clip-triangle"></div>
      ))}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default ShapesAnimation;
