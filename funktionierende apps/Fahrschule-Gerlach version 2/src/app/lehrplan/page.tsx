'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Car, 
  Clock, 
  CheckCircle, 
  Users, 
  FileText,
  Calendar,
  MapPin,
  Trophy,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const theorieThemen = [
  {
    nummer: 1,
    titel: "Persönliche Voraussetzungen",
    stunden: 2,
    inhalt: ["Körperliche Fähigkeiten", "Einschränkungen", "Alkohol und Drogen", "Medikamente"]
  },
  {
    nummer: 2,
    titel: "Rechtliche Rahmenbedingungen",
    stunden: 2,
    inhalt: ["Führerschein und Fahrerlaubnis", "Fahrzeugpapiere", "Versicherung", "Zulassung"]
  },
  {
    nummer: 3,
    titel: "Verkehrszeichen und Verkehrseinrichtungen",
    stunden: 2,
    inhalt: ["Gefahrzeichen", "Vorschriftzeichen", "Richtzeichen", "Verkehrseinrichtungen"]
  },
  {
    nummer: 4,
    titel: "Straßenverkehrssystem und Bahnübergänge",
    stunden: 2,
    inhalt: ["Verkehrswege", "Bahnübergänge", "Autobahn und Kraftfahrstraße"]
  },
  {
    nummer: 5,
    titel: "Vorfahrt",
    stunden: 3,
    inhalt: ["Grundregeln", "Verkehrszeichen", "Abbiegen", "Kreisverkehr"]
  },
  {
    nummer: 6,
    titel: "Verkehrsregelungen/Bahnübergänge",
    stunden: 2,
    inhalt: ["Polizeibeamte", "Lichtzeichenanlagen", "Bahnübergänge"]
  },
  {
    nummer: 7,
    titel: "Geschwindigkeit, Abstand und umweltschonende Fahrweise",
    stunden: 3,
    inhalt: ["Geschwindigkeitsvorschriften", "Sicherheitsabstand", "Umweltschutz"]
  },
  {
    nummer: 8,
    titel: "Andere Teilnehmer im Straßenverkehr",
    stunden: 3,
    inhalt: ["Kinder", "Ältere Menschen", "Motorradfahrer", "Radfahrer", "Fußgänger"]
  },
  {
    nummer: 9,
    titel: "Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung",
    stunden: 2,
    inhalt: ["Einfahren und Anfahren", "Nebeneinanderfahren", "Vorbeifahren", "Überholen"]
  },
  {
    nummer: 10,
    titel: "Ruhender Verkehr",
    stunden: 2,
    inhalt: ["Halten und Parken", "Einrichtungen zur Überwachung"]
  },
  {
    nummer: 11,
    titel: "Verhalten in besonderen Situationen",
    stunden: 2,
    inhalt: ["Tunnels", "Berge", "Unfälle", "Pannen", "Abschleppen"]
  },
  {
    nummer: 12,
    titel: "Lebenslanges Lernen/Folgen von Verstößen",
    stunden: 2,
    inhalt: ["Fahrerweiterbildung", "Punktesystem", "Entzug der Fahrerlaubnis"]
  }
]

const praxisPhase = [
  {
    phase: "Grundstufe",
    stunden: "5-10",
    beschreibung: "Grundlagen der Fahrzeugbedienung",
    inhalte: [
      "Fahrzeugkunde und Bedienung",
      "Anfahren und Anhalten",
      "Lenken und Schalten",
      "Rückwärtsfahren"
    ]
  },
  {
    phase: "Aufbaustufe",
    stunden: "10-20",
    beschreibung: "Verkehrssituationen meistern",
    inhalte: [
      "Vorfahrt und Abbiegen",
      "Kreisverkehr",
      "Parken in verschiedenen Situationen",
      "Stadtverkehr"
    ]
  },
  {
    phase: "Leistungsstufe",
    stunden: "15-25",
    beschreibung: "Selbstständiges Fahren",
    inhalte: [
      "Komplexe Verkehrssituationen",
      "Autobahn und Kraftfahrstraße",
      "Nachtfahrt",
      "Prüfungsvorbereitung"
    ]
  }
]

const sonderfahrten = [
  {
    typ: "Überlandfahrt",
    anzahl: 5,
    dauer: "45 min",
    beschreibung: "Fahren außerhalb geschlossener Ortschaften",
    icon: MapPin
  },
  {
    typ: "Autobahnfahrt",
    anzahl: 4,
    dauer: "45 min", 
    beschreibung: "Fahren auf Autobahnen und Kraftfahrstraßen",
    icon: Car
  },
  {
    typ: "Nachtfahrt",
    anzahl: 3,
    dauer: "45 min",
    beschreibung: "Fahren bei Dämmerung oder Dunkelheit",
    icon: Clock
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

export default function LehrplanPage() {
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
              Unser <span className="bg-brand-gradient bg-clip-text text-transparent">Lehrplan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Strukturierte Ausbildung nach den neuesten Standards - 
              von der ersten Theoriestunde bis zur erfolgreichen Prüfung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary">
                <Calendar className="mr-2" size={20} />
                Anmeldung
              </Link>
              <Link href="/preise" className="btn-secondary">
                Preise ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Übersicht */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Ausbildungsübersicht
            </h2>
            <p className="text-xl text-gray-600">
              Ihre Fahrausbildung im Überblick
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-brand-gradient rounded-2xl p-8 text-white text-center"
            >
              <BookOpen size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">14 Theoriestunden</h3>
              <p className="opacity-90">Grundstoff für alle Klassen</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-brand-primary rounded-2xl p-8 text-center"
            >
              <Car size={48} className="mx-auto mb-4 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">12 Sonderfahrten</h3>
              <p className="text-gray-600">Pflichtfahrten nach Ausbildungsordnung</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100 rounded-2xl p-8 text-center"
            >
              <Trophy size={48} className="mx-auto mb-4 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">Prüfungen</h3>
              <p className="text-gray-600">Theorie- und Praxisprüfung</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theorieunterricht */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Theorieunterricht
            </h2>
            <p className="text-xl text-gray-600">
              14 Doppelstunden Grundstoff nach der Fahrschüler-Ausbildungsordnung
            </p>
          </motion.div>

          <div className="grid gap-6">
            {theorieThemen.map((thema, index) => (
              <motion.div
                key={thema.nummer}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{thema.nummer}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-dark mb-2 md:mb-0">
                        {thema.titel}
                      </h3>
                      <div className="flex items-center text-brand-primary">
                        <Clock size={16} className="mr-1" />
                        <span className="font-semibold">{thema.stunden} Std.</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {thema.inhalt.map((punkt, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {punkt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Praxisausbildung */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Praxisausbildung
            </h2>
            <p className="text-xl text-gray-600">
              Stufenweise Ausbildung vom Anfänger zum sicheren Fahrer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {praxisPhase.map((phase, index) => (
              <motion.div
                key={phase.phase}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{phase.phase}</h3>
                  <p className="text-brand-primary font-semibold">{phase.stunden} Fahrstunden</p>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{phase.beschreibung}</p>
                
                <ul className="space-y-2">
                  {phase.inhalte.map((inhalt, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      {inhalt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonderfahrten */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Sonderfahrten
            </h2>
            <p className="text-xl text-gray-600">
              12 Pflichtfahrten nach der Fahrschüler-Ausbildungsordnung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sonderfahrten.map((fahrt, index) => (
              <motion.div
                key={fahrt.typ}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="w-20 h-20 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <fahrt.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-2">{fahrt.typ}</h3>
                <div className="text-3xl font-bold text-brand-primary mb-2">{fahrt.anzahl}x</div>
                <p className="text-gray-600 mb-4">{fahrt.dauer} pro Fahrt</p>
                <p className="text-sm text-gray-600">{fahrt.beschreibung}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-gradient text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihre Fahrausbildung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Starten Sie noch heute mit unserem strukturierten Lehrplan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-white text-brand-primary font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Jetzt anmelden
              </Link>
              
              <Link 
                href="/team" 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center"
              >
                <Users className="mr-2" size={20} />
                Unsere Fahrlehrer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
