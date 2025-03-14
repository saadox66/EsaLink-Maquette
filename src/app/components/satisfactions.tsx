"use client";
import React, { useState, useEffect } from "react";
import FullStar from "./fullStar";
import HalfStar from "./halfStar";

export default function Satisfaction() {
  const [dashOffset, setDashOffset] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2500; 
    const targetOffset = 2; // 98% <=> (100 - 98 = 2)

    const animateCircle = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentOffset = 100 - progress * (100 - targetOffset);
        setDashOffset(currentOffset);
        requestAnimationFrame(animateCircle);
      } else {
        setDashOffset(targetOffset);
      }
    };

    requestAnimationFrame(animateCircle);
  }, []);

  return (
    <section className="py-12 bg-white flex justify-center overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Cercle de progression */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            {/* Cercle de fond */}
            <path
              className="text-purple-500 stroke-current"
              fill="none"
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset="0"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Cercle de progression animé */}
            <path
              className="text-blue-300 stroke-current"
              fill="none"
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
            />
            {/* Texte central */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-xs sm:text-sm fill-blue-300"
            >
              98%
            </text>
          </svg>
        </div>

        {/* Texte et évaluation par étoiles */}
        <div className="text-center md:text-left">
          <h3 className="text-blue-300 mb-4 text-base sm:text-lg">
            EsaLink est fière de partager la satisfaction de ses alternants, avec un taux de 98%.
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-1">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
        </div>
      </div>
    </section>
  );
}
