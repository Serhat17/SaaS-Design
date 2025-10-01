'use client'

/**
 * Animated Number Counter Component
 * Features: Smooth number animation, formatting support, customizable duration
 */

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { formatNumber, formatCurrency, formatPercentage } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  duration?: number
  format?: 'number' | 'currency' | 'percentage'
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export default function AnimatedCounter({
  value,
  duration = 1.5,
  format = 'number',
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}: AnimatedCounterProps) {
  const [isInView, setIsInView] = useState(false)
  
  // Spring animation for smooth counting
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform the spring value to the target value
  const display = useTransform(spring, (latest) => {
    if (!isInView) return 0
    
    const currentValue = latest * value
    
    switch (format) {
      case 'currency':
        return formatCurrency(currentValue)
      case 'percentage':
        return formatPercentage(currentValue, decimals)
      case 'number':
      default:
        return decimals > 0 
          ? currentValue.toFixed(decimals)
          : Math.round(currentValue).toLocaleString()
    }
  })

  // Intersection observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Start the animation
          spring.set(1)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${value}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [spring, value])

  return (
    <motion.span
      id={`counter-${value}`}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  )
}

/**
 * Simpler counter variant for small numbers or when performance is critical
 */
interface SimpleCounterProps {
  from: number
  to: number
  duration?: number
  className?: string
}

export function SimpleCounter({ 
  from, 
  to, 
  duration = 1.5, 
  className = '' 
}: SimpleCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const steps = 60 * duration // 60 FPS
    const increment = (to - from) / steps
    let current = from
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      
      if (step >= steps) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.round(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [from, to, duration])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}
    </motion.span>
  )
}
