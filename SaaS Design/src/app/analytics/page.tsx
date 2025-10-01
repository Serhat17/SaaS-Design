'use client'

/**
 * Analytics Page
 * Features: Multiple chart types, filters, data generation, interactive elements
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Filter,
  BarChart3,
  TrendingUp,
  PieChart,
  RefreshCw,
  Download
} from 'lucide-react'
import Card from '@/components/Card'
import ChartWrapper from '@/components/ChartWrapper'
import { AnimatedBarChart, AnimatedLineChart } from '@/components/ChartAnimations'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  generateRevenueData,
  generateProductData,
  generateUserDistribution,
  initialRevenueData,
  initialProductData,
  initialUserDistribution
} from '@/utils/mockData'
import { cn } from '@/lib/utils'

type DateRange = '7d' | '30d' | '90d' | '1y'
type Category = 'all' | 'revenue' | 'users' | 'products'

export default function AnalyticsPage() {
  const { theme } = useTheme()
  const [dateRange, setDateRange] = useState<DateRange>('30d')
  const [category, setCategory] = useState<Category>('all')
  const [revenueData, setRevenueData] = useState(initialRevenueData)
  const [productData, setProductData] = useState(initialProductData)
  const [userDistribution, setUserDistribution] = useState(initialUserDistribution)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateData = async () => {
    setIsGenerating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setRevenueData(generateRevenueData())
    setProductData(generateProductData())
    setUserDistribution(generateUserDistribution())
    
    setIsGenerating(false)
  }

  const dateRangeOptions = [
    { value: '7d' as DateRange, label: 'Last 7 days' },
    { value: '30d' as DateRange, label: 'Last 30 days' },
    { value: '90d' as DateRange, label: 'Last 90 days' },
    { value: '1y' as DateRange, label: 'Last year' }
  ]

  const categoryOptions = [
    { value: 'all' as Category, label: 'All Categories' },
    { value: 'revenue' as Category, label: 'Revenue' },
    { value: 'users' as Category, label: 'Users' },
    { value: 'products' as Category, label: 'Products' }
  ]

  const getFilterButtonClass = (isActive: boolean) => {
    const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
    
    if (isActive) {
      switch (theme) {
        case 'light':
          return `${baseClasses} bg-blue-600 text-white`
        case 'dark':
          return `${baseClasses} bg-blue-600 text-white`
        case 'vibrant':
          return `${baseClasses} bg-white/20 text-white`
        default:
          return `${baseClasses} bg-blue-600 text-white`
      }
    } else {
      switch (theme) {
        case 'light':
          return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`
        case 'dark':
          return `${baseClasses} bg-gray-700 text-gray-300 hover:bg-gray-600`
        case 'vibrant':
          return `${baseClasses} bg-white/10 text-white/80 hover:bg-white/15`
        default:
          return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`
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
            Analytics
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
            Deep insights into your business performance.
          </motion.p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
              theme === 'light' 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : theme === 'dark'
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-white/10 text-white hover:bg-white/15'
            )}
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGenerateData}
            disabled={isGenerating}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
              theme === 'light' 
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/20 text-white hover:bg-white/30',
              isGenerating && 'opacity-50 cursor-not-allowed'
            )}
          >
            <RefreshCw className={cn("w-4 h-4", isGenerating && "animate-spin")} />
            <span>Generate Data</span>
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        {/* Date Range Filter */}
        <div className="flex items-center space-x-2">
          <Calendar className={cn(
            "w-5 h-5",
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/80'
          )} />
          <span className={cn(
            "text-sm font-medium",
            theme === 'light' ? 'text-gray-700' :
            theme === 'dark' ? 'text-gray-300' :
            'text-white/90'
          )}>
            Date Range:
          </span>
          <div className="flex space-x-1">
            {dateRangeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setDateRange(option.value)}
                className={getFilterButtonClass(dateRange === option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <Filter className={cn(
            "w-5 h-5",
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/80'
          )} />
          <span className={cn(
            "text-sm font-medium",
            theme === 'light' ? 'text-gray-700' :
            theme === 'dark' ? 'text-gray-300' :
            'text-white/90'
          )}>
            Category:
          </span>
          <div className="flex space-x-1">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setCategory(option.value)}
                className={getFilterButtonClass(category === option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart with Slide-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card 
            icon={<TrendingUp className="w-5 h-5" />}
            title="Revenue Over Time"
            subtitle="Animated line chart with path drawing effect"
          >
            <AnimatedLineChart
              data={revenueData}
              height={350}
              color="#3b82f6"
              showReplay={true}
            />
          </Card>
        </motion.div>

        {/* Product Performance with Slide-Up Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card 
            icon={<BarChart3 className="w-5 h-5" />}
            title="Top Products"
            subtitle="Bars slide up from bottom with sequential reveal"
          >
            <AnimatedBarChart
              data={productData}
              height={350}
              colors={['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6']}
              showReplay={true}
            />
          </Card>
        </motion.div>

        {/* User Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card 
            icon={<PieChart className="w-5 h-5" />}
            title="User Distribution"
            subtitle="By device type"
          >
            <ChartWrapper
              type="pie"
              data={userDistribution}
              height={350}
              colors={['#3b82f6', '#10b981', '#f59e0b']}
              animate={true}
            />
          </Card>
        </motion.div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card title="Key Metrics" subtitle="Performance indicators">
            <div className="space-y-6">
              {[
                { 
                  label: 'Average Order Value', 
                  value: '$147.50', 
                  change: '+12.3%', 
                  positive: true 
                },
                { 
                  label: 'Customer Lifetime Value', 
                  value: '$892.40', 
                  change: '+8.7%', 
                  positive: true 
                },
                { 
                  label: 'Churn Rate', 
                  value: '3.2%', 
                  change: '-0.8%', 
                  positive: true 
                },
                { 
                  label: 'Net Promoter Score', 
                  value: '67', 
                  change: '+5', 
                  positive: true 
                }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-opacity-50"
                  style={{
                    backgroundColor: theme === 'light' ? '#f8fafc' :
                                   theme === 'dark' ? '#1f2937' :
                                   'rgba(255,255,255,0.05)'
                  }}
                >
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      theme === 'light' ? 'text-gray-600' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/80'
                    )}>
                      {metric.label}
                    </p>
                    <p className={cn(
                      "text-xl font-bold mt-1",
                      theme === 'light' ? 'text-gray-900' :
                      theme === 'dark' ? 'text-white' :
                      'text-white'
                    )}>
                      {metric.value}
                    </p>
                  </div>
                  <div className={cn(
                    "text-sm font-semibold px-2 py-1 rounded",
                    metric.positive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                  )}>
                    {metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
