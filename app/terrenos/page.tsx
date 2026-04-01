"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { PropertyModal, type PropertyData } from "@/components/property-modal"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, Mountain } from "lucide-react"

const allLands: PropertyData[] = [
  {
    title: "Terreno Primera Línea de Playa",
    location: "Riviera Maya, Quintana Roo",
    price: "$12,500,000 MXN",
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    area: "2,000 m²",
    type: "Nuevo",
    isLand: true,
    description: "Terreno único en primera línea de playa en la exclusiva Riviera Maya. Ideal para desarrollar tu proyecto residencial o boutique hotel con acceso directo al mar Caribe.",
  },
  {
    title: "Lote con Acceso a la Playa",
    location: "Mazatlán, Sinaloa",
    price: "$6,800,000 MXN",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    area: "1,500 m²",
    type: "Venta",
    isLand: true,
    description: "Excelente lote con acceso privado a playa en la perla del Pacífico. Zona en desarrollo con alta plusvalía y servicios disponibles.",
  },
  {
    title: "Terreno Bahía Exclusiva",
    location: "Huatulco, Oaxaca",
    price: "$18,900,000 MXN",
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
    ],
    area: "4,500 m²",
    type: "Venta",
    isLand: true,
    description: "Terreno premium con vista a una de las bahías más hermosas de Huatulco. Rodeado de naturaleza virgen, perfecto para un proyecto exclusivo.",
  },
  {
    title: "Lote Frente al Mar Caribe",
    location: "Tulum, Quintana Roo",
    price: "$25,000,000 MXN",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    area: "3,200 m²",
    type: "Nuevo",
    isLand: true,
    description: "Extraordinario lote en la zona de hoteles boutique de Tulum. Primera línea con 40 metros de frente de playa.",
  },
  {
    title: "Terreno Vista Panorámica",
    location: "Puerto Escondido, Oaxaca",
    price: "$4,500,000 MXN",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    ],
    area: "1,200 m²",
    type: "Venta",
    isLand: true,
    description: "Lote con vistas espectaculares a la bahía de Puerto Escondido. Zona residencial tranquila con acceso a playa.",
  },
  {
    title: "Lote Desarrollo Turístico",
    location: "Los Cabos, BCS",
    price: "$35,000,000 MXN",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
    ],
    area: "8,000 m²",
    type: "Venta",
    isLand: true,
    description: "Gran terreno ideal para desarrollo hotelero o residencial de lujo en el corredor turístico de Los Cabos.",
  },
  {
    title: "Terreno Costero Sayulita",
    location: "Sayulita, Nayarit",
    price: "$7,200,000 MXN",
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&q=80",
    ],
    area: "1,800 m²",
    type: "Venta",
    isLand: true,
    description: "Terreno a 3 minutos de la playa principal de Sayulita. Zona de alta demanda turística con excelente potencial de inversión.",
  },
  {
    title: "Lote Marina Cancún",
    location: "Puerto Juárez, Cancún",
    price: "$15,500,000 MXN",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    ],
    area: "2,500 m²",
    type: "Nuevo",
    isLand: true,
    description: "Terreno frente a marina con posibilidad de muelle privado. Vista a la laguna Nichupté y cercanía a la zona hotelera.",
  },
  {
    title: "Terreno Playa Virgen",
    location: "Costa Chica, Guerrero",
    price: "$3,200,000 MXN",
    image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800&q=80",
    ],
    area: "5,000 m²",
    type: "Venta",
    isLand: true,
    description: "Extenso terreno en playa virgen con potencial para desarrollo eco-turístico. Naturaleza intacta y privacidad absoluta.",
  },
]

export default function TerrenosPage() {
  const [selectedLand, setSelectedLand] = useState<PropertyData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLands = allLands.filter(
    (land) =>
      land.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      land.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (land: PropertyData) => {
    setSelectedLand(land)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedLand(null), 300)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                Todos los terrenos
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6 text-balance">
              Terrenos Frente al Mar
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Encuentra el terreno perfecto para construir tu sueño frente al mar en las costas más hermosas de México.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o ubicación..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Lands Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando <span className="font-medium text-foreground">{filteredLands.length}</span> terrenos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredLands.map((land, index) => (
              <PropertyCard 
                key={land.title} 
                {...land} 
                index={index}
                onClick={() => openModal(land)}
              />
            ))}
          </div>

          {filteredLands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No se encontraron terrenos con ese criterio de búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <PropertyModal 
        property={selectedLand}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  )
}
