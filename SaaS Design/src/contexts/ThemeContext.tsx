'use client'

/**
 * Theme Context Provider for managing application themes
 * Supports Light, Dark, and Vibrant themes with smooth transitions
 */

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'vibrant'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('dashboard-theme') as Theme
    if (savedTheme && ['light', 'dark', 'vibrant'].includes(savedTheme)) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  // Save theme to localStorage and apply CSS classes
  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('dashboard-theme', theme)
    
    // Remove all theme classes first
    document.documentElement.classList.remove('light', 'dark', 'vibrant')
    
    // Add current theme class
    document.documentElement.classList.add(theme)
    
    // Add dark class for Tailwind if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'vibrant']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

/**
 * Get theme-specific CSS classes
 */
export function getThemeClasses(theme: Theme) {
  const baseClasses = 'transition-all duration-400 ease-in-out'
  
  switch (theme) {
    case 'light':
      return `${baseClasses} bg-gray-50 text-gray-900`
    case 'dark':
      return `${baseClasses} bg-gray-900 text-white`
    case 'vibrant':
      return `${baseClasses} bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white`
    default:
      return baseClasses
  }
}
