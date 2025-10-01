'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Car, 
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Euro,
  Calendar,
  BookOpen,
  Settings,
  Zap,
  Shield,
  Target,
  Truck
} from 'lucide-react'

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: any
  features: string[]
  duration: string
  minAge: number
  price: {
    base: number
    includes: string[]
    additional?: { item: string; price: number }[]
  }
  requirements: string[]
  process: string[]
  popular?: boolean
  new?: boolean
}

const services: Service[] = [
  {
    id: 'klasse-b',
    title: 'Führerschein Klasse B',
    subtitle: 'Der klassische PKW-Führerschein',
    description: 'Die Standardausbildung für Personenkraftwagen bis 3,5t. Perfekt für alle, die mobil und unabhängig werden möchten.',
    icon: Car,
    features: [
      'PKW bis 3,5t zulässige Gesamtmasse',
      'Anhänger bis 750kg',
      'Theorieunterricht 14 Doppelstunden',
      'Praktische Ausbildung individuell',
      'Sonderfahrten: 12 Stunden',
      'Moderne Fahrzeuge'
    ],
    duration: '3-6 Monate',
    minAge: 18,
    price: {
      base: 1890,
      includes: [
        'Theorieunterricht (14 Doppelstunden)',
        'Grundausbildung',
        'Sonderfahrten (12 Stunden)',
        'Vorstellung zur Prüfung'
      ],
      additional: [
        { item: 'Zusätzliche Fahrstunde', price: 65 },
        { item: 'Prüfungsgebühr TÜV', price: 116.93 },
        { item: 'Erste-Hilfe-Kurs', price: 50 }
      ]
    },
    requirements: [
      'Mindestalter 18 Jahre (17 Jahre bei BF17)',
      'Sehtest',
      'Erste-Hilfe-Kurs',
      'Biometrisches Passfoto',
      'Führungszeugnis'
    ],
    process: [
      'Anmeldung und Beratung',
      'Theorieunterricht besuchen',
      'Theorieprüfung ablegen',
      'Praktische Fahrstunden',
      'Praktische Prüfung'
    ],
    popular: true
  },
  {
    id: 'b197',
    title: 'Automatik B197',
    subtitle: 'Lernen mit Automatik, fahren mit Schaltung',
    description: 'Die moderne Alternative: Entspannt lernen mit Automatikgetriebe, aber trotzdem berechtigt, Schaltfahrzeuge zu fahren.',
    icon: Zap,
    features: [
      'Ausbildung hauptsächlich mit Automatik',
      '10 Fahrstunden mit Schaltgetriebe',
      'Testfahrt mit Fahrlehrer',
      'Berechtigung für beide Getriebearten',
      'Entspannteres Lernen',
      'Zukunftssicher'
    ],
    duration: '3-5 Monate',
    minAge: 18,
    price: {
      base: 1990,
      includes: [
        'Theorieunterricht (14 Doppelstunden)',
        'Grundausbildung mit Automatik',
        '10 Schaltstunden',
        'Testfahrt',
        'Sonderfahrten'
      ],
      additional: [
        { item: 'Zusätzliche Automatikstunde', price: 60 },
        { item: 'Zusätzliche Schaltstunde', price: 65 },
        { item: 'Prüfungsgebühr TÜV', price: 116.93 }
      ]
    },
    requirements: [
      'Mindestalter 18 Jahre',
      'Sehtest',
      'Erste-Hilfe-Kurs',
      'Biometrisches Passfoto',
      'Führungszeugnis'
    ],
    process: [
      'Anmeldung und Beratung',
      'Theorieunterricht',
      'Theorieprüfung',
      'Automatik-Fahrstunden',
      'Schaltstunden (10 Stunden)',
      'Testfahrt',
      'Praktische Prüfung'
    ],
    new: true
  },
  {
    id: 'b96',
    title: 'Anhängerführerschein B96',
    subtitle: 'Für schwerere Anhänger',
    description: 'Erweitern Sie Ihren Klasse B Führerschein um die Berechtigung für Anhänger über 750kg bis zu einer Gesamtmasse von 4,25t.',
    icon: Truck,
    features: [
      'Anhänger 750kg - 3,5t',
      'Gesamtmasse bis 4,25t',
      'Nur praktische Ausbildung',
      'Keine Prüfung erforderlich',
      'Eintragung in Führerschein',
      'Ideal für Wohnwagen/Anhänger'
    ],
    duration: '1 Tag',
    minAge: 18,
    price: {
      base: 390,
      includes: [
        'Theoretische Unterweisung (2,5 Stunden)',
        'Praktische Übungen (3,5 Stunden)',
        'Fahrstunden (1 Stunde)',
        'Bescheinigung'
      ]
    },
    requirements: [
      'Führerschein Klasse B',
      'Mindestalter 18 Jahre',
      'Gültiger Personalausweis'
    ],
    process: [
      'Anmeldung',
      'Theoretische Unterweisung',
      'Praktische Übungen',
      'Fahrstunde',
      'Bescheinigung erhalten'
    ]
  },
  {
    id: 'intensivkurs',
    title: 'Intensivkurs',
    subtitle: 'Schnell zum Führerschein',
    description: 'In nur 2-3 Wochen zum Führerschein! Perfekt für alle, die schnell mobil werden müssen oder die Ferien nutzen möchten.',
    icon: Clock,
    features: [
      'Führerschein in 2-3 Wochen',
      'Kompakter Theorieunterricht',
      'Tägliche Fahrstunden',
      'Feste Termine',
      'Kleine Gruppen',
      'Garantierte Plätze'
    ],
    duration: '2-3 Wochen',
    minAge: 18,
    price: {
      base: 2290,
      includes: [
        'Kompakter Theorieunterricht',
        'Grundausbildung',
        'Sonderfahrten',
        'Prüfungsvorbereitung',
        'Vorstellung zur Prüfung'
      ],
      additional: [
        { item: 'Zusätzliche Fahrstunde', price: 70 },
        { item: 'Express-Aufschlag', price: 200 }
      ]
    },
    requirements: [
      'Mindestalter 18 Jahre',
      'Alle Unterlagen vorab',
      'Flexibilität für tägliche Termine',
      'Sehtest und Erste-Hilfe-Kurs'
    ],
    process: [
      'Voranmeldung mit Unterlagen',
      'Kompakter Theorieunterricht (1 Woche)',
      'Theorieprüfung',
      'Intensive Fahrstunden (1-2 Wochen)',
      'Praktische Prüfung'
    ]
  },
  {
    id: 'aufbauseminar',
    title: 'Aufbauseminar (ASF)',
    subtitle: 'Für Fahranfänger nach Verkehrsverstößen',
    description: 'Pflichtveranstaltung für Fahranfänger in der Probezeit nach schwerwiegenden oder wiederholten Verkehrsverstößen.',
    icon: Shield,
    features: [
      'Pflichtveranstaltung in Probezeit',
      '4 Gruppensitzungen à 135 Min',
      '1 Beobachtungsfahrt (30 Min)',
      'Verkehrspädagogische Beratung',
      'Erfahrungsaustausch',
      'Zertifizierte Moderatoren'
    ],
    duration: '4 Wochen',
    minAge: 18,
    price: {
      base: 450,
      includes: [
        '4 Gruppensitzungen',
        '1 Beobachtungsfahrt',
        'Teilnahmebescheinigung',
        'Pädagogische Beratung'
      ]
    },
    requirements: [
      'Anordnung durch Führerscheinstelle',
      'Gültiger Führerschein',
      'Teilnahme an allen Terminen'
    ],
    process: [
      'Anmeldung mit Anordnung',
      '4 Gruppensitzungen',
      'Beobachtungsfahrt',
      'Teilnahmebescheinigung',
      'Weiterleitung an Behörde'
    ]
  },
  {
    id: 'fahrsicherheit',
    title: 'Fahrsicherheitstraining',
    subtitle: 'Sicherheit durch Training',
    description: 'Verbessern Sie Ihre Fahrkünste und lernen Sie, kritische Situationen zu meistern. Für mehr Sicherheit im Straßenverkehr.',
    icon: Target,
    features: [
      'Gefahrensituationen meistern',
      'Bremstraining',
      'Ausweichmanöver',
      'Fahrzeugbeherrschung',
      'Theoretische Grundlagen',
      'Praktische Übungen'
    ],
    duration: '1 Tag',
    minAge: 18,
    price: {
      base: 189,
      includes: [
        'Theoretische Einweisung',
        'Praktische Übungen',
        'Professionelle Anleitung',
        'Teilnahmebescheinigung'
      ]
    },
    requirements: [
      'Gültiger Führerschein',
      'Mindestalter 18 Jahre',
      'Eigenes Fahrzeug oder Mietfahrzeug'
    ],
    process: [
      'Anmeldung zum Training',
      'Theoretische Einweisung',
      'Praktische Übungen',
      'Auswertung und Tipps',
      'Teilnahmebescheinigung'
    ]
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

export default function LeistungenPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'pricing'>('overview')

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
              Unsere
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Leistungen</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Von der klassischen Fahrausbildung bis zu speziellen Kursen – 
              wir bieten das komplette Spektrum für Ihre Mobilität. 
              Transparent, professionell und mit garantiertem Erfolg.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">6</div>
                <div className="text-sm text-gray-600">Führerscheinklassen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">94%</div>
                <div className="text-sm text-gray-600">Bestehensquote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">15</div>
                <div className="text-sm text-gray-600">Fahrlehrer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">3</div>
                <div className="text-sm text-gray-600">Standorte</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {service.popular && (
                    <span className="bg-brand-gradient text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Beliebt
                    </span>
                  )}
                  {service.new && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Neu
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-primary font-semibold mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Dauer:</span>
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Ab:</span>
                      <span className="font-semibold">{service.minAge} Jahre</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Preis ab:</span>
                      <span className="text-2xl font-bold text-brand-primary">
                        {service.price.base}€
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Mehr Details</span>
                    <ArrowRight className="text-brand-primary" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-brand-light to-brand-primary/10 p-6">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ×
              </button>

              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-brand-gradient rounded-2xl flex items-center justify-center">
                  <selectedService.icon className="text-white" size={40} />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-brand-primary font-semibold text-lg">
                    {selectedService.subtitle}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-600">Dauer: {selectedService.duration}</span>
                    <span className="text-sm text-gray-600">Ab {selectedService.minAge} Jahre</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b">
              <div className="flex space-x-8 px-6">
                {[
                  { key: 'overview', label: 'Übersicht', icon: BookOpen },
                  { key: 'process', label: 'Ablauf', icon: Settings },
                  { key: 'pricing', label: 'Preise', icon: Euro }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as any)}
                    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                      activeTab === key
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-600 hover:text-brand-primary'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-4">Leistungen & Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="text-brand-primary flex-shrink-0" size={16} />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-4">Voraussetzungen</h3>
                    <ul className="space-y-2">
                      {selectedService.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-6">So läuft's ab</h3>
                  <div className="space-y-4">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="pt-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="space-y-6">
                  <div className="bg-brand-light rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-brand-dark">Grundpreis</h3>
                      <div className="text-3xl font-bold text-brand-primary">
                        {selectedService.price.base}€
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-brand-dark mb-3">Im Preis enthalten:</h4>
                    <ul className="space-y-2">
                      {selectedService.price.includes.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedService.price.additional && (
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-4">Zusätzliche Kosten:</h4>
                      <div className="space-y-3">
                        {selectedService.price.additional.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{item.item}</span>
                            <span className="font-semibold">{item.price}€</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Wichtiger Hinweis</h4>
                        <p className="text-yellow-700 text-sm">
                          Die angegebenen Preise sind Grundpreise. Je nach individuellem Lernfortschritt 
                          können zusätzliche Fahrstunden erforderlich sein. Gerne erstellen wir Ihnen 
                          ein individuelles Angebot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="btn-primary flex-1 text-center"
                  onClick={() => setSelectedService(null)}
                >
                  <Calendar className="mr-2" size={20} />
                  Jetzt anmelden
                </Link>
                <Link
                  href="/preise"
                  className="btn-secondary flex-1 text-center"
                  onClick={() => setSelectedService(null)}
                >
                  Alle Preise ansehen
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
              Welcher Führerschein passt zu Ihnen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Lassen Sie sich kostenlos beraten und finden Sie das passende Angebot
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-white text-brand-primary font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Users className="mr-2" size={20} />
                Kostenlose Beratung
              </Link>
              
              <Link 
                href="/preise" 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors"
              >
                Preise vergleichen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
