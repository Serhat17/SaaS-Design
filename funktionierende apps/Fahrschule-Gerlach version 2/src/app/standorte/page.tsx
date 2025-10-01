export default function StandortePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Unsere
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Standorte</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drei moderne Standorte in Gerlach und Umgebung - immer in Ihrer Nähe. 
              Jeder Standort bietet die volle Ausstattung für Ihre erfolgreiche Fahrausbildung.
            </p>
          </div>
        </div>
      </section>

      {/* Standorte Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Standorte im Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Besuchen Sie uns an einem unserer drei modernen Standorte
            </p>
          </div>

          <div className="space-y-12">
            {/* Hauptstelle Gerlach */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden ring-4 ring-orange-500 ring-opacity-20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Hauptstelle Gerlach
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      ⭐ Hauptstelle
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📍</div>
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">Hauptstraße 123, 12345 Gerlach</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📞</div>
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <a href="tel:+49123456789" className="text-orange-500 hover:underline">
                          +49 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">🕒</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Öffnungszeiten</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Mo-Fr:</span>
                            <span className="font-medium text-gray-900">9:00 - 18:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Sa:</span>
                            <span className="font-medium text-gray-900">9:00 - 14:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">So:</span>
                            <span className="font-medium text-gray-900">Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      ✅ Besonderheiten
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Hauptverwaltung
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Alle Führerscheinklassen
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Simulator verfügbar
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Barrierefreier Zugang
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://maps.google.com?q=52.5200,13.4050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex-1 text-center"
                    >
                      🗺️ Route planen
                    </a>
                    
                    <a 
                      href="tel:+49123456789"
                      className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex-1 text-center"
                    >
                      📞 Anrufen
                    </a>
                  </div>
                </div>

                <div className="relative h-64 lg:h-full bg-gradient-to-br from-orange-100 to-orange-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-orange-600">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg font-medium">Hauptstelle Gerlach</p>
                      <p className="text-sm opacity-75">Standort Foto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filiale Stadtmitte */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Filiale Stadtmitte
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📍</div>
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">Stadtplatz 45, 12345 Gerlach</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📞</div>
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <a href="tel:+49123456790" className="text-orange-500 hover:underline">
                          +49 123 456 790
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">🕒</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Öffnungszeiten</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Mo-Fr:</span>
                            <span className="font-medium text-gray-900">10:00 - 19:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Sa:</span>
                            <span className="font-medium text-gray-900">10:00 - 15:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">So:</span>
                            <span className="font-medium text-gray-900">Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      ✅ Besonderheiten
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Klasse B & B197
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Abends geöffnet
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        ÖPNV-Anbindung
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://maps.google.com?q=52.5170,13.4000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex-1 text-center"
                    >
                      🗺️ Route planen
                    </a>
                    
                    <a 
                      href="tel:+49123456790"
                      className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex-1 text-center"
                    >
                      📞 Anrufen
                    </a>
                  </div>
                </div>

                <div className="relative h-64 lg:h-full bg-gradient-to-br from-orange-100 to-orange-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-orange-600">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg font-medium">Filiale Stadtmitte</p>
                      <p className="text-sm opacity-75">Standort Foto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filiale Nord */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Filiale Nord
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📍</div>
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">Nordstraße 78, 12345 Gerlach</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">📞</div>
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <a href="tel:+49123456791" className="text-orange-500 hover:underline">
                          +49 123 456 791
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">🕒</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Öffnungszeiten</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Mo-Fr:</span>
                            <span className="font-medium text-gray-900">8:00 - 17:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Sa:</span>
                            <span className="font-medium text-gray-900">8:00 - 13:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">So:</span>
                            <span className="font-medium text-gray-900">Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      ✅ Besonderheiten
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Intensivkurse
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Große Parkplätze
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Ruhige Lage
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Früh geöffnet
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://maps.google.com?q=52.5250,13.4100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex-1 text-center"
                    >
                      🗺️ Route planen
                    </a>
                    
                    <a 
                      href="tel:+49123456791"
                      className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex-1 text-center"
                    >
                      📞 Anrufen
                    </a>
                  </div>
                </div>

                <div className="relative h-64 lg:h-full bg-gradient-to-br from-orange-100 to-orange-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-orange-600">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg font-medium">Filiale Nord</p>
                      <p className="text-sm opacity-75">Standort Foto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
