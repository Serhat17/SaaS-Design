'use client'

/**
 * 404 Not Found Page
 * Features: Animated error display, navigation back to dashboard
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function NotFound() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-8xl font-bold mb-4",
            theme === 'light' ? 'text-blue-600' :
            theme === 'dark' ? 'text-blue-400' :
            'text-white'
          )}
        >
          404
        </motion.div>

        {/* Error Message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={cn(
            "text-2xl font-bold mb-2",
            theme === 'light' ? 'text-gray-900' :
            theme === 'dark' ? 'text-white' :
            'text-white'
          )}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={cn(
            "mb-8",
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/80'
          )}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
                theme === 'light' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              )}
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className={cn(
              "flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
              theme === 'light' 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : theme === 'dark'
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-white/10 text-white hover:bg-white/15'
            )}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={cn(
                "w-2 h-2 rounded-full",
                theme === 'light' ? 'bg-blue-600' :
                theme === 'dark' ? 'bg-blue-400' :
                'bg-white'
              )}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
