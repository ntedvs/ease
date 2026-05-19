"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    // Resume auto-play after 3 seconds
    setTimeout(() => {
      resumeAutoPlay();
    }, 3000);
  };

  const prevTestimonial = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    // Resume auto-play after 3 seconds
    setTimeout(() => {
      resumeAutoPlay();
    }, 3000);
  };

  const goToTestimonial = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
    // Resume auto-play after 3 seconds
    setTimeout(() => {
      resumeAutoPlay();
    }, 3000);
  };

  // Auto-play functions
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // 5 seconds per testimonial
  }, [testimonials.length]);

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
    startAutoPlay();
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevTestimonial();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nextTestimonial();
    } else if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      // Toggle auto-play with spacebar
      if (isAutoPlaying) {
        pauseAutoPlay();
      } else {
        resumeAutoPlay();
      }
    }
  };

  // Auto-play management
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && isAutoPlaying) {
      startAutoPlay();
    }

    // Cleanup on unmount
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, testimonials.length, startAutoPlay]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onKeyDown={handleKeyDown}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onTouchStart={pauseAutoPlay}
      tabIndex={0}
      role="region"
      aria-label="Client testimonials carousel"
      aria-live="polite"
    >
      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={prevTestimonial}
        className="group absolute top-1/2 left-0 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 hover:bg-primary/20 focus:ring-2 focus:ring-primary/50 focus:outline-none motion-reduce:transition-none md:flex"
        aria-label={`Previous testimonial: ${testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].name} from ${testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].company}`}
      >
        <ChevronLeft size={28} className="text-primary group-hover:text-primary-dark" />
      </button>

      <button
        onClick={nextTestimonial}
        className="group absolute top-1/2 right-0 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 hover:bg-primary/20 focus:ring-2 focus:ring-primary/50 focus:outline-none motion-reduce:transition-none md:flex"
        aria-label={`Next testimonial: ${testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].name} from ${testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].company}`}
      >
        <ChevronRight size={28} className="text-primary group-hover:text-primary-dark" />
      </button>

      {/* Main Testimonial Card */}
      <div className="mx-0 flex min-h-[340px] items-center bg-white px-8 py-6 shadow-lg md:mx-20 md:min-h-[300px] md:px-12 md:py-8">
        {/* Testimonial Content */}
        <div className="w-full space-y-6 text-center">
          <blockquote className="text-lg leading-relaxed font-medium text-secondary italic md:text-xl">
            &ldquo;{currentTestimonial.quote}&rdquo;
          </blockquote>

          <div className="space-y-2">
            <div className="text-lg font-bold text-secondary">{currentTestimonial.name}</div>
            <div className="text-base font-semibold text-primary">{currentTestimonial.company}</div>
          </div>
        </div>
      </div>

      {/* Auto-play status indicator (for screen readers) */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial carousel is {isAutoPlaying ? "auto-playing" : "paused"}. Currently showing
        testimonial {currentIndex + 1} of {testimonials.length}.
      </div>

      {/* Dots Indicator */}
      <div
        className="mt-8 flex justify-center space-x-2"
        role="tablist"
        aria-label="Testimonial selection"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`h-3 w-3 rounded-full transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:outline-none motion-reduce:transition-none ${
              index === currentIndex ? "scale-110 bg-primary" : "bg-muted hover:bg-primary/50"
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to testimonial ${index + 1}: ${testimonial.name} from ${testimonial.company}`}
          />
        ))}
      </div>
    </div>
  );
}
