"use client"

import { useEffect, useMemo, useRef, useState } from "react"

interface AnimatedNumberProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
  decimalPlaces?: number
  preserveTrailingZeros?: boolean
}

export default function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2500,
  decimalPlaces = 1,
  preserveTrailingZeros = false,
}: AnimatedNumberProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<number[]>([])
  const numberRef = useRef<HTMLDivElement>(null)

  // Convert single value to array for consistency with AnimatedStats pattern
  const targetValues = useMemo(() => [value], [value])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (numberRef.current) {
      observer.observe(numberRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible && animatedValues.length === 0) {
      // Initialize with zeros - exact pattern from AnimatedStats
      setAnimatedValues(new Array(targetValues.length).fill(0))

      // Animate each value - exact pattern from AnimatedStats
      targetValues.forEach((target, index) => {
        const steps = 60
        const increment = target / steps
        let current = 0
        let step = 0

        const timer = setInterval(() => {
          step++
          current = Math.min(increment * step, target)

          setAnimatedValues((prev) => {
            const newValues = [...prev]
            // Use proper decimal precision instead of Math.floor
            newValues[index] =
              decimalPlaces > 0
                ? Math.round(current * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
                : Math.floor(current)
            return newValues
          })

          if (step >= steps) {
            clearInterval(timer)
          }
        }, duration / steps)
      })
    }
  }, [isVisible, targetValues, animatedValues.length, duration, decimalPlaces])

  const formatValue = (value: number): string => {
    if (decimalPlaces === 0) {
      return value.toLocaleString()
    }

    return value.toLocaleString(undefined, {
      minimumFractionDigits: preserveTrailingZeros ? decimalPlaces : 0,
      maximumFractionDigits: decimalPlaces,
    })
  }

  return (
    <div ref={numberRef} className={className}>
      {prefix}
      {isVisible ? formatValue(animatedValues[0] || 0) : "0"}
      {suffix}
    </div>
  )
}
