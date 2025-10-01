'use client'

/**
 * Reusable Card Component with 3D hover effects
 * Features: Theme-aware styling, animated hover effects, flexible content
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover3D?: boolean
  clickable?: boolean
  onClick?: () => void
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  headerAction?: React.ReactNode
}

export default function Card({ 
  children, 
  className,
  hover3D = true,
  clickable = false,
  onClick,
  title,
  subtitle,
  icon,
  headerAction
}: CardProps) {
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const getCardClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white border-gray-200 shadow-sm'
      case 'dark':
        return 'bg-gray-800 border-gray-700 shadow-lg'
      case 'vibrant':
        return 'bg-white/10 backdrop-blur-lg border-white/20 shadow-xl'
      default:
        return 'bg-white border-gray-200 shadow-sm'
    }
  }

  const getHoverClasses = () => {
    switch (theme) {
      case 'light':
        return 'hover:shadow-lg hover:shadow-blue-500/10'
      case 'dark':
        return 'hover:shadow-xl hover:shadow-blue-500/20'
      case 'vibrant':
        return 'hover:shadow-2xl hover:shadow-purple-500/30 hover:bg-white/15'
      default:
        return 'hover:shadow-lg hover:shadow-blue-500/10'
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const cardVariants = {
    initial: { 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.02,
      rotateX: hover3D ? mousePosition.y * -5 : 0,
      rotateY: hover3D ? mousePosition.x * 5 : 0,
      z: hover3D ? 50 : 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: theme === 'vibrant' ? 0.3 : 0.1,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={clickable ? onClick : undefined}
      className={cn(
        "relative rounded-xl border p-6 transition-all duration-300 ease-out transform-gpu",
        getCardClasses(),
        hover3D && getHoverClasses(),
        clickable && "cursor-pointer",
        className
      )}
    >
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 -z-10 blur-xl"
      />

      {/* Header with icon, title, subtitle */}
      {(icon || title || subtitle || headerAction) && (
        <div className="relative z-20 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className={cn(
                "p-2 rounded-lg",
                theme === 'light' ? 'bg-blue-50 text-blue-600' :
                theme === 'dark' ? 'bg-blue-900/30 text-blue-400' :
                'bg-white/20 text-white'
              )}>
                {icon}
              </div>
            )}
            <div>
              {title && (
                <h3 className={cn(
                  "font-semibold",
                  theme === 'light' ? 'text-gray-900' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                )}>
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className={cn(
                  "text-sm",
                  theme === 'light' ? 'text-gray-500' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-white/70'
                )}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {headerAction && (
            <div className="flex-shrink-0">
              {headerAction}
            </div>
          )}
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover highlight effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 pointer-events-none"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}
