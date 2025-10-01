'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Car, 
  Fuel,
  Settings,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle,
  Info
} from 'lucide-react'

interface Vehicle {
  id: string
  name: string
  brand: string
  model: string
  year: number
  type: 'manual' | 'automatic'
  fuelType: 'petrol' | 'diesel' | 'hybrid' | 'electric'
  category: string
  images: string[]
  features: string[]
  safetyFeatures: string[]
  specifications: {
    engine: string
    power: string
    consumption: string
    transmission: string
    seats: number
  }
  description: string
  suitableFor: string[]
  availability: 'available' | 'limited' | 'maintenance'
}

const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'VW Golf 8',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2023,
    type: 'manual',
    fuelType: 'petrol',
    category: 'Kompaktklasse',
    images: ['/vehicles/vw-golf-1.jpg', '/vehicles/vw-golf-2.jpg', '/vehicles/vw-golf-3.jpg'],
    features: [
      'Klimaanlage',
      'Navigationssystem',
      'Bluetooth',
      'USB-Anschluss',
      'Einparkhilfe',
      'Tempomat'
    ],
    safetyFeatures: [
      'ABS',
      'ESP',
      'Airbags',
      'Notbremsassistent',
      'Spurhalteassistent',
      'Verkehrszeichenerkennung'
    ],
    specifications: {
      engine: '1.0 TSI',
      power: '110 PS',
      consumption: '5.2 L/100km',
      transmission: '6-Gang Schaltgetriebe',
      seats: 5
    },
    description: 'Unser VW Golf 8 ist das perfekte Fahrzeug für die Fahrausbildung. Mit seiner ausgewogenen Mischung aus Komfort, Sicherheit und moderner Technik lernen Sie das Fahren in einem der beliebtesten Autos Deutschlands.',
    suitableFor: ['Fahranfänger', 'Standardausbildung', 'Stadtfahrten'],
    availability: 'available'
  },
  {
    id: '2',
    name: 'VW Golf 8 Automatik',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2023,
    type: 'automatic',
    fuelType: 'petrol',
    category: 'Kompaktklasse',
    images: ['/vehicles/vw-golf-auto-1.jpg', '/vehicles/vw-golf-auto-2.jpg'],
    features: [
      'Automatikgetriebe',
      'Klimaautomatik',
      'Navigationssystem',
      'Bluetooth',
      'Rückfahrkamera',
      'Parkassistent'
    ],
    safetyFeatures: [
      'ABS',
      'ESP',
      'Airbags',
      'Notbremsassistent',
      'Spurhalteassistent',
      'Totwinkelassistent'
    ],
    specifications: {
      engine: '1.0 TSI',
      power: '110 PS',
      consumption: '5.4 L/100km',
      transmission: '7-Gang DSG Automatik',
      seats: 5
    },
    description: 'Ideal für die B197-Ausbildung oder für Fahrschüler, die das entspannte Fahren mit Automatikgetriebe bevorzugen. Perfekt für stressfreies Lernen ohne Kupplungssorgen.',
    suitableFor: ['B197-Ausbildung', 'Automatik-Liebhaber', 'Entspanntes Lernen'],
    availability: 'available'
  },
  {
    id: '3',
    name: 'Audi A3',
    brand: 'Audi',
    model: 'A3',
    year: 2022,
    type: 'manual',
    fuelType: 'diesel',
    category: 'Kompaktklasse Premium',
    images: ['/vehicles/audi-a3-1.jpg', '/vehicles/audi-a3-2.jpg'],
    features: [
      'Premium-Interieur',
      'Virtual Cockpit',
      'MMI Navigation',
      'Bang & Olufsen Sound',
      'LED-Scheinwerfer',
      'Sitzheizung'
    ],
    safetyFeatures: [
      'Audi pre sense',
      'Spurhalteassistent',
      'Verkehrszeichenerkennung',
      'Notbremsassistent',
      'Seitenassistent',
      'Ausweichassistent'
    ],
    specifications: {
      engine: '2.0 TDI',
      power: '150 PS',
      consumption: '4.1 L/100km',
      transmission: '6-Gang Schaltgetriebe',
      seats: 5
    },
    description: 'Für anspruchsvolle Fahrschüler bieten wir auch Premium-Fahrzeuge an. Der Audi A3 kombiniert sportliches Design mit modernster Sicherheitstechnik.',
    suitableFor: ['Premium-Ausbildung', 'Sportliche Fahrer', 'Langstrecken'],
    availability: 'limited'
  },
  {
    id: '4',
    name: 'BMW 1er',
    brand: 'BMW',
    model: '118i',
    year: 2023,
    type: 'automatic',
    fuelType: 'petrol',
    category: 'Kompaktklasse Premium',
    images: ['/vehicles/bmw-1er-1.jpg', '/vehicles/bmw-1er-2.jpg'],
    features: [
      'BMW iDrive',
      'Sportlenkung',
      'Automatik-Getriebe',
      'Klimaautomatik',
      'Harman Kardon Sound',
      'Wireless Charging'
    ],
    safetyFeatures: [
      'BMW Driving Assistant',
      'Frontkollisionswarnung',
      'Spurverlassenswarnung',
      'Geschwindigkeitsregelung',
      'Park Distance Control'
    ],
    specifications: {
      engine: '1.5 Turbo',
      power: '140 PS',
      consumption: '5.8 L/100km',
      transmission: '7-Gang Steptronic',
      seats: 5
    },
    description: 'Der BMW 1er bietet sportliches Fahrgefühl und Premium-Komfort. Ideal für Fahrschüler, die Wert auf Dynamik und Qualität legen.',
    suitableFor: ['Sportliche Ausbildung', 'Premium-Erlebnis', 'Automatik-Training'],
    availability: 'available'
  },
  {
    id: '5',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    type: 'automatic',
    fuelType: 'electric',
    category: 'Elektro-Limousine',
    images: ['/vehicles/tesla-model3-1.jpg', '/vehicles/tesla-model3-2.jpg'],
    features: [
      '100% Elektrisch',
      'Autopilot-Hardware',
      '15" Touchscreen',
      'Over-the-Air Updates',
      'Supercharger-Zugang',
      'Premium-Audio'
    ],
    safetyFeatures: [
      'Autopilot',
      'Notbremsassistent',
      '360° Kameras',
      'Sentry Mode',
      'Kollisionsvermeidung',
      '5-Sterne Sicherheit'
    ],
    specifications: {
      engine: 'Elektromotor',
      power: '283 PS',
      consumption: '14.4 kWh/100km',
      transmission: 'Direktantrieb',
      seats: 5
    },
    description: 'Erleben Sie die Zukunft der Mobilität! Unser Tesla Model 3 bietet eine einzigartige Fahrerfahrung und modernste Technologie für zukunftsorientierte Fahrschüler.',
    suitableFor: ['Zukunftsorientierte', 'Umweltbewusste', 'Tech-Enthusiasten'],
    availability: 'limited'
  },
  {
    id: '6',
    name: 'Mercedes A-Klasse',
    brand: 'Mercedes-Benz',
    model: 'A 180',
    year: 2022,
    type: 'automatic',
    fuelType: 'petrol',
    category: 'Kompaktklasse Luxus',
    images: ['/vehicles/mercedes-a-1.jpg', '/vehicles/mercedes-a-2.jpg'],
    features: [
      'MBUX Infotainment',
      'Sprachsteuerung "Hey Mercedes"',
      'Ambient Beleuchtung',
      'Automatik-Getriebe',
      'Smartphone Integration',
      'Keyless-Go'
    ],
    safetyFeatures: [
      'Mercedes-Benz Intelligent Drive',
      'Active Brake Assist',
      'Attention Assist',
      'Spurhalte-Assistent',
      'Verkehrszeichen-Assistent'
    ],
    specifications: {
      engine: '1.3 Turbo',
      power: '136 PS',
      consumption: '5.6 L/100km',
      transmission: '7G-DCT Automatik',
      seats: 5
    },
    description: 'Die Mercedes A-Klasse verbindet Luxus mit Kompaktheit. Mit dem innovativen MBUX-System lernen Sie in einem der technologisch fortschrittlichsten Fahrzeuge.',
    suitableFor: ['Luxus-Ausbildung', 'Technologie-Fans', 'Komfort-Liebhaber'],
    availability: 'available'
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

export default function FahrzeugePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState<'all' | 'manual' | 'automatic' | 'electric'>('all')

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filter === 'all') return true
    if (filter === 'electric') return vehicle.fuelType === 'electric'
    return vehicle.type === filter
  })

  const nextImage = () => {
    if (selectedVehicle) {
      setCurrentImageIndex((prev) => 
        prev === selectedVehicle.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedVehicle) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedVehicle.images.length - 1 : prev - 1
      )
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100'
      case 'limited': return 'text-yellow-600 bg-yellow-100'
      case 'maintenance': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Verfügbar'
      case 'limited': return 'Begrenzt'
      case 'maintenance': return 'Wartung'
      default: return 'Unbekannt'
    }
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
              Unsere
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Fahrzeugflotte</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Moderne, sichere und komfortable Fahrzeuge für Ihre Fahrausbildung. 
              Von klassischen Schaltgetrieben bis hin zu innovativen Elektrofahrzeugen – 
              wir haben das passende Auto für jeden Lerntyp.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { key: 'all', label: 'Alle Fahrzeuge', icon: Car },
                { key: 'manual', label: 'Schaltgetriebe', icon: Settings },
                { key: 'automatic', label: 'Automatik', icon: Zap },
                { key: 'electric', label: 'Elektro', icon: Fuel }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === key
                      ? 'bg-brand-gradient text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => {
                  setSelectedVehicle(vehicle)
                  setCurrentImageIndex(0)
                }}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Car size={64} className="text-gray-400" />
                  </div>
                  
                  {/* Availability Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(vehicle.availability)}`}>
                    {getAvailabilityText(vehicle.availability)}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-brand-gradient text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {vehicle.type === 'manual' ? 'Schaltung' : 'Automatik'}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">
                        {vehicle.name}
                      </h3>
                      <p className="text-brand-primary font-semibold">
                        {vehicle.year} • {vehicle.category}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{vehicle.specifications.power}</div>
                      <div className="text-xs text-gray-500">{vehicle.specifications.consumption}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {vehicle.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.suitableFor.slice(0, 2).map((suitable) => (
                      <span
                        key={suitable}
                        className="bg-brand-light text-brand-dark text-xs px-2 py-1 rounded-full"
                      >
                        {suitable}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Settings size={16} />
                      <span>{vehicle.specifications.transmission.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Fuel size={16} />
                      <span className="capitalize">
                        {vehicle.fuelType === 'electric' ? 'Elektro' : 
                         vehicle.fuelType === 'petrol' ? 'Benzin' : 
                         vehicle.fuelType === 'diesel' ? 'Diesel' : 'Hybrid'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVehicle(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Image Gallery */}
            <div className="relative">
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car size={96} className="text-gray-400" />
                </div>

                {/* Image Navigation */}
                {selectedVehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {selectedVehicle.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {selectedVehicle.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title and Basic Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-2">
                    {selectedVehicle.name}
                  </h2>
                  <p className="text-brand-primary font-semibold text-lg">
                    {selectedVehicle.year} • {selectedVehicle.category}
                  </p>
                </div>
                
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${getAvailabilityColor(selectedVehicle.availability)}`}>
                  {getAvailabilityText(selectedVehicle.availability)}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">{selectedVehicle.description}</p>
              </div>

              {/* Suitable For */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Geeignet für</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.suitableFor.map((suitable) => (
                    <span
                      key={suitable}
                      className="bg-brand-gradient text-white px-3 py-1 rounded-full text-sm"
                    >
                      {suitable}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Technische Daten</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-light rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Motor:</span>
                        <div className="font-semibold">{selectedVehicle.specifications.engine}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Leistung:</span>
                        <div className="font-semibold">{selectedVehicle.specifications.power}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Verbrauch:</span>
                        <div className="font-semibold">{selectedVehicle.specifications.consumption}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Sitze:</span>
                        <div className="font-semibold">{selectedVehicle.specifications.seats}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-brand-light rounded-xl p-4">
                    <div className="text-sm">
                      <span className="text-gray-600">Getriebe:</span>
                      <div className="font-semibold">{selectedVehicle.specifications.transmission}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Ausstattung</h3>
                  <ul className="space-y-2">
                    {selectedVehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="text-brand-primary flex-shrink-0" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Sicherheitsausstattung</h3>
                  <ul className="space-y-2">
                    {selectedVehicle.safetyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Shield className="text-green-600 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
