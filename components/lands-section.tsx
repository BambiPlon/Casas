"use client"

import { useState } from "react"
import { PropertyCard } from "./property-card"
import { PropertyModal, type PropertyData } from "./property-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const lands: PropertyData[] = [
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
    description: "Terreno único en primera línea de playa en la exclusiva Riviera Maya. Ideal para desarrollar tu proyecto residencial o boutique hotel con acceso directo al mar Caribe y sus aguas cristalinas.",
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
    description: "Excelente lote con acceso privado a playa en la perla del Pacífico. Zona en desarrollo con alta plusvalía, servicios disponibles y permisos de construcción vigentes.",
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
    description: "Terreno premium con vista a una de las bahías más hermosas de Huatulco. Rodeado de naturaleza virgen, perfecto para desarrollar un proyecto exclusivo de bajo impacto ambiental.",
  },
]

export function LandsSection() {
  const [selectedLand, setSelectedLand] = useState<PropertyData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (land: PropertyData) => {
    setSelectedLand(land)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedLand(null), 300)
  }

  return (
    <section id="terrenos" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <AnimatedSection animation="slide-right">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Terrenos Frente al Mar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
              Tu pedazo de paraíso
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={200}>
            <Button variant="ghost" className="mt-6 lg:mt-0 group self-start lg:self-auto hover:scale-105 transition-transform duration-300">
              Ver todos los terrenos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {lands.map((land, index) => (
            <PropertyCard 
              key={land.title} 
              {...land} 
              index={index}
              onClick={() => openModal(land)}
            />
          ))}
        </div>
      </div>

      <PropertyModal 
        property={selectedLand}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
