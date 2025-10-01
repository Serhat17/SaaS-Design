'use client'

/**
 * Chart Animations Component
 * Features: "Data slides up from bottom" animation with sequential reveal
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface AnimatedBarChartProps {
  data: { name: string; value: number }[]
  maxValue?: number
  height?: number
  className?: string
  colors?: string[]
  showReplay?: boolean
  triggerOnScroll?: boolean
  onAnimationComplete?: () => void
  renderReplayButton?: (replayFn: () => void, isAnimating: boolean) => React.ReactNode
}

export function AnimatedBarChart({ 
  data, 
  maxValue,
  height = 300, 
  className,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
  showReplay = true,
  triggerOnScroll = false,
  onAnimationComplete,
  renderReplayButton
}: AnimatedBarChartProps) {
  const { theme } = useTheme()
  const [animationKey, setAnimationKey] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate max value if not provided
  const calculatedMaxValue = maxValue || Math.max(...data.map(d => d.value))

  const replayAnimation = () => {
    setIsAnimating(true)
    setAnimationKey(prev => prev + 1)
    
    setTimeout(() => {
      setIsAnimating(false)
      onAnimationComplete?.()
    }, data.length * 150 + 1000)
  }

  // Expose replay button via render prop if provided
  if (renderReplayButton) {
    renderReplayButton(replayAnimation, isAnimating)
  }

  const getBarColor = (index: number) => colors[index % colors.length]

  const getAxisColor = () => {
    switch (theme) {
      case 'light': return '#e5e7eb'
      case 'dark': return '#374151'
      case 'vibrant': return 'rgba(255,255,255,0.2)'
      default: return '#e5e7eb'
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case 'light': return '#6b7280'
      case 'dark': return '#9ca3af'
      case 'vibrant': return '#ffffff'
      default: return '#6b7280'
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Replay Button */}
      {showReplay && (
        <motion.button
          onClick={replayAnimation}
          disabled={isAnimating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "absolute -top-2 -right-2 z-10 flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm",
            theme === 'light' 
              ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              : theme === 'dark'
              ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
              : 'bg-white/20 text-white hover:bg-white/30',
            isAnimating && 'opacity-50 cursor-not-allowed'
          )}
        >
          <Play className="w-3 h-3" />
          <span>Replay</span>
        </motion.button>
      )}

      {/* Chart Container */}
      <div className="relative mt-8 pl-16" style={{ height }}>
        {/* Y-Axis */}
        <div 
          className="absolute left-16 top-0 bottom-8 w-px"
          style={{ backgroundColor: getAxisColor() }}
        />
        
        {/* X-Axis */}
        <div 
          className="absolute bottom-8 left-16 right-0 h-px"
          style={{ backgroundColor: getAxisColor() }}
        />

        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-8 w-14 flex flex-col justify-between text-xs pr-2" style={{ color: getTextColor() }}>
          {[calculatedMaxValue, Math.round(calculatedMaxValue * 0.75), Math.round(calculatedMaxValue * 0.5), Math.round(calculatedMaxValue * 0.25), 0].map((value, index) => (
            <span key={index} className="text-right">{value.toLocaleString()}</span>
          ))}
        </div>

        {/* Bars Container */}
        <div className="absolute left-16 right-0 top-0 bottom-8 flex items-end justify-around px-8">
          {data.map((item, index) => {
            const barHeightPx = (item.value / calculatedMaxValue) * (height - 60)
            const barColor = getBarColor(index)
            
            return (
              <div key={`${animationKey}-${item.name}`} className="flex flex-col items-center" style={{ flex: 1, maxWidth: '100px' }}>
                {/* Bar with Framer Motion */}
                <motion.div
                  className="rounded-t-lg cursor-pointer"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    backgroundColor: barColor,
                    height: `${barHeightPx}px`,
                    transformOrigin: 'bottom',
                    width: '40px',
                    position: 'relative',
                  }}
                  whileHover={{ opacity: 0.8 }}
                >
                  {/* Value Label */}
                  <motion.div 
                    className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.6,
                      ease: "easeOut"
                    }}
                    style={{ color: getTextColor() }}
                  >
                    {item.value.toLocaleString()}
                  </motion.div>
                </motion.div>
                
                {/* X-Axis Label */}
                <div 
                  className="mt-2 text-xs text-center w-full truncate"
                  style={{ color: getTextColor() }}
                  title={item.name}
                >
                  {item.name}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface AnimatedLineChartProps {
  data: { name: string; value: number }[]
  height?: number
  className?: string
  color?: string
  showReplay?: boolean
  onAnimationComplete?: () => void
}

export function AnimatedLineChart({
  data,
  height = 300,
  className,
  color = '#3b82f6',
  showReplay = true,
  onAnimationComplete
}: AnimatedLineChartProps) {
  const { theme } = useTheme()
  const [animationKey, setAnimationKey] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const maxValue = Math.max(...data.map(d => d.value))
  const padding = 40

  // Generate SVG path
  const generatePath = () => {
    const width = 400 // Fixed width for calculation
    const chartHeight = height - padding * 2
    const stepX = width / (data.length - 1)

    return data.map((point, index) => {
      const x = index * stepX
      const y = chartHeight - (point.value / maxValue) * chartHeight
      return { x, y, value: point.value, name: point.name }
    })
  }

  const pathPoints = generatePath()
  const pathData = pathPoints.reduce((acc: string, point: { x: number, y: number }, index: number) => {
    const command = index === 0 ? 'M' : 'L'
    return `${acc} ${command} ${point.x} ${point.y}`
  }, '')

  const replayAnimation = () => {
    setIsAnimating(true)
    setAnimationKey(prev => prev + 1)
    
    setTimeout(() => {
      setIsAnimating(false)
      onAnimationComplete?.()
    }, 1400 + (data.length * 150))
  }

  const getAxisColor = () => {
    switch (theme) {
      case 'light': return '#e5e7eb'
      case 'dark': return '#374151'
      case 'vibrant': return 'rgba(255,255,255,0.2)'
      default: return '#e5e7eb'
    }
  }

  const getTextColor = () => {
    switch (theme) {
      case 'light': return '#6b7280'
      case 'dark': return '#9ca3af'
      case 'vibrant': return '#ffffff'
      default: return '#6b7280'
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Replay Button */}
      {showReplay && (
        <motion.button
          onClick={replayAnimation}
          disabled={isAnimating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "absolute top-0 right-0 z-10 flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200",
            theme === 'light' 
              ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              : theme === 'dark'
              ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
              : 'bg-white/20 text-white hover:bg-white/30',
            isAnimating && 'opacity-50 cursor-not-allowed'
          )}
        >
          <Play className="w-3 h-3" />
          <span>Replay</span>
        </motion.button>
      )}

      <svg 
        key={animationKey}
        width="100%" 
        height={height}
        className="overflow-visible"
      >
        {/* Grid Lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
          <line
            key={index}
            x1={padding}
            y1={padding + (height - padding * 2) * ratio}
            x2="100%"
            y2={padding + (height - padding * 2) * ratio}
            stroke={getAxisColor()}
            strokeWidth={ratio === 1 ? 1 : 0.5}
          />
        ))}

        {/* Vertical Grid */}
        {pathPoints.map((point, index) => (
          <line
            key={index}
            x1={padding + point.x}
            y1={padding}
            x2={padding + point.x}
            y2={height - padding}
            stroke={getAxisColor()}
            strokeWidth={0.5}
          />
        ))}

        {/* Line Path with Motion */}
        <motion.path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform={`translate(${padding}, ${padding})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />

        {/* Data Points with Motion */}
        {pathPoints.map((point, index) => (
          <g key={`${animationKey}-point-${index}`}>
            <motion.circle
              cx={padding + point.x}
              cy={padding + point.y}
              r={4}
              fill={color}
              stroke="white"
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.15,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            />
            <text
              x={padding + point.x}
              y={height - padding + 20}
              textAnchor="middle"
              fill={getTextColor()}
              fontSize="12"
            >
              {point.name}
            </text>
          </g>
        ))}

        {/* Y-Axis Labels */}
        {[maxValue, Math.round(maxValue * 0.75), Math.round(maxValue * 0.5), Math.round(maxValue * 0.25), 0].map((value, index) => (
          <text
            key={index}
            x={padding - 10}
            y={padding + (height - padding * 2) * (index / 4) + 4}
            textAnchor="end"
            fill={getTextColor()}
            fontSize="12"
          >
            {value.toLocaleString()}
          </text>
        ))}
      </svg>
    </div>
  )
}
