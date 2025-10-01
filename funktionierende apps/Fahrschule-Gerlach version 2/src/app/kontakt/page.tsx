'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  Car,
  AlertCircle
} from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/utils'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(10, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  service: z.string().min(1, 'Bitte wählen Sie eine Leistung aus'),
  location: z.string().min(1, 'Bitte wählen Sie einen Standort aus'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen haben'),
  privacy: z.boolean().refine(val => val === true, 'Sie müssen der Datenschutzerklärung zustimmen')
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Führerschein Klasse B',
  'Automatik B197',
  'Anhängerführerschein B96',
  'Intensivkurs',
  'Aufbauseminar (ASF)',
  'Fahrsicherheitstraining',
  'Beratung',
  'Sonstiges'
]

const locations = [
  'Hauptstandort Musterstadt',
  'Filiale Beispielstadt',
  'Filiale Testdorf'
]

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '0123 456 789',
    link: 'tel:+49123456789',
    description: 'Mo-Fr 9:00-18:00 Uhr'
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'info@fahrschule-gerlach.de',
    link: 'mailto:info@fahrschule-gerlach.de',
    description: 'Antwort innerhalb 24h'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: '0123 456 789',
    link: generateWhatsAppLink('+49123456789', 'Hallo, ich interessiere mich für eine Fahrausbildung.'),
    description: 'Schnelle Antwort'
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Hauptstraße 123, 12345 Musterstadt',
    link: 'https://maps.google.com/?q=Hauptstraße+123+12345+Musterstadt',
    description: 'Kostenlose Parkplätze'
  }
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

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-brand-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Vielen Dank für Ihre Nachricht!
          </h2>
          <p className="text-gray-600 mb-6">
            Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Weitere Nachricht senden
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-light via-white to-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Kontakt &
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Beratung</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie sich anmelden? 
              Wir sind für Sie da und beraten Sie gerne kostenlos und unverbindlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center group"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {info.title}
                </h3>
                
                <p className="text-brand-primary font-semibold mb-2">
                  {info.content}
                </p>
                
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Kostenlose Beratung anfragen
              </h2>
              
              <p className="text-gray-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen. 
                Alle Angaben werden vertraulich behandelt.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Kostenlose Erstberatung</h4>
                    <p className="text-sm text-gray-600">Unverbindliche Beratung zu allen Führerscheinklassen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Individuelle Angebote</h4>
                    <p className="text-sm text-gray-600">Maßgeschneiderte Pakete für Ihre Bedürfnisse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Schnelle Antwort</h4>
                    <p className="text-sm text-gray-600">Rückmeldung innerhalb von 24 Stunden</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Vorname *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        {...register('firstName')}
                        type="text"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Nachname *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        {...register('lastName')}
                        type="text"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Ihr Nachname"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      E-Mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        {...register('email')}
                        type="email"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="ihre@email.de"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        {...register('phone')}
                        type="tel"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="0123 456 789"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service and Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Gewünschte Leistung *
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        {...register('service')}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors appearance-none bg-white ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Bitte wählen...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Standort *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        {...register('location')}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors appearance-none bg-white ${
                          errors.location ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Bitte wählen...</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    {...register('privacy')}
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Ich stimme der{' '}
                    <a href="/datenschutz" className="text-brand-primary hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu und bin damit einverstanden, dass meine Daten zur Bearbeitung 
                    meiner Anfrage gespeichert werden. *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.privacy.message}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-8">
              Öffnungszeiten
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-dark mb-4">Bürozeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-semibold">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="text-gray-500">Geschlossen</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Car className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-dark mb-4">Fahrstunden</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span className="font-semibold">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-semibold">8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="font-semibold">10:00 - 16:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Calendar className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-dark mb-4">Theorieunterricht</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Montag & Mittwoch</span>
                    <span className="font-semibold">18:30 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-semibold">10:00 - 11:30</span>
                  </div>
                  <div className="text-center text-gray-600 mt-4">
                    <p>Intensivkurse nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
