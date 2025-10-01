'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Das Team', href: '/team' },
  { name: 'Fahrzeuge', href: '/fahrzeuge' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Lehrplan', href: '/lehrplan' },
  { name: 'Preise', href: '/preise' },
  { name: 'Standorte', href: '/standorte' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-brand-dark to-gray-800 text-white py-3 text-sm border-b border-brand-primary/20">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+49123456789" 
              className="flex items-center space-x-2 hover:text-brand-primary transition-all duration-300 hover:scale-105"
            >
              <Phone size={16} className="text-brand-primary" />
              <span className="font-medium">0123 456 789</span>
            </a>
            <a 
              href="mailto:info@fahrschule-gerlach.de" 
              className="flex items-center space-x-2 hover:text-brand-primary transition-all duration-300 hover:scale-105"
            >
              <Mail size={16} className="text-brand-primary" />
              <span className="font-medium hidden sm:inline">info@fahrschule-gerlach.de</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-300 hidden md:flex">
              <MapPin size={16} className="text-brand-primary" />
              <span className="font-medium">Region Gerlach</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2 text-gray-300">
            <Clock size={16} className="text-brand-primary" />
            <span className="font-medium">Mo-Fr 9:00-18:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={cn(
          'sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-500 border-b',
          isScrolled 
            ? 'shadow-xl py-3 border-gray-200/50' 
            : 'py-5 border-transparent shadow-sm'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-2xl">FG</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  Fahrschule Gerlach
                </h1>
                <p className="text-sm text-gray-600 font-medium">Ihre Fahrschule in der Region</p>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-brand-primary/10',
                    pathname === item.href
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-brand-dark hover:text-brand-primary'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"
                      layoutId="activeTab"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>


            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-brand-primary/10 transition-all duration-300 group"
            >
              <div className="relative w-6 h-6">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute w-6 h-0.5 bg-brand-dark group-hover:bg-brand-primary transition-colors duration-300"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-6 h-0.5 bg-brand-dark group-hover:bg-brand-primary transition-colors duration-300 top-2"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute w-6 h-0.5 bg-brand-dark group-hover:bg-brand-primary transition-colors duration-300 top-4"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
            >
              <div className="container-custom py-6">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block px-4 py-3 font-semibold rounded-xl transition-all duration-300',
                          pathname === item.href
                            ? 'text-brand-primary bg-brand-primary/10'
                            : 'text-brand-dark hover:text-brand-primary hover:bg-brand-primary/10'
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
