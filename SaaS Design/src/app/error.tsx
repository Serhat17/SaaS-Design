'use client'

/**
 * Error Boundary Page
 * Features: Error display with retry functionality, theme-aware design
 */

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const { theme } = useTheme()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className={cn(
            "p-4 rounded-full",
            theme === 'light' ? 'bg-red-100' :
            theme === 'dark' ? 'bg-red-900/30' :
            'bg-white/10'
          )}>
            <AlertCircle className={cn(
              "w-12 h-12",
              theme === 'light' ? 'text-red-600' :
              theme === 'dark' ? 'text-red-400' :
              'text-white'
            )} />
          </div>
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
          Something went wrong!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={cn(
            "mb-2",
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/80'
          )}
        >
          We encountered an unexpected error. Please try again or return to the dashboard.
        </motion.p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={cn(
              "mt-4 p-4 rounded-lg text-left text-sm overflow-auto max-h-32",
              theme === 'light' ? 'bg-red-50 text-red-800' :
              theme === 'dark' ? 'bg-red-900/20 text-red-300' :
              'bg-white/10 text-white/90'
            )}
          >
            <strong>Error:</strong> {error.message}
            {error.digest && (
              <div className="mt-2">
                <strong>Digest:</strong> {error.digest}
              </div>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.button
            onClick={reset}
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
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
                theme === 'light' 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white/10 text-white hover:bg-white/15'
              )}
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Support Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm"
        >
          <p className={cn(
            theme === 'light' ? 'text-gray-500' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/60'
          )}>
            If this problem persists, please contact support.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
