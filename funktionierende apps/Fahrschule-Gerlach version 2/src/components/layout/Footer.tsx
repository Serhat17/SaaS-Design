'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FG</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Fahrschule Gerlach</h3>
                <p className="text-gray-400 text-sm">Ihre Fahrschule in der Region</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professionelle Fahrausbildung mit über 20 Jahren Erfahrung. 
              Wir bringen Sie sicher ans Ziel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Schnellzugriff</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/leistungen" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Führerscheinklassen
                </Link>
              </li>
              <li>
                <Link href="/preise" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Preise & Pakete
                </Link>
              </li>
              <li>
                <Link href="/lehrplan" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Theorieplan
                </Link>
              </li>
              <li>
                <Link href="/fahrzeuge" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Unsere Fahrzeuge
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Häufige Fragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-gray-300">0123 456 789</p>
                  <p className="text-gray-400 text-sm">Mo-Fr 9:00-18:00 Uhr</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-gray-300">info@fahrschule-gerlach.de</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-gray-300">Hauptstraße 123</p>
                  <p className="text-gray-300">12345 Musterstadt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Öffnungszeiten</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Montag - Freitag</span>
                <span className="text-white">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Samstag</span>
                <span className="text-white">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sonntag</span>
                <span className="text-gray-400">Geschlossen</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/kontakt" className="btn-primary w-full text-center block">
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Fahrschule Gerlach. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/impressum" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
