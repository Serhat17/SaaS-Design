'use client'

/**
 * Theme Switcher Component
 * Features: Animated toggle switches, theme previews, smooth transitions
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Palette } from 'lucide-react'
import { useTheme, Theme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface ThemeSwitcherProps {
  showLabels?: boolean
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export default function ThemeSwitcher({ 
  showLabels = true, 
  orientation = 'horizontal',
  className 
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()

  const themes: { value: Theme; label: string; icon: React.ReactNode; description: string }[] = [
    {
      value: 'light',
      label: 'Light',
      icon: <Sun className="w-4 h-4" />,
      description: 'Clean and bright interface'
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <Moon className="w-4 h-4" />,
      description: 'Easy on the eyes'
    },
    {
      value: 'vibrant',
      label: 'Vibrant',
      icon: <Palette className="w-4 h-4" />,
      description: 'Colorful and dynamic'
    }
  ]

  const getThemeColors = (themeValue: Theme) => {
    switch (themeValue) {
      case 'light':
        return {
          bg: 'bg-white',
          text: 'text-gray-900',
          border: 'border-gray-200',
          hover: 'hover:bg-gray-50'
        }
      case 'dark':
        return {
          bg: 'bg-gray-800',
          text: 'text-white',
          border: 'border-gray-700',
          hover: 'hover:bg-gray-700'
        }
      case 'vibrant':
        return {
          bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
          text: 'text-white',
          border: 'border-purple-400',
          hover: 'hover:from-purple-600 hover:to-pink-600'
        }
      default:
        return {
          bg: 'bg-white',
          text: 'text-gray-900',
          border: 'border-gray-200',
          hover: 'hover:bg-gray-50'
        }
    }
  }

  const getCurrentThemeColors = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-100 text-gray-900'
      case 'dark':
        return 'bg-gray-800 text-white'
      case 'vibrant':
        return 'bg-white/10 backdrop-blur-lg text-white'
      default:
        return 'bg-gray-100 text-gray-900'
    }
  }

  return (
    <div className={cn(
      "p-4 rounded-lg",
      getCurrentThemeColors(),
      className
    )}>
      {showLabels && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">Theme</h3>
          <p className={cn(
            "text-sm",
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/80'
          )}>
            Choose your preferred appearance
          </p>
        </div>
      )}

      <div className={cn(
        "grid gap-3",
        orientation === 'horizontal' ? 'grid-cols-3' : 'grid-cols-1'
      )}>
        {themes.map((themeOption) => {
          const isActive = theme === themeOption.value
          const colors = getThemeColors(themeOption.value)

          return (
            <motion.button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative p-4 rounded-lg border-2 transition-all duration-300 text-left",
                isActive 
                  ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent" 
                  : "hover:border-blue-300",
                colors.bg,
                colors.text,
                colors.border,
                !isActive && colors.hover
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTheme"
                  className="absolute inset-0 rounded-lg bg-blue-500/10 border-2 border-blue-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  {themeOption.icon}
                  <span className="font-medium">{themeOption.label}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </motion.div>
                  )}
                </div>
                
                {showLabels && (
                  <p className={cn(
                    "text-xs opacity-80",
                    themeOption.value === 'vibrant' ? 'text-white/80' : 'inherit'
                  )}>
                    {themeOption.description}
                  </p>
                )}

                {/* Theme preview */}
                <div className="mt-3 flex space-x-1">
                  {themeOption.value === 'light' && (
                    <>
                      <div className="w-4 h-2 bg-gray-100 rounded-sm" />
                      <div className="w-4 h-2 bg-blue-500 rounded-sm" />
                      <div className="w-4 h-2 bg-gray-300 rounded-sm" />
                    </>
                  )}
                  {themeOption.value === 'dark' && (
                    <>
                      <div className="w-4 h-2 bg-gray-700 rounded-sm" />
                      <div className="w-4 h-2 bg-blue-400 rounded-sm" />
                      <div className="w-4 h-2 bg-gray-600 rounded-sm" />
                    </>
                  )}
                  {themeOption.value === 'vibrant' && (
                    <>
                      <div className="w-4 h-2 bg-purple-400 rounded-sm" />
                      <div className="w-4 h-2 bg-pink-400 rounded-sm" />
                      <div className="w-4 h-2 bg-blue-400 rounded-sm" />
                    </>
                  )}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Theme description */}
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-3 rounded-lg bg-opacity-50"
        style={{
          backgroundColor: theme === 'light' ? '#f8fafc' :
                         theme === 'dark' ? '#1f2937' :
                         'rgba(255,255,255,0.1)'
        }}
      >
        <div className="flex items-center space-x-2">
          {themes.find(t => t.value === theme)?.icon}
          <span className="text-sm font-medium">
            {themes.find(t => t.value === theme)?.label} Theme Active
          </span>
        </div>
        <p className={cn(
          "text-xs mt-1",
          theme === 'light' ? 'text-gray-600' :
          theme === 'dark' ? 'text-gray-400' :
          'text-white/70'
        )}>
          {themes.find(t => t.value === theme)?.description}
        </p>
      </motion.div>
    </div>
  )
}

/**
 * Compact Theme Toggle for navbars
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />
      case 'dark':
        return <Moon className="w-5 h-5" />
      case 'vibrant':
        return <Palette className="w-5 h-5" />
      default:
        return <Sun className="w-5 h-5" />
    }
  }

  const getButtonClass = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      case 'dark':
        return 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      case 'vibrant':
        return 'bg-white/10 text-white hover:bg-white/15'
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-lg transition-all duration-200",
        getButtonClass()
      )}
      title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'vibrant' : 'light'} theme`}
    >
      {getIcon()}
    </motion.button>
  )
}
