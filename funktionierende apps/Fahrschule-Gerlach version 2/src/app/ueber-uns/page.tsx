'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Zielorientiert',
    description: 'Wir bringen Sie sicher und erfolgreich zum Führerschein'
  },
  {
    icon: Heart,
    title: 'Persönlich',
    description: 'Individuelle Betreuung und auf Sie abgestimmte Ausbildung'
  },
  {
    icon: Shield,
    title: 'Vertrauensvoll',
    description: 'Über 20 Jahre Erfahrung und höchste Qualitätsstandards'
  },
  {
    icon: TrendingUp,
    title: 'Modern',
    description: 'Neueste Fahrzeuge und innovative Lehrmethoden'
  }
]

const achievements = [
  { number: '94%', label: 'Bestehensquote', description: 'Überdurchschnittliche Erfolgsrate' },
  { number: '2.500+', label: 'Absolventen', description: 'Zufriedene Fahrschüler seit 2004' },
  { number: '20+', label: 'Jahre', description: 'Erfahrung in der Fahrausbildung' },
  { number: '15', label: 'Fahrlehrer', description: 'Qualifizierte Ausbilder im Team' }
]

const certifications = [
  'TÜV-zertifizierte Fahrschule',
  'Mitglied im Fahrlehrerverband',
  'Qualitätssiegel "Beste Fahrschule"',
  'Umweltzertifikat für moderne Fahrzeuge',
  'Auszeichnung "Kundenfreundlichste Fahrschule 2023"'
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

export default function UeberUnsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-light via-white to-brand-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Über die
                <span className="bg-brand-gradient bg-clip-text text-transparent"> Fahrschule Gerlach</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Seit über 20 Jahren stehen wir für qualitativ hochwertige Fahrausbildung 
                in der Region. Mit Leidenschaft, Erfahrung und modernen Methoden bringen 
                wir Sie sicher ans Ziel.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-brand-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-brand-dark mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ausgezeichnete Qualität</h3>
                    <p className="text-lg opacity-90">TÜV-zertifiziert seit 2004</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geschichte Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">
              Unsere Geschichte
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Die Fahrschule Gerlach wurde 2004 von Markus Gerlach mit der Vision gegründet, 
                eine moderne und kundenorientierte Fahrausbildung anzubieten. Was als kleine 
                Fahrschule mit einem Fahrzeug begann, ist heute eine der führenden Fahrschulen 
                in der Region.
              </p>
              
              <p className="text-gray-600 mb-6">
                Unser Erfolgsrezept liegt in der Kombination aus bewährten Lehrmethoden und 
                innovativen Ansätzen. Wir setzen auf individuelle Betreuung, moderne Fahrzeuge 
                und ein erfahrenes Team von Fahrlehrern, die ihre Leidenschaft für das Fahren 
                und Lehren täglich unter Beweis stellen.
              </p>
              
              <p className="text-gray-600">
                Mit einer Bestehensquote von 94% und über 2.500 erfolgreichen Absolventen 
                haben wir uns als vertrauensvoller Partner für die Fahrausbildung etabliert. 
                Unser Ziel ist es, jeden Fahrschüler nicht nur zum Führerschein zu bringen, 
                sondern zu einem sicheren und verantwortungsvollen Verkehrsteilnehmer auszubilden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Werte Section */}
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
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten uns in unserer täglichen Arbeit und im Umgang mit unseren Fahrschülern
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zertifikate Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Qualität & Zertifikate
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Unsere Qualität wird regelmäßig überprüft und ausgezeichnet. 
                Diese Zertifikate und Auszeichnungen bestätigen unser Engagement 
                für höchste Standards in der Fahrausbildung.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-gradient rounded-2xl p-6 text-white text-center">
                  <Award size={48} className="mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">TÜV Zertifikat</h3>
                  <p className="text-sm opacity-90">Geprüfte Qualität</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-brand-primary">
                  <Users size={48} className="mx-auto mb-4 text-brand-primary" />
                  <h3 className="font-bold text-lg mb-2 text-brand-dark">Beste Fahrschule</h3>
                  <p className="text-sm text-gray-600">Auszeichnung 2023</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-green-500">
                  <Clock size={48} className="mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold text-lg mb-2 text-brand-dark">20+ Jahre</h3>
                  <p className="text-sm text-gray-600">Erfahrung</p>
                </div>
                <div className="bg-brand-accent rounded-2xl p-6 text-white text-center">
                  <TrendingUp size={48} className="mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">94% Quote</h3>
                  <p className="text-sm opacity-90">Bestehensrate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pädagogisches Konzept Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
              Unser pädagogisches Konzept
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-600 mb-6">
                Unser Ausbildungskonzept basiert auf drei Säulen: <strong>Theorie</strong>, 
                <strong> Praxis</strong> und <strong>Persönlichkeitsentwicklung</strong>. 
                Wir vermitteln nicht nur die technischen Fertigkeiten des Fahrens, sondern 
                entwickeln auch das Bewusstsein für Verantwortung im Straßenverkehr.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">Fundierte Theorie</h3>
                  <p className="text-sm text-gray-600">Interaktiver Unterricht mit modernen Medien</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">Praktische Übung</h3>
                  <p className="text-sm text-gray-600">Individuelle Fahrstunden in modernen Fahrzeugen</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">Verantwortung</h3>
                  <p className="text-sm text-gray-600">Entwicklung von Verkehrsbewusstsein</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
