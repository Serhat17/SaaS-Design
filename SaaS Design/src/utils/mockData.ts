/**
 * Mock data utilities for generating realistic dashboard data
 * Used for demonstration and development purposes
 */

export interface KPIData {
  revenue: number
  activeUsers: number
  growth: number
  conversionRate: number
}

export interface ChartDataPoint {
  name: string
  value: number
  date?: string
}

export interface TableRow {
  id: string
  name: string
  email: string
  status: 'Active' | 'Inactive' | 'Pending'
  revenue: number
  joinDate: string
  lastActivity: string
}

/**
 * Generate random KPI data with realistic values
 */
export function generateKPIData(): KPIData {
  return {
    revenue: Math.floor(Math.random() * 500000) + 100000,
    activeUsers: Math.floor(Math.random() * 10000) + 1000,
    growth: Math.round((Math.random() * 30 + 5) * 10) / 10,
    conversionRate: Math.round((Math.random() * 8 + 2) * 10) / 10,
  }
}

/**
 * Generate revenue chart data for the last 12 months
 */
export function generateRevenueData(): ChartDataPoint[] {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  
  return months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 50000) + 20000,
    date: month
  }))
}

/**
 * Generate product performance data
 */
export function generateProductData(): ChartDataPoint[] {
  const products = [
    'Product A', 'Product B', 'Product C', 
    'Product D', 'Product E'
  ]
  
  return products.map(product => ({
    name: product,
    value: Math.floor(Math.random() * 1000) + 100
  }))
}

/**
 * Generate user distribution data for pie chart
 */
export function generateUserDistribution(): ChartDataPoint[] {
  return [
    { name: 'Desktop', value: Math.floor(Math.random() * 50) + 30 },
    { name: 'Mobile', value: Math.floor(Math.random() * 40) + 25 },
    { name: 'Tablet', value: Math.floor(Math.random() * 25) + 10 },
  ]
}

/**
 * Generate table data with realistic user information
 */
export function generateTableData(count: number = 50): TableRow[] {
  const statuses: TableRow['status'][] = ['Active', 'Inactive', 'Pending']
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Chris', 'Emily', 'Alex', 'Maria']
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
  
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    
    return {
      id: `user-${i + 1}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      revenue: Math.floor(Math.random() * 10000) + 500,
      joinDate: new Date(
        Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
      ).toLocaleDateString(),
      lastActivity: new Date(
        Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
      ).toLocaleDateString(),
    }
  })
}

/**
 * Generate real-time metrics that change over time
 */
export function generateRealTimeMetrics() {
  return {
    currentVisitors: Math.floor(Math.random() * 500) + 100,
    pageViews: Math.floor(Math.random() * 5000) + 1000,
    bounceRate: Math.round((Math.random() * 20 + 30) * 10) / 10,
    avgSessionDuration: Math.floor(Math.random() * 300) + 120, // seconds
  }
}

/**
 * Initial mock data for first load
 */
export const initialKPIData: KPIData = {
  revenue: 324567,
  activeUsers: 4892,
  growth: 12.3,
  conversionRate: 4.7,
}

export const initialRevenueData = generateRevenueData()
export const initialProductData = generateProductData()
export const initialUserDistribution = generateUserDistribution()
export const initialTableData = generateTableData()
