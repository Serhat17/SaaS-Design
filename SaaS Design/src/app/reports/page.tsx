'use client'

/**
 * Reports Page
 * Features: Data table with export functionality, filtering, pagination
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download,
  FileText,
  Image as ImageIcon,
  RefreshCw,
  Filter
} from 'lucide-react'
import Card from '@/components/Card'
import Table, { Column } from '@/components/Table'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  initialTableData,
  generateTableData,
  TableRow
} from '@/utils/mockData'
import { cn } from '@/lib/utils'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function ReportsPage() {
  const { theme } = useTheme()
  const [tableData, setTableData] = useState(initialTableData)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const handleGenerateData = async () => {
    setIsGenerating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setTableData(generateTableData(50))
    
    setIsGenerating(false)
  }

  const handleExportPDF = async () => {
    setIsExporting(true)
    
    try {
      const element = document.getElementById('reports-table')
      if (!element) return

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('l', 'mm', 'a4') // landscape orientation
      
      const imgWidth = 280
      const pageHeight = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 10

      // Add title
      pdf.setFontSize(16)
      pdf.text('User Reports', 20, position)
      position += 15

      // Add image
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save('user-reports.pdf')
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleExportPNG = async () => {
    setIsExporting(true)
    
    try {
      const element = document.getElementById('reports-table')
      if (!element) return

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      })

      // Create download link
      const link = document.createElement('a')
      link.download = 'user-reports.png'
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const columns: Column<TableRow>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-xs font-medium">
              {item.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-medium">{item.name}</div>
            <div className={cn(
              "text-sm",
              theme === 'light' ? 'text-gray-500' :
              theme === 'dark' ? 'text-gray-400' :
              'text-white/60'
            )}>
              {item.email}
            </div>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case 'Active':
              return 'bg-green-100 text-green-800 border-green-200'
            case 'Inactive':
              return 'bg-red-100 text-red-800 border-red-200'
            case 'Pending':
              return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            default:
              return 'bg-gray-100 text-gray-800 border-gray-200'
          }
        }

        return (
          <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
            getStatusColor(item.status)
          )}>
            {item.status}
          </span>
        )
      }
    },
    {
      key: 'revenue',
      header: 'Revenue',
      sortable: true,
      render: (item) => (
        <span className="font-medium">
          ${item.revenue.toLocaleString()}
        </span>
      )
    },
    {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true
    },
    {
      key: 'lastActivity',
      header: 'Last Activity',
      sortable: true,
      render: (item) => (
        <span className={cn(
          "text-sm",
          theme === 'light' ? 'text-gray-600' :
          theme === 'dark' ? 'text-gray-400' :
          'text-white/80'
        )}>
          {item.lastActivity}
        </span>
      )
    }
  ]

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
            Reports
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
            Comprehensive data analysis and user management.
          </motion.p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExportPNG}
            disabled={isExporting}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
              theme === 'light' 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : theme === 'dark'
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-white/10 text-white hover:bg-white/15',
              isExporting && 'opacity-50 cursor-not-allowed'
            )}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Export PNG</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExportPDF}
            disabled={isExporting}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
              theme === 'light' 
                ? 'bg-green-600 text-white hover:bg-green-700'
                : theme === 'dark'
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-white/20 text-white hover:bg-white/30',
              isExporting && 'opacity-50 cursor-not-allowed'
            )}
          >
            <FileText className="w-4 h-4" />
            <span>Export PDF</span>
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

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Total Users', value: tableData.length, color: 'blue' },
          { label: 'Active Users', value: tableData.filter(u => u.status === 'Active').length, color: 'green' },
          { label: 'Total Revenue', value: `$${tableData.reduce((sum, u) => sum + u.revenue, 0).toLocaleString()}`, color: 'purple' },
          { label: 'Avg Revenue', value: `$${Math.round(tableData.reduce((sum, u) => sum + u.revenue, 0) / tableData.length).toLocaleString()}`, color: 'orange' }
        ].map((stat, index) => (
          <Card key={stat.label} hover3D={true}>
            <div className="text-center">
              <p className={cn(
                "text-sm font-medium",
                theme === 'light' ? 'text-gray-600' :
                theme === 'dark' ? 'text-gray-400' :
                'text-white/80'
              )}>
                {stat.label}
              </p>
              <p className={cn(
                "text-2xl font-bold mt-2",
                theme === 'light' ? 'text-gray-900' :
                theme === 'dark' ? 'text-white' :
                'text-white'
              )}>
                {stat.value}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        id="reports-table"
      >
        <Card title="User Data" subtitle="Complete user information and analytics">
          <Table
            data={tableData}
            columns={columns}
            searchable={true}
            searchPlaceholder="Search users..."
            pageSize={10}
          />
        </Card>
      </motion.div>
    </div>
  )
}
