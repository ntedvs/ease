"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    )
  }

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      prevImage()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      nextImage()
    }
  }

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (!prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        )
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])

  // Pause auto-play on hover/focus
  const pauseAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const resumeAutoPlay = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (!prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        )
      }, 4000)
    }
  }

  return (
    <div className="flex justify-center">
      <div
        ref={carouselRef}
        className="relative h-80 w-80 md:h-96 md:w-96"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onFocus={pauseAutoPlay}
        onBlur={resumeAutoPlay}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Project image carousel"
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            className="object-cover transition-opacity duration-500 motion-reduce:transition-none"
            sizes="(max-width: 768px) 320px, 384px"
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label={`Previous image: ${images[currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1].alt}`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label={`Next image: ${images[currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1].alt}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 space-x-2"
          role="tablist"
          aria-label="Image selection"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:outline-none ${
                index === currentImageIndex
                  ? "scale-110 bg-primary"
                  : "bg-muted hover:bg-primary/50"
              }`}
              role="tab"
              aria-selected={index === currentImageIndex}
              aria-label={`Go to image ${index + 1}: ${image.alt}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
