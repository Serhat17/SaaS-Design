'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Award, 
  Calendar, 
  Car,
  Clock,
  Mail,
  Phone,
  Star,
  Users,
  X
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  specialties: string[]
  experience: string
  qualifications: string[]
  bio: string
  image: string
  phone?: string
  email?: string
  languages: string[]
  rating: number
  lessonsGiven: number
  passRate: number
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Markus Gerlach',
    role: 'Fahrschulinhaber & Fahrlehrer',
    specialties: ['Klasse B', 'B197', 'Intensivkurse'],
    experience: '20+ Jahre',
    qualifications: [
      'Fahrlehrerausbildung Klasse BE',
      'Ausbilder für Fahrlehrer',
      'TÜV-Prüfer',
      'Verkehrspädagoge'
    ],
    bio: 'Markus Gerlach gründete die Fahrschule 2004 mit der Vision, moderne und effektive Fahrausbildung anzubieten. Mit über 20 Jahren Erfahrung hat er bereits über 1.000 Fahrschüler erfolgreich zum Führerschein geführt.',
    image: '/team/markus-gerlach.jpg',
    phone: '+49 123 456 789',
    email: 'markus@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Englisch'],
    rating: 4.9,
    lessonsGiven: 15000,
    passRate: 96
  },
  {
    id: '2',
    name: 'Sarah Weber',
    role: 'Fahrlehrerin',
    specialties: ['Klasse B', 'Automatik', 'Angsthasen'],
    experience: '8 Jahre',
    qualifications: [
      'Fahrlehrerin Klasse BE',
      'Spezialistin für Prüfungsangst',
      'Erste-Hilfe-Ausbilderin'
    ],
    bio: 'Sarah Weber ist bekannt für ihre geduldige und einfühlsame Art. Sie spezialisiert sich auf Fahrschüler mit Prüfungsangst und hat eine besonders hohe Erfolgsquote bei schwierigen Fällen.',
    image: '/team/sarah-weber.jpg',
    phone: '+49 123 456 790',
    email: 'sarah@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Türkisch'],
    rating: 4.8,
    lessonsGiven: 8500,
    passRate: 94
  },
  {
    id: '3',
    name: 'Michael Schmidt',
    role: 'Fahrlehrer',
    specialties: ['Klasse B', 'B96', 'Aufbauseminare'],
    experience: '12 Jahre',
    qualifications: [
      'Fahrlehrer Klasse BE',
      'Moderator für Aufbauseminare',
      'Verkehrssicherheitsberater'
    ],
    bio: 'Michael Schmidt bringt als ehemaliger Polizist umfangreiche Verkehrserfahrung mit. Er leitet unsere Aufbauseminare und ist Experte für Verkehrssicherheit.',
    image: '/team/michael-schmidt.jpg',
    phone: '+49 123 456 791',
    email: 'michael@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Englisch', 'Französisch'],
    rating: 4.7,
    lessonsGiven: 12000,
    passRate: 92
  },
  {
    id: '4',
    name: 'Lisa Müller',
    role: 'Fahrlehrerin',
    specialties: ['Klasse B', 'B197', 'Senioren'],
    experience: '6 Jahre',
    qualifications: [
      'Fahrlehrerin Klasse BE',
      'Spezialistin für Seniorenausbildung',
      'Eco-Drive Trainerin'
    ],
    bio: 'Lisa Müller hat sich auf die Ausbildung von Senioren und Wiedereinsteigern spezialisiert. Mit ihrer ruhigen Art schafft sie eine entspannte Lernumgebung.',
    image: '/team/lisa-mueller.jpg',
    phone: '+49 123 456 792',
    email: 'lisa@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Russisch'],
    rating: 4.9,
    lessonsGiven: 6800,
    passRate: 95
  },
  {
    id: '5',
    name: 'Thomas Klein',
    role: 'Fahrlehrer',
    specialties: ['Klasse B', 'Intensivkurse', 'Jugendliche'],
    experience: '10 Jahre',
    qualifications: [
      'Fahrlehrer Klasse BE',
      'Jugendverkehrserzieher',
      'Moderator für Fahrsicherheitstraining'
    ],
    bio: 'Thomas Klein ist unser Experte für junge Fahrschüler. Mit seinem lockeren Stil und modernen Lehrmethoden begeistert er besonders Jugendliche für sicheres Fahren.',
    image: '/team/thomas-klein.jpg',
    phone: '+49 123 456 793',
    email: 'thomas@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Spanisch'],
    rating: 4.8,
    lessonsGiven: 9500,
    passRate: 93
  },
  {
    id: '6',
    name: 'Anna Hoffmann',
    role: 'Büroleiterin & Theorielehrerin',
    specialties: ['Theorieunterricht', 'Anmeldungen', 'Prüfungsorganisation'],
    experience: '15 Jahre',
    qualifications: [
      'Bürokauffrau',
      'Theorielehrerin',
      'Prüfungsorganisatorin'
    ],
    bio: 'Anna Hoffmann ist das organisatorische Herz unserer Fahrschule. Sie koordiniert alle Termine, Prüfungen und hält unseren beliebten Theorieunterricht.',
    image: '/team/anna-hoffmann.jpg',
    phone: '+49 123 456 794',
    email: 'anna@fahrschule-gerlach.de',
    languages: ['Deutsch', 'Italienisch'],
    rating: 4.9,
    lessonsGiven: 5000,
    passRate: 98
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

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

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
              Unser
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Fahrlehrer-Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Lernen Sie unser erfahrenes Team kennen. Jeder unserer Fahrlehrer bringt 
              individuelle Stärken und Spezialisierungen mit, um Sie optimal auf die 
              Führerscheinprüfung vorzubereiten.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">15</div>
                <div className="text-sm text-gray-600">Fahrlehrer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">150+</div>
                <div className="text-sm text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">4.8</div>
                <div className="text-sm text-gray-600">⭐ Bewertung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">94%</div>
                <div className="text-sm text-gray-600">Erfolgsquote</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-64 bg-gradient-to-br from-brand-light to-brand-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-brand-gradient rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-semibold">{member.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-brand-primary font-semibold mb-3">
                    {member.role}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-brand-light text-brand-dark text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {member.specialties.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{member.specialties.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>{member.lessonsGiven.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Erfolgsquote</span>
                      <span className="font-semibold text-brand-primary">{member.passRate}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-brand-light to-brand-primary/10 p-6">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-brand-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-1">
                    {selectedMember.name}
                  </h2>
                  <p className="text-brand-primary font-semibold mb-2">
                    {selectedMember.role}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span>{selectedMember.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{selectedMember.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Über mich</h3>
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Spezialisierungen</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-brand-gradient text-white px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Qualifikationen</h3>
                <ul className="space-y-2">
                  {selectedMember.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Award className="text-brand-primary flex-shrink-0" size={16} />
                      <span className="text-gray-600">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Sprachen</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.languages.map((language) => (
                    <span
                      key={language}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-brand-light rounded-xl">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    {selectedMember.lessonsGiven.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Fahrstunden</div>
                </div>
                <div className="text-center p-4 bg-brand-light rounded-xl">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    {selectedMember.passRate}%
                  </div>
                  <div className="text-sm text-gray-600">Erfolgsquote</div>
                </div>
                <div className="text-center p-4 bg-brand-light rounded-xl">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    {selectedMember.rating}
                  </div>
                  <div className="text-sm text-gray-600">Bewertung</div>
                </div>
              </div>

              {/* Contact */}
              {(selectedMember.phone || selectedMember.email) && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Kontakt</h3>
                  <div className="space-y-2">
                    {selectedMember.phone && (
                      <a
                        href={`tel:${selectedMember.phone}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-brand-primary transition-colors"
                      >
                        <Phone size={18} />
                        <span>{selectedMember.phone}</span>
                      </a>
                    )}
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-brand-primary transition-colors"
                      >
                        <Mail size={18} />
                        <span>{selectedMember.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
