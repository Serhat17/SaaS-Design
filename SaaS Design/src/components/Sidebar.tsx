'use client'

/**
 * Responsive Sidebar Navigation Component
 * Features: Collapsible design, animated transitions, active state tracking
 */

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BarChart3, 
  FileText, 
  Settings,
  Zap,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Demo', href: '/demo', icon: Zap },
  { name: 'Settings', href: '/settings', icon: Settings },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const { theme } = useTheme()

  const sidebarVariants = {
    expanded: { width: 256 },
    collapsed: { width: 80 }
  }

  const itemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  }

  const getSidebarClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white border-gray-200 text-gray-900'
      case 'dark':
        return 'bg-gray-800 border-gray-700 text-white'
      case 'vibrant':
        return 'bg-white/10 backdrop-blur-lg border-white/20 text-white'
      default:
        return 'bg-white border-gray-200 text-gray-900'
    }
  }

  const getActiveItemClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
      case 'dark':
        return 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-400'
      case 'vibrant':
        return 'bg-white/20 text-white border-r-2 border-white animate-glow'
      default:
        return 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
    }
  }

  const getHoverClasses = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-50'
      case 'dark':
        return 'hover:bg-gray-700'
      case 'vibrant':
        return 'hover:bg-white/10'
      default:
        return 'hover:bg-gray-50'
    }
  }

  return (
    <motion.div
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 h-full border-r z-40",
        getSidebarClasses()
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-inherit">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-lg">Dashboard</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={onToggle}
          className={cn(
            "p-2 rounded-lg transition-colors duration-200",
            getHoverClasses()
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    isActive ? getActiveItemClasses() : getHoverClasses(),
                    "relative overflow-hidden"
                  )}
                >
                  {/* Active item glow effect for vibrant theme */}
                  {isActive && theme === 'vibrant' && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <Icon className="w-5 h-5 flex-shrink-0 relative z-10" />
                  
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span
                        variants={itemVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="ml-3 font-medium relative z-10"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 rounded-lg"
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "p-3 rounded-lg text-sm",
                theme === 'light' ? 'bg-gray-100' :
                theme === 'dark' ? 'bg-gray-700' :
                'bg-white/10'
              )}
            >
              <p className="font-medium">SaaS Dashboard</p>
              <p className={cn(
                "text-xs mt-1",
                theme === 'light' ? 'text-gray-500' :
                theme === 'dark' ? 'text-gray-400' :
                'text-white/70'
              )}>
                v1.0.0
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
