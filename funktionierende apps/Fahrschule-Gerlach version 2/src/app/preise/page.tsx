'use client'

import { motion } from 'framer-motion'
import { 
  Euro, 
  Car, 
  Clock, 
  CheckCircle, 
  Users, 
  Calendar,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Phone
} from 'lucide-react'
import Link from 'next/link'

const pakete = [
  {
    name: "Basis Paket",
    preis: 1299,
    beliebt: false,
    beschreibung: "Perfekt für den Einstieg",
    leistungen: [
      "Theorieunterricht (14 Stunden)",
      "Grundfahrausbildung",
      "12 Sonderfahrten",
      "Lehrmaterial",
      "Prüfungsanmeldung",
      "1 Theorieprüfung inklusive",
      "1 Praxisprüfung inklusive"
    ],
    extras: [
      "Moderne Fahrzeuge",
      "Erfahrene Fahrlehrer",
      "Flexible Termine"
    ]
  },
  {
    name: "Komfort Paket",
    preis: 1599,
    beliebt: true,
    beschreibung: "Unser Bestseller mit Extras",
    leistungen: [
      "Theorieunterricht (14 Stunden)",
      "Grundfahrausbildung",
      "12 Sonderfahrten",
      "Premium Lehrmaterial",
      "Prüfungsanmeldung",
      "2 Theorieprüfungen inklusive",
      "2 Praxisprüfungen inklusive",
      "Online-Lernportal",
      "Simulator-Training (2 Stunden)"
    ],
    extras: [
      "Neueste Fahrzeuge",
      "Top Fahrlehrer",
      "Priorität bei Terminen",
      "Kostenlose Nachschulung"
    ]
  },
  {
    name: "Premium Paket",
    preis: 1899,
    beliebt: false,
    beschreibung: "Rundum-sorglos mit Garantie",
    leistungen: [
      "Theorieunterricht (14 Stunden)",
      "Grundfahrausbildung",
      "12 Sonderfahrten",
      "Premium Lehrmaterial",
      "Prüfungsanmeldung",
      "Unbegrenzte Theorieprüfungen",
      "Unbegrenzte Praxisprüfungen",
      "Online-Lernportal Premium",
      "Simulator-Training (4 Stunden)",
      "Bestehensgarantie"
    ],
    extras: [
      "Luxus Fahrzeuge",
      "Meisterfahrlehrer",
      "Express-Termine",
      "Geld-zurück-Garantie",
      "Lebenslanger Support"
    ]
  }
]

const einzelpreise = [
  {
    kategorie: "Fahrstunden",
    items: [
      { name: "Fahrstunde (45 Min.)", preis: 65 },
      { name: "Sonderfahrt Überland", preis: 75 },
      { name: "Sonderfahrt Autobahn", preis: 75 },
      { name: "Sonderfahrt Nachtfahrt", preis: 75 }
    ]
  },
  {
    kategorie: "Theorie",
    items: [
      { name: "Theorieunterricht", preis: 0, note: "kostenlos" },
      { name: "Lehrmaterial Basis", preis: 89 },
      { name: "Lehrmaterial Premium", preis: 149 },
      { name: "Online-Lernportal", preis: 49 }
    ]
  },
  {
    kategorie: "Prüfungen",
    items: [
      { name: "Theorieprüfung", preis: 25 },
      { name: "Praxisprüfung", preis: 150 },
      { name: "Prüfungsfahrt", preis: 75 },
      { name: "Wiederholungsprüfung", preis: 25 }
    ]
  },
  {
    kategorie: "Extras",
    items: [
      { name: "Simulator-Training (1 Std.)", preis: 35 },
      { name: "Intensivkurs Aufpreis", preis: 299 },
      { name: "Automatik B197", preis: 199 },
      { name: "Erste-Hilfe-Kurs", preis: 49 }
    ]
  }
]

const finanzierung = [
  {
    name: "Ratenzahlung",
    icon: Calendar,
    beschreibung: "3-12 Monate zinsfrei",
    details: ["Keine Anzahlung", "Flexible Laufzeit", "Keine Zusatzkosten"]
  },
  {
    name: "Schüler-Rabatt",
    icon: Users,
    beschreibung: "15% Ermäßigung",
    details: ["Für Schüler & Studenten", "Azubi-Rabatt", "Mit Nachweis"]
  },
  {
    name: "Familien-Bonus",
    icon: Shield,
    beschreibung: "10% bei 2+ Personen",
    details: ["Geschwister-Rabatt", "Eltern-Kind-Bonus", "Kumulierbar"]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light via-white to-brand-light section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6">
              Faire <span className="bg-brand-gradient bg-clip-text text-transparent">Preise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transparente Preisgestaltung ohne versteckte Kosten. 
              Wählen Sie das Paket, das am besten zu Ihnen passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary">
                <Phone className="mr-2" size={20} />
                Beratung vereinbaren
              </Link>
              <Link href="#pakete" className="btn-secondary">
                Pakete vergleichen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Unsere Pakete
            </h2>
            <p className="text-xl text-gray-600">
              Alles inklusive - von der ersten Stunde bis zum Führerschein
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pakete.map((paket, index) => (
              <motion.div
                key={paket.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg card-hover ${
                  paket.beliebt 
                    ? 'border-2 border-brand-primary transform scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {paket.beliebt && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-gradient text-white px-6 py-2 rounded-full text-sm font-bold">
                      BELIEBTESTES PAKET
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{paket.name}</h3>
                  <p className="text-gray-600 mb-4">{paket.beschreibung}</p>
                  <div className="flex items-center justify-center mb-4">
                    <Euro size={24} className="text-brand-primary" />
                    <span className="text-4xl font-bold text-brand-dark ml-1">
                      {paket.preis}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-brand-dark">Leistungen:</h4>
                  {paket.leistungen.map((leistung, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{leistung}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-brand-dark">Extras:</h4>
                  {paket.extras.map((extra, idx) => (
                    <div key={idx} className="flex items-start">
                      <Star size={16} className="text-brand-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{extra}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/kontakt"
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 inline-flex items-center justify-center ${
                    paket.beliebt
                      ? 'bg-brand-gradient text-white hover:shadow-xl hover:scale-105'
                      : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  Paket wählen
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Einzelpreise */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Einzelpreise
            </h2>
            <p className="text-xl text-gray-600">
              Individuelle Preise für alle Leistungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {einzelpreise.map((kategorie, index) => (
              <motion.div
                key={kategorie.kategorie}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-brand-dark mb-6 text-center">
                  {kategorie.kategorie}
                </h3>
                
                <div className="space-y-4">
                  {kategorie.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <div className="text-right">
                        {item.note ? (
                          <span className="text-green-600 font-semibold text-sm">{item.note}</span>
                        ) : (
                          <span className="font-semibold text-brand-dark">{item.preis}€</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finanzierung */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Finanzierung & Rabatte
            </h2>
            <p className="text-xl text-gray-600">
              Wir machen Ihren Führerschein bezahlbar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {finanzierung.map((option, index) => (
              <motion.div
                key={option.name}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-brand-light to-white rounded-2xl p-8 text-center shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-2">{option.name}</h3>
                <p className="text-brand-primary font-semibold text-lg mb-6">{option.beschreibung}</p>
                
                <ul className="space-y-2">
                  {option.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preisgarantie */}
      <section className="section-padding bg-brand-gradient text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={40} className="text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Preisgarantie
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Keine versteckten Kosten, keine Überraschungen. 
              Was wir Ihnen anbieten, das halten wir auch.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Award size={32} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Festpreise</h3>
                <p className="text-sm opacity-90">Alle Preise sind fix und transparent</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Zap size={32} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Keine Extras</h3>
                <p className="text-sm opacity-90">Alles wichtige ist bereits enthalten</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Shield size={32} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Geld zurück</h3>
                <p className="text-sm opacity-90">Bei Nichtbestehen im Premium Paket</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-white text-brand-primary font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Kostenlose Beratung
              </Link>
              
              <Link 
                href="/lehrplan" 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center"
              >
                Lehrplan ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
