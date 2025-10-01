'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Car, 
  Users, 
  Trophy, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react'
import { Hero3D } from '@/components/ui/Hero3D'

const stats = [
  { label: 'Bestehensquote', value: '94%', icon: Trophy },
  { label: 'Zufriedene Schüler', value: '2.500+', icon: Users },
  { label: 'Jahre Erfahrung', value: '20+', icon: Star },
  { label: 'Standorte', value: '3', icon: MapPin },
]

const services = [
  {
    title: 'Führerschein Klasse B',
    description: 'Der klassische PKW-Führerschein für alle ab 18 Jahren',
    icon: Car,
    features: ['Theorie & Praxis', 'Moderne Fahrzeuge', 'Erfahrene Fahrlehrer'],
    link: '/leistungen#klasse-b'
  },
  {
    title: 'Automatik B197',
    description: 'Lernen mit Automatik, fahren mit Schaltung',
    icon: CheckCircle,
    features: ['Einfacher Einstieg', 'Beide Getriebe', 'Zukunftssicher'],
    link: '/leistungen#b197'
  },
  {
    title: 'Intensivkurse',
    description: 'Schnell zum Führerschein in nur 2-3 Wochen',
    icon: Clock,
    features: ['Kompakte Ausbildung', 'Feste Termine', 'Garantierte Plätze'],
    link: '/leistungen#intensiv'
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Super Fahrschule! Habe beim ersten Mal bestanden. Die Fahrlehrer sind sehr geduldig und erklären alles verständlich.',
    rating: 5,
    course: 'Klasse B'
  },
  {
    name: 'Michael K.',
    text: 'Der Intensivkurs war perfekt für mich. In 3 Wochen hatte ich meinen Führerschein. Sehr professionell!',
    rating: 5,
    course: 'Intensivkurs'
  },
  {
    name: 'Lisa T.',
    text: 'Moderne Fahrzeuge und top Fahrlehrer. Kann die Fahrschule Gerlach nur weiterempfehlen!',
    rating: 5,
    course: 'B197 Automatik'
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-light via-white to-brand-light py-12 md:py-0">
        <div className="absolute inset-0 bg-brand-gradient opacity-5" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
                Ihr Weg zum
                <span className="bg-brand-gradient bg-clip-text text-transparent"> Führerschein</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Professionelle Fahrausbildung mit über 20 Jahren Erfahrung. 
                Moderne Fahrzeuge, erfahrene Fahrlehrer und eine Bestehensquote von 94%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link href="/kontakt" className="btn-primary">
                  Jetzt anmelden
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                
                <Link href="tel:+49123456789" className="btn-secondary">
                  <Phone className="mr-2" size={20} />
                  Beratung anrufen
                </Link>
              </div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="text-white" size={20} />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-brand-dark">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-first lg:order-last"
            >
              <Hero3D className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 md:top-10 md:right-10 bg-white rounded-2xl p-3 md:p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-medium">94% Bestehensquote</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-brand-gradient rounded-2xl p-3 md:p-4 text-white shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs md:text-sm font-medium">Nächster Kurs</div>
                <div className="text-sm md:text-lg font-bold">Montag 18:00</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der klassischen Fahrausbildung bis zum Intensivkurs – 
              wir haben das passende Angebot für Sie.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.link}
                  className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-accent transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Das sagen unsere Schüler
            </h2>
            <p className="text-xl text-gray-600">
              Über 2.500 zufriedene Fahrschüler vertrauen uns bereits
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.course}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-gradient text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihren Führerschein?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vereinbaren Sie noch heute einen kostenlosen Beratungstermin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-white text-brand-primary font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Termin vereinbaren
              </Link>
              
              <Link 
                href="/preise" 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors"
              >
                Preise ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
