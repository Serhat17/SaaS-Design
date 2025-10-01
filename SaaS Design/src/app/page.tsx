'use client'

/**
 * Home Dashboard Page
 * Features: KPI cards with animated counters, recent activity, quick actions
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Download,
  RefreshCw,
  Play
} from 'lucide-react'
import Card from '@/components/Card'
import AnimatedCounter from '@/components/AnimatedCounter'
import ChartWrapper from '@/components/ChartWrapper'
import { AnimatedBarChart } from '@/components/ChartAnimations'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  initialKPIData, 
  initialRevenueData,
  generateKPIData,
  generateRevenueData,
  generateRealTimeMetrics
} from '@/utils/mockData'
import { cn } from '@/lib/utils'

export default function HomePage() {
  const { theme } = useTheme()
  const [kpiData, setKpiData] = useState(initialKPIData)
  const [revenueData, setRevenueData] = useState(initialRevenueData)
  const [realTimeMetrics, setRealTimeMetrics] = useState(generateRealTimeMetrics())
  const [isGenerating, setIsGenerating] = useState(false)
  const [chartKey, setChartKey] = useState(0)

  const handleGenerateData = async () => {
    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setKpiData(generateKPIData())
    setRevenueData(generateRevenueData())
    setRealTimeMetrics(generateRealTimeMetrics())
    
    setIsGenerating(false)
  }

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: kpiData.revenue,
      format: 'currency' as const,
      icon: <DollarSign className="w-6 h-6" />,
      trend: 12.5,
      trendDirection: 'up' as const
    },
    {
      title: 'Active Users',
      value: kpiData.activeUsers,
      format: 'number' as const,
      icon: <Users className="w-6 h-6" />,
      trend: 8.2,
      trendDirection: 'up' as const
    },
    {
      title: 'Growth Rate',
      value: kpiData.growth,
      format: 'percentage' as const,
      icon: <TrendingUp className="w-6 h-6" />,
      trend: 2.1,
      trendDirection: 'up' as const
    },
    {
      title: 'Conversion Rate',
      value: kpiData.conversionRate,
      format: 'percentage' as const,
      icon: <Target className="w-6 h-6" />,
      trend: -0.5,
      trendDirection: 'down' as const
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
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
            Dashboard Overview
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
            Welcome back! Here's what's happening with your business.
          </motion.p>
        </div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerateData}
          disabled={isGenerating}
          className={cn(
            "mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
            theme === 'light' 
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white/20 text-white hover:bg-white/30',
            isGenerating && 'opacity-50 cursor-not-allowed'
          )}
        >
          <RefreshCw className={cn("w-4 h-4", isGenerating && "animate-spin")} />
          <span>Generate New Data</span>
        </motion.button>
      </div>

      {/* KPI Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {kpiCards.map((card, index) => (
          <motion.div key={card.title} variants={cardVariants}>
            <Card 
              hover3D={true}
              className="relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={cn(
                    "text-sm font-medium",
                    theme === 'light' ? 'text-gray-600' :
                    theme === 'dark' ? 'text-gray-400' :
                    'text-white/80'
                  )}>
                    {card.title}
                  </p>
                  <div className="mt-2">
                    <AnimatedCounter
                      value={card.value}
                      format={card.format}
                      decimals={card.format === 'percentage' ? 1 : 0}
                      className={cn(
                        "text-2xl font-bold",
                        theme === 'light' ? 'text-gray-900' :
                        theme === 'dark' ? 'text-white' :
                        'text-white'
                      )}
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    {card.trendDirection === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span className={cn(
                      "text-sm font-medium ml-1",
                      card.trendDirection === 'up' ? 'text-green-500' : 'text-red-500'
                    )}>
                      {Math.abs(card.trend)}%
                    </span>
                    <span className={cn(
                      "text-sm ml-1",
                      theme === 'light' ? 'text-gray-500' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/60'
                    )}>
                      vs last month
                    </span>
                  </div>
                </div>
                <div className={cn(
                  "p-3 rounded-full",
                  theme === 'light' ? 'bg-blue-50 text-blue-600' :
                  theme === 'dark' ? 'bg-blue-900/30 text-blue-400' :
                  'bg-white/20 text-white'
                )}>
                  {card.icon}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart with Animation Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card 
            title="Revenue Trend" 
            subtitle="Animated bars slide up from bottom - click replay!"
            headerAction={
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setChartKey(prev => prev + 1)}
                className={cn(
                  "flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  theme === 'light' 
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    : theme === 'dark'
                    ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
                    : 'bg-white/20 text-white hover:bg-white/30'
                )}
              >
                <Play className="w-3 h-3" />
                <span>Replay</span>
              </motion.button>
            }
          >
            <AnimatedBarChart
              key={chartKey}
              data={revenueData.slice(0, 6)} // Show fewer bars for better demo
              height={300}
              colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']}
              showReplay={false}
            />
          </Card>
        </motion.div>

        {/* Real-time Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card title="Real-time Metrics" subtitle="Live data">
            <div className="space-y-4">
              {[
                { label: 'Current Visitors', value: realTimeMetrics.currentVisitors },
                { label: 'Page Views', value: realTimeMetrics.pageViews },
                { label: 'Bounce Rate', value: realTimeMetrics.bounceRate, suffix: '%' },
                { label: 'Avg Session', value: Math.floor(realTimeMetrics.avgSessionDuration / 60), suffix: 'm' }
              ].map((metric, index) => (
                <div key={metric.label} className="flex justify-between items-center">
                  <span className={cn(
                    "text-sm",
                    theme === 'light' ? 'text-gray-600' :
                    theme === 'dark' ? 'text-gray-400' :
                    'text-white/80'
                  )}>
                    {metric.label}
                  </span>
                  <span className={cn(
                    "font-semibold",
                    theme === 'light' ? 'text-gray-900' :
                    theme === 'dark' ? 'text-white' :
                    'text-white'
                  )}>
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix || ''}
                      duration={1}
                    />
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card title="Quick Actions" subtitle="Common tasks">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'New Campaign', icon: Plus },
              { label: 'Export Data', icon: Download },
              { label: 'View Analytics', icon: TrendingUp },
              { label: 'User Management', icon: Users }
            ].map((action) => (
              <button
                key={action.label}
                className={cn(
                  "p-4 rounded-lg border border-dashed transition-all duration-200 hover:scale-105",
                  theme === 'light' 
                    ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    : theme === 'dark'
                    ? 'border-gray-600 hover:border-blue-500 hover:bg-blue-900/20'
                    : 'border-white/30 hover:border-white hover:bg-white/10'
                )}
              >
                <action.icon className={cn(
                  "w-6 h-6 mx-auto mb-2",
                  theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-400' :
                  'text-white/80'
                )} />
                <p className={cn(
                  "text-sm font-medium",
                  theme === 'light' ? 'text-gray-700' :
                  theme === 'dark' ? 'text-gray-300' :
                  'text-white/90'
                )}>
                  {action.label}
                </p>
              </button>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
