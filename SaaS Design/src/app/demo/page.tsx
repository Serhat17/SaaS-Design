'use client'

/**
 * Animation Demo Page
 * Features: Showcase of "data slides up from bottom" chart animations
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play,
  BarChart3,
  TrendingUp,
  Zap,
  RefreshCw
} from 'lucide-react'
import Card from '@/components/Card'
import { AnimatedBarChart, AnimatedLineChart } from '@/components/ChartAnimations'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

// Demo data sets
const salesData = [
  { name: 'Jan', value: 4500 },
  { name: 'Feb', value: 7200 },
  { name: 'Mar', value: 5800 },
  { name: 'Apr', value: 8900 },
  { name: 'May', value: 6400 },
  { name: 'Jun', value: 9500 }
]

const performanceData = [
  { name: 'Marketing', value: 750 },
  { name: 'Sales', value: 920 },
  { name: 'Support', value: 640 },
  { name: 'Development', value: 1100 },
  { name: 'Design', value: 480 }
]

const growthData = [
  { name: 'Q1', value: 24500 },
  { name: 'Q2', value: 31200 },
  { name: 'Q3', value: 28900 },
  { name: 'Q4', value: 35600 }
]

export default function DemoPage() {
  const { theme } = useTheme()
  const [animationCount, setAnimationCount] = useState(0)

  const handleAnimationComplete = () => {
    setAnimationCount(prev => prev + 1)
  }

  const replayAllAnimations = () => {
    // This will trigger re-renders with new keys to restart animations
    window.location.reload()
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "text-3xl font-bold",
              theme === 'light' ? 'text-gray-900' :
              theme === 'dark' ? 'text-white' :
              'text-white'
            )}
          >
            Animation Demo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "mt-2",
              theme === 'light' ? 'text-gray-600' :
              theme === 'dark' ? 'text-gray-400' :
              'text-white/80'
            )}
          >
            Interactive showcase of "data slides up from bottom" chart animations.
          </motion.p>
        </div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={replayAllAnimations}
          className={cn(
            "mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
            theme === 'light' 
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white/20 text-white hover:bg-white/30'
          )}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Replay All</span>
        </motion.button>
      </div>

      {/* Animation Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={cn(
          "p-4 rounded-lg",
          theme === 'light' ? 'bg-blue-50' :
          theme === 'dark' ? 'bg-blue-900/20' :
          'bg-white/10'
        )}
      >
        <div className="flex items-center space-x-2">
          <Zap className={cn(
            "w-5 h-5",
            theme === 'light' ? 'text-blue-600' :
            theme === 'dark' ? 'text-blue-400' :
            'text-white'
          )} />
          <span className={cn(
            "font-medium",
            theme === 'light' ? 'text-blue-800' :
            theme === 'dark' ? 'text-blue-300' :
            'text-white'
          )}>
            Animation Features: Sequential reveal, smooth easing (cubic-bezier), 60fps performance
          </span>
        </div>
      </motion.div>

      {/* Animation Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card 
            icon={<BarChart3 className="w-5 h-5" />}
            title="Monthly Sales Performance"
            subtitle="Bars slide up from bottom with 150ms stagger delay"
          >
            <AnimatedBarChart
              data={salesData}
              height={350}
              colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']}
              showReplay={true}
              onAnimationComplete={handleAnimationComplete}
            />
            <div className="mt-4 text-sm space-y-2">
              <div className={cn(
                "font-medium",
                theme === 'light' ? 'text-gray-900' :
                theme === 'dark' ? 'text-white' :
                'text-white'
              )}>
                Animation Details:
              </div>
              <ul className={cn(
                "text-xs space-y-1",
                theme === 'light' ? 'text-gray-600' :
                theme === 'dark' ? 'text-gray-400' :
                'text-white/80'
              )}>
                <li>• Duration: 0.8s per bar</li>
                <li>• Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)</li>
                <li>• Transform: scaleY(0) → scaleY(1)</li>
                <li>• Origin: bottom</li>
                <li>• Stagger: 150ms delay between bars</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Line Chart Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card 
            icon={<TrendingUp className="w-5 h-5" />}
            title="Team Performance"
            subtitle="Line draws from start to finish with point reveals"
          >
            <AnimatedLineChart
              data={performanceData}
              height={350}
              color="#10b981"
              showReplay={true}
              onAnimationComplete={handleAnimationComplete}
            />
            <div className="mt-4 text-sm space-y-2">
              <div className={cn(
                "font-medium",
                theme === 'light' ? 'text-gray-900' :
                theme === 'dark' ? 'text-white' :
                'text-white'
              )}>
                Animation Details:
              </div>
              <ul className={cn(
                "text-xs space-y-1",
                theme === 'light' ? 'text-gray-600' :
                theme === 'dark' ? 'text-gray-400' :
                'text-white/80'
              )}>
                <li>• Path drawing: stroke-dashoffset animation</li>
                <li>• Duration: 1.2s for full line</li>
                <li>• Points: scale(0) → scale(1) with bounce</li>
                <li>• Delay: 200ms + 150ms per point</li>
                <li>• Easing: cubic-bezier for smooth drawing</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Large Bar Chart Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card 
            icon={<BarChart3 className="w-5 h-5" />}
            title="Quarterly Growth Overview"
            subtitle="Large format demonstration with value labels that fade in after bars"
          >
            <AnimatedBarChart
              data={growthData}
              height={400}
              colors={['#8b5cf6', '#ec4899', '#06b6d4', '#10b981']}
              showReplay={true}
              onAnimationComplete={handleAnimationComplete}
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'light' ? 'bg-gray-50' :
                theme === 'dark' ? 'bg-gray-700' :
                'bg-white/5'
              )}>
                <h4 className={cn(
                  "font-medium mb-2",
                  theme === 'light' ? 'text-gray-900' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                )}>
                  Performance
                </h4>
                <ul className={cn(
                  "text-sm space-y-1",
                  theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-white/80'
                )}>
                  <li>✓ 60fps smooth animation</li>
                  <li>✓ GPU-accelerated transforms</li>
                  <li>✓ Minimal repaints</li>
                </ul>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'light' ? 'bg-gray-50' :
                theme === 'dark' ? 'bg-gray-700' :
                'bg-white/5'
              )}>
                <h4 className={cn(
                  "font-medium mb-2",
                  theme === 'light' ? 'text-gray-900' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                )}>
                  User Experience
                </h4>
                <ul className={cn(
                  "text-sm space-y-1",
                  theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-white/80'
                )}>
                  <li>✓ Satisfying visual feedback</li>
                  <li>✓ Clear data progression</li>
                  <li>✓ Replay functionality</li>
                </ul>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'light' ? 'bg-gray-50' :
                theme === 'dark' ? 'bg-gray-700' :
                'bg-white/5'
              )}>
                <h4 className={cn(
                  "font-medium mb-2",
                  theme === 'light' ? 'text-gray-900' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                )}>
                  Technical
                </h4>
                <ul className={cn(
                  "text-sm space-y-1",
                  theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-white/80'
                )}>
                  <li>✓ CSS transforms only</li>
                  <li>✓ No layout thrashing</li>
                  <li>✓ Intersection observer ready</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card 
          title="Implementation Code"
          subtitle="CSS and JavaScript for the slide-up animation effect"
        >
          <div className={cn(
            "p-4 rounded-lg overflow-x-auto",
            theme === 'light' ? 'bg-gray-100' :
            theme === 'dark' ? 'bg-gray-800' :
            'bg-white/5'
          )}>
            <pre className={cn(
              "text-sm",
              theme === 'light' ? 'text-gray-800' :
              theme === 'dark' ? 'text-gray-200' :
              'text-white/90'
            )}>
{`.chart-bar {
  height: var(--final-height);
  transform: scaleY(0);
  transform-origin: bottom;
}

.chart-bar.animate-up {
  animation: slideUpFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: calc(var(--index) * 0.15s);
}

@keyframes slideUpFromBottom {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}`}
            </pre>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
