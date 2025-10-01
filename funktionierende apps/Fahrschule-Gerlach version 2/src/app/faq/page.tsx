'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  ChevronDown,
  Search,
  HelpCircle,
  Car,
  Clock,
  Euro,
  FileText,
  Users,
  Phone
} from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Wie lange dauert die Fahrausbildung?',
    answer: 'Die Dauer der Fahrausbildung hängt von verschiedenen Faktoren ab. Im Durchschnitt dauert die Ausbildung für den Führerschein Klasse B 3-6 Monate. Bei unserem Intensivkurs können Sie den Führerschein bereits in 2-3 Wochen erhalten. Die tatsächliche Dauer hängt von Ihrem Lernfortschritt, der Häufigkeit der Fahrstunden und der Verfügbarkeit von Prüfungsterminen ab.',
    category: 'Allgemein'
  },
  {
    id: '2',
    question: 'Was kostet der Führerschein?',
    answer: 'Die Kosten für den Führerschein Klasse B beginnen bei 1.890€. Dieser Grundpreis beinhaltet den Theorieunterricht, die Grundausbildung und die Sonderfahrten. Zusätzliche Kosten können für weitere Fahrstunden (65€/Stunde), Prüfungsgebühren (116,93€) und behördliche Gebühren entstehen. Gerne erstellen wir Ihnen ein individuelles Angebot.',
    category: 'Kosten'
  },
  {
    id: '3',
    question: 'Welche Unterlagen benötige ich für die Anmeldung?',
    answer: 'Für die Anmeldung benötigen Sie: einen gültigen Personalausweis oder Reisepass, ein biometrisches Passfoto, einen Sehtest (nicht älter als 2 Jahre), eine Bescheinigung über einen Erste-Hilfe-Kurs und ein Führungszeugnis zur Vorlage bei der Führerscheinstelle. Wir helfen Ihnen gerne bei der Beschaffung aller erforderlichen Unterlagen.',
    category: 'Anmeldung'
  },
  {
    id: '4',
    question: 'Ab welchem Alter kann ich den Führerschein machen?',
    answer: 'Den Führerschein Klasse B können Sie ab 18 Jahren erwerben. Mit dem begleiteten Fahren (BF17) ist der Führerschein bereits ab 17 Jahren möglich. Die Ausbildung können Sie bereits 6 Monate vor Ihrem Geburtstag beginnen, die theoretische Prüfung 3 Monate vorher und die praktische Prüfung 1 Monat vorher ablegen.',
    category: 'Allgemein'
  },
  {
    id: '5',
    question: 'Wie viele Fahrstunden brauche ich?',
    answer: 'Die Anzahl der benötigten Fahrstunden ist individuell unterschiedlich. Gesetzlich vorgeschrieben sind 12 Sonderfahrten (5x Überland, 4x Autobahn, 3x Nachtfahrt). Die Grundausbildung richtet sich nach Ihrem persönlichen Lernfortschritt. Im Durchschnitt benötigen unsere Fahrschüler 25-35 Fahrstunden insgesamt. Ihr Fahrlehrer bespricht mit Ihnen regelmäßig Ihren Fortschritt.',
    category: 'Fahrstunden'
  },
  {
    id: '6',
    question: 'Was ist der Unterschied zwischen B und B197?',
    answer: 'Bei der Klasse B197 lernen Sie hauptsächlich mit einem Automatikfahrzeug, müssen aber zusätzlich 10 Fahrstunden mit einem Schaltgetriebe absolvieren und eine Testfahrt bestehen. Danach dürfen Sie sowohl Automatik- als auch Schaltfahrzeuge fahren. Der klassische Führerschein Klasse B wird komplett mit Schaltgetriebe erlernt. B197 ist entspannter zu lernen, aber etwas teurer.',
    category: 'Führerscheinklassen'
  },
  {
    id: '7',
    question: 'Wie oft findet der Theorieunterricht statt?',
    answer: 'Unser Theorieunterricht findet regelmäßig statt: Montag und Mittwoch von 18:30-20:00 Uhr sowie Samstag von 10:00-11:30 Uhr. Für Intensivkurse bieten wir kompakte Theoriephasen an. Sie müssen insgesamt 14 Doppelstunden Grundstoff besuchen. Der Unterricht ist interaktiv gestaltet und wird durch moderne Medien unterstützt.',
    category: 'Theorieunterricht'
  },
  {
    id: '8',
    question: 'Kann ich auch mit Automatik lernen?',
    answer: 'Ja, wir bieten sowohl klassische Schaltgetriebe-Ausbildung als auch Automatik-Ausbildung an. Mit unserem B197-Programm können Sie entspannt mit Automatik lernen und trotzdem beide Getriebearten fahren. Reine Automatik-Ausbildung ist ebenfalls möglich, dann dürfen Sie aber nur Automatikfahrzeuge fahren. Automatik ist besonders für ängstliche Fahrschüler geeignet.',
    category: 'Fahrzeuge'
  },
  {
    id: '9',
    question: 'Was passiert, wenn ich durch die Prüfung falle?',
    answer: 'Keine Sorge, das kann passieren! Bei der theoretischen Prüfung können Sie nach 14 Tagen einen neuen Termin vereinbaren. Bei der praktischen Prüfung ist eine Wiederholung nach 14 Tagen möglich. Wir bereiten Sie optimal auf die Wiederholungsprüfung vor und analysieren gemeinsam, was verbessert werden kann. Zusätzliche Übungsstunden helfen dabei, Schwächen zu beheben.',
    category: 'Prüfung'
  },
  {
    id: '10',
    question: 'Bieten Sie auch Intensivkurse an?',
    answer: 'Ja, unsere Intensivkurse sind sehr beliebt! In nur 2-3 Wochen können Sie Ihren Führerschein erhalten. Der Kurs beinhaltet kompakten Theorieunterricht in der ersten Woche, gefolgt von intensiven täglichen Fahrstunden. Voraussetzung ist, dass Sie alle Unterlagen vorab einreichen und flexibel für tägliche Termine sind. Der Intensivkurs kostet 2.290€.',
    category: 'Intensivkurs'
  },
  {
    id: '11',
    question: 'Kann ich Fahrstunden auch am Wochenende nehmen?',
    answer: 'Ja, wir bieten Fahrstunden auch am Wochenende an. Samstags von 8:00-16:00 Uhr und sonntags von 10:00-16:00 Uhr stehen unsere Fahrlehrer zur Verfügung. Wochenendtermine sind besonders bei Berufstätigen und Schülern beliebt. Bitte buchen Sie Wochenendtermine frühzeitig, da diese schnell ausgebucht sind.',
    category: 'Fahrstunden'
  },
  {
    id: '12',
    question: 'Welche Zahlungsmöglichkeiten gibt es?',
    answer: 'Wir bieten verschiedene Zahlungsmöglichkeiten an: Barzahlung, EC-Karte, Überweisung und Ratenzahlung. Bei der Ratenzahlung können Sie die Kosten auf bis zu 12 Monate verteilen. Eine Anzahlung von 500€ ist bei Anmeldung fällig. Fahrstunden können einzeln oder in 5er/10er-Paketen bezahlt werden. Sprechen Sie uns auf individuelle Zahlungsvereinbarungen an.',
    category: 'Kosten'
  },
  {
    id: '13',
    question: 'Was ist, wenn ich umziehe?',
    answer: 'Bei einem Umzug können Ihre Ausbildungsunterlagen an eine andere Fahrschule übertragen werden. Bereits absolvierte Theoriestunden und Fahrstunden werden angerechnet. Innerhalb Deutschlands ist ein Wechsel problemlos möglich. Bei einem Umzug ins Ausland gelten je nach Land unterschiedliche Regelungen. Informieren Sie uns frühzeitig über Ihren Umzug, damit wir alles Nötige veranlassen können.',
    category: 'Allgemein'
  },
  {
    id: '14',
    question: 'Kann ich meine Fahrstunden online buchen?',
    answer: 'Aktuell erfolgt die Terminbuchung telefonisch oder direkt in unseren Filialen. Wir arbeiten an einem Online-Buchungssystem, das bald verfügbar sein wird. Ihre Fahrlehrer koordinieren mit Ihnen auch direkt die nächsten Termine. Für kurzfristige Änderungen können Sie uns auch per WhatsApp kontaktieren. Regelmäßige Termine können fest vereinbart werden.',
    category: 'Buchung'
  },
  {
    id: '15',
    question: 'Bieten Sie Auffrischungsstunden an?',
    answer: 'Ja, wir bieten Auffrischungsstunden für Wiedereinsteiger an. Wenn Sie länger nicht gefahren sind oder sich unsicher fühlen, helfen unsere erfahrenen Fahrlehrer dabei, Ihr Fahrkönnen aufzufrischen. Die Stunden kosten 65€ und können individuell gebucht werden. Besonders nach längeren Pausen oder bei Senioren sind Auffrischungsstunden sehr sinnvoll.',
    category: 'Zusatzleistungen'
  }
]

const categories = [
  { name: 'Alle', icon: HelpCircle },
  { name: 'Allgemein', icon: Car },
  { name: 'Kosten', icon: Euro },
  { name: 'Fahrstunden', icon: Clock },
  { name: 'Theorieunterricht', icon: FileText },
  { name: 'Prüfung', icon: Users }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Alle' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
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
              Häufig gestellte
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Fragen</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um die Fahrausbildung. 
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns gerne direkt.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Frage suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-brand-gradient text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Keine Fragen gefunden
                </h3>
                <p className="text-gray-500 mb-6">
                  Versuchen Sie es mit anderen Suchbegriff oder wählen Sie eine andere Kategorie.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('Alle')
                  }}
                  className="btn-primary"
                >
                  Alle Fragen anzeigen
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-dark mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-brand-primary font-medium">
                          {faq.category}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4"
                      >
                        <ChevronDown className="text-gray-400" size={24} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-brand-gradient text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kein Problem! Kontaktieren Sie uns und wir beantworten gerne alle Ihre Fragen persönlich.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-white text-brand-primary font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <HelpCircle className="mr-2" size={20} />
                Frage stellen
              </a>
              
              <a 
                href="tel:+49123456789"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
