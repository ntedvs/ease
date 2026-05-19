"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  // Extract numeric values from stat strings
  const getNumericValue = (value: string): number => {
    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) return 0;
    return parseInt(numericMatch[0].replace(/,/g, ""), 10);
  };

  const targetValues = stats.map((stat) => getNumericValue(stat.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && animatedValues.length === 0) {
      // Initialize with zeros
      setAnimatedValues(new Array(targetValues.length).fill(0));

      // Animate each stat
      targetValues.forEach((target, index) => {
        const duration = 2500; // 2.5 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          current = Math.min(increment * step, target);

          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });

          if (step >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible, targetValues, animatedValues.length]);

  const formatValue = (value: number, originalString: string): string => {
    // Add commas for thousands
    const formatted = value.toLocaleString();

    // Add the suffix (like +) from original string
    if (originalString.includes("+")) {
      return formatted + "+";
    }
    return formatted;
  };

  return (
    <div ref={statsRef} className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group border-secondary bg-white/15 p-6 text-center text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-lg"
        >
          <div className="mb-2 text-3xl font-black text-primary transition-all duration-300 group-hover:text-white md:text-4xl">
            {isVisible ? formatValue(animatedValues[index] || 0, stat.value) : "0"}
          </div>
          <div className="text-sm text-white transition-all duration-300 group-hover:text-white md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
