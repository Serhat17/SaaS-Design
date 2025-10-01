'use client'

/**
 * Reusable Data Table Component
 * Features: Sorting, searching, pagination, responsive design
 */

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronUp, 
  ChevronDown,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export interface Column<T> {
  key: keyof T | string
  header: string
  sortable?: boolean
  render?: (item: T) => React.ReactNode
  className?: string
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  searchable?: boolean
  searchPlaceholder?: string
  pageSize?: number
  className?: string
}

type SortDirection = 'asc' | 'desc' | null

export default function Table<T extends Record<string, any>>({
  data,
  columns,
  searchable = true,
  searchPlaceholder = "Search...",
  pageSize = 10,
  className
}: TableProps<T>) {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortKey, setSortKey] = useState<keyof T | string | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data

    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [data, searchQuery])

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }

      const aStr = String(aValue).toLowerCase()
      const bStr = String(bValue).toLowerCase()

      if (sortDirection === 'asc') {
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0
      } else {
        return aStr > bStr ? -1 : aStr < bStr ? 1 : 0
      }
    })
  }, [filteredData, sortKey, sortDirection])

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / pageSize)
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedData.slice(startIndex, startIndex + pageSize)
  }, [sortedData, currentPage, pageSize])

  const handleSort = (key: keyof T | string) => {
    if (sortKey === key) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortKey(null)
        setSortDirection(null)
      } else {
        setSortDirection('asc')
      }
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
    setCurrentPage(1)
  }

  const getSortIcon = (key: keyof T | string) => {
    if (sortKey !== key) return null
    
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 ml-1" />
    ) : (
      <ChevronDown className="w-4 h-4 ml-1" />
    )
  }

  const getTableClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white border-gray-200'
      case 'dark':
        return 'bg-gray-800 border-gray-700'
      case 'vibrant':
        return 'bg-white/10 backdrop-blur-lg border-white/20'
      default:
        return 'bg-white border-gray-200'
    }
  }

  const getHeaderClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-50 text-gray-700 border-gray-200'
      case 'dark':
        return 'bg-gray-700 text-gray-300 border-gray-600'
      case 'vibrant':
        return 'bg-white/5 text-white border-white/10'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const getRowClasses = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-50 border-gray-200 text-gray-900'
      case 'dark':
        return 'hover:bg-gray-700 border-gray-600 text-white'
      case 'vibrant':
        return 'hover:bg-white/5 border-white/10 text-white'
      default:
        return 'hover:bg-gray-50 border-gray-200 text-gray-900'
    }
  }

  const getPaginationClasses = (active: boolean) => {
    const baseClasses = "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
    
    if (active) {
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
          return `${baseClasses} text-gray-700 hover:bg-gray-100`
        case 'dark':
          return `${baseClasses} text-gray-300 hover:bg-gray-700`
        case 'vibrant':
          return `${baseClasses} text-white/80 hover:bg-white/10`
        default:
          return `${baseClasses} text-gray-700 hover:bg-gray-100`
      }
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search */}
      {searchable && (
        <div className="relative">
          <Search className={cn(
            "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4",
            theme === 'light' ? 'text-gray-400' :
            theme === 'dark' ? 'text-gray-500' :
            'text-white/50'
          )} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className={cn(
              "pl-10 pr-4 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                : theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white/10 border-white/20 text-white placeholder-white/50'
            )}
          />
        </div>
      )}

      {/* Table */}
      <div className={cn(
        "rounded-lg border overflow-hidden",
        getTableClasses()
      )}>
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Header */}
            <thead className={getHeaderClasses()}>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b",
                      column.sortable && "cursor-pointer select-none hover:bg-opacity-75",
                      column.className
                    )}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center">
                      {column.header}
                      {column.sortable && getSortIcon(column.key)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {paginatedData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={cn(
                    "transition-colors duration-200 border-b",
                    getRowClasses()
                  )}
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className={cn(
                        "px-6 py-4 whitespace-nowrap text-sm",
                        column.className
                      )}
                    >
                      {column.render ? column.render(item) : String(item[column.key])}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className={cn(
            "text-sm",
            theme === 'light' ? 'text-gray-700' :
            theme === 'dark' ? 'text-gray-300' :
            'text-white/80'
          )}>
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} results
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={cn(
                getPaginationClasses(false),
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={getPaginationClasses(currentPage === page)}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={cn(
                getPaginationClasses(false),
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
