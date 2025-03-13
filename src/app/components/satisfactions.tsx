"use client";
import React, { useState, useEffect } from "react";

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

function FullStar() {
  return (
    <svg
      className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.049 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
    </svg>
  );
}

function HalfStar() {
  return (
    <svg
      className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfGradient)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.049 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"
      />
    </svg>
  );
}
