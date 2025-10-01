'use client'

/**
 * Chart Wrapper Component with animations and theme support
 * Features: Animated chart loading, tooltip customization, responsive design
 */

import React from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface ChartWrapperProps {
  type: 'line' | 'bar' | 'pie'
  data: any[]
  title?: string
  height?: number
  className?: string
  colors?: string[]
  xDataKey?: string
  yDataKey?: string
  animate?: boolean
}

export default function ChartWrapper({
  type,
  data,
  title,
  height = 300,
  className,
  colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'],
  xDataKey = 'name',
  yDataKey = 'value',
  animate = true
}: ChartWrapperProps) {
  const { theme } = useTheme()

  const getAxisColor = () => {
    switch (theme) {
      case 'light':
        return '#6b7280'
      case 'dark':
        return '#9ca3af'
      case 'vibrant':
        return '#ffffff'
      default:
        return '#6b7280'
    }
  }

  const getGridColor = () => {
    switch (theme) {
      case 'light':
        return '#f3f4f6'
      case 'dark':
        return '#374151'
      case 'vibrant':
        return 'rgba(255,255,255,0.1)'
      default:
        return '#f3f4f6'
    }
  }

  const getTooltipStyle = () => {
    switch (theme) {
      case 'light':
        return {
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          color: '#111827'
        }
      case 'dark':
        return {
          backgroundColor: '#1f2937',
          border: '1px solid #374151',
          borderRadius: '8px',
          color: '#f9fafb'
        }
      case 'vibrant':
        return {
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          color: '#ffffff'
        }
      default:
        return {}
    }
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 shadow-lg"
          style={getTooltipStyle()}
        >
          <p className="font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' 
                ? entry.value.toLocaleString() 
                : entry.value}
            </p>
          ))}
        </motion.div>
      )
    }
    return null
  }

  const chartVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    }

    switch (type) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={getGridColor()} />
            <XAxis 
              dataKey={xDataKey} 
              stroke={getAxisColor()}
              fontSize={12}
            />
            <YAxis 
              stroke={getAxisColor()}
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey={yDataKey}
              stroke={colors[0]}
              strokeWidth={3}
              dot={{ fill: colors[0], strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: colors[0], strokeWidth: 2 }}
              animationDuration={animate ? 1500 : 0}
            />
          </LineChart>
        )

      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={getGridColor()} />
            <XAxis 
              dataKey={xDataKey} 
              stroke={getAxisColor()}
              fontSize={12}
            />
            <YAxis 
              stroke={getAxisColor()}
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey={yDataKey}
              fill={colors[0]}
              radius={[4, 4, 0, 0]}
              animationDuration={animate ? 1000 : 0}
              animationBegin={animate ? 200 : 0}
            />
          </BarChart>
        )

      case 'pie':
        return (
          <PieChart {...commonProps}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={5}
              dataKey={yDataKey}
              animationDuration={animate ? 1000 : 0}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      variants={chartVariants}
      initial="hidden"
      animate="visible"
      className={cn("w-full", className)}
    >
      {title && (
        <h3 className={cn(
          "text-lg font-semibold mb-4",
          theme === 'light' ? 'text-gray-900' :
          theme === 'dark' ? 'text-white' :
          'text-white'
        )}>
          {title}
        </h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

/**
 * Quick chart component for simple data visualization
 */
interface QuickChartProps {
  data: { name: string; value: number }[]
  type: 'line' | 'bar' | 'pie'
  color?: string
  height?: number
}

export function QuickChart({ 
  data, 
  type, 
  color = '#3b82f6', 
  height = 200 
}: QuickChartProps) {
  return (
    <ChartWrapper
      type={type}
      data={data}
      height={height}
      colors={[color]}
      animate={true}
    />
  )
}
