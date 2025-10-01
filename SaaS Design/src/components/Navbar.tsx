'use client'

/**
 * Top Navigation Bar Component
 * Features: User controls, notifications, theme toggle, responsive design
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, 
  Sun, 
  Moon, 
  Palette,
  User,
  ChevronDown,
  Search,
  Menu
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onMobileMenuToggle: () => void
}

export default function Navbar({ onMobileMenuToggle }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [notifications] = useState(3) // Mock notification count

  const getNavbarClasses = () => {
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

  const getButtonClasses = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-100 text-gray-600'
      case 'dark':
        return 'hover:bg-gray-700 text-gray-300'
      case 'vibrant':
        return 'hover:bg-white/10 text-white/90'
      default:
        return 'hover:bg-gray-100 text-gray-600'
    }
  }

  const getThemeIcon = () => {
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-30 w-full border-b",
        getNavbarClasses()
      )}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Mobile menu & Search */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMobileMenuToggle}
            className={cn(
              "p-2 rounded-lg lg:hidden transition-colors duration-200",
              getButtonClasses()
            )}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className={cn(
                "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4",
                theme === 'light' ? 'text-gray-400' :
                theme === 'dark' ? 'text-gray-500' :
                'text-white/50'
              )} />
              <input
                type="text"
                placeholder="Search..."
                className={cn(
                  "pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
                  theme === 'light' 
                    ? 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                    : theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white/10 border-white/20 text-white placeholder-white/50'
                )}
              />
            </div>
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-lg transition-colors duration-200",
              getButtonClasses()
            )}
            title="Toggle theme"
          >
            {getThemeIcon()}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative p-2 rounded-lg transition-colors duration-200",
              getButtonClasses()
            )}
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
              >
                {notifications}
              </motion.span>
            )}
          </motion.button>

          {/* User menu */}
          <div className="relative">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={cn(
                "flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200",
                getButtonClasses()
              )}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block font-medium">John Doe</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>

            {/* User dropdown menu */}
            {showUserMenu && (
              <>
                {/* Overlay */}
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setShowUserMenu(false)}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className={cn(
                    "absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-20",
                    theme === 'light' 
                      ? 'bg-white border-gray-200'
                      : theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white/10 backdrop-blur-lg border-white/20'
                  )}
                >
                  <div className="py-2">
                    <div className={cn(
                      "px-4 py-2 text-sm border-b",
                      theme === 'light' ? 'text-gray-500 border-gray-200' :
                      theme === 'dark' ? 'text-gray-400 border-gray-700' :
                      'text-white/70 border-white/20'
                    )}>
                      john.doe@example.com
                    </div>
                    
                    {['Profile', 'Settings', 'Help', 'Sign out'].map((item) => (
                      <button
                        key={item}
                        className={cn(
                          "w-full text-left px-4 py-2 text-sm transition-colors duration-200",
                          theme === 'light' ? 'hover:bg-gray-100' :
                          theme === 'dark' ? 'hover:bg-gray-700' :
                          'hover:bg-white/10'
                        )}
                        onClick={() => setShowUserMenu(false)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
