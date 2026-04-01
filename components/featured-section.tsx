"use client"

import { useState } from "react"
import Link from "next/link"
import { PropertyCard } from "./property-card"
import { PropertyModal, type PropertyData } from "./property-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const featuredProperties: PropertyData[] = [
  {
    title: "Villa Frente al Mar",
    location: "Tulum, Quintana Roo",
    price: "$15,500,000 MXN",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    beds: 4,
    baths: 4,
    area: "380 m²",
    type: "Nuevo",
    description: "Espectacular villa de lujo ubicada en primera línea de playa en Tulum. Cuenta con acabados de primera calidad, piscina infinity con vista al mar Caribe.",
  },
  {
    title: "Penthouse Vista al Océano",
    location: "Puerto Vallarta, Jalisco",
    price: "$9,200,000 MXN",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    beds: 3,
    baths: 3,
    area: "220 m²",
    type: "Nuevo",
    description: "Exclusivo penthouse con vistas panorámicas al océano Pacífico en la zona más exclusiva de Puerto Vallarta.",
  },
]

const featuredLands: PropertyData[] = [
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
    description: "Terreno único en primera línea de playa en la exclusiva Riviera Maya.",
  },
  {
    title: "Terreno Bahía Exclusiva",
    location: "Huatulco, Oaxaca",
    price: "$18,900,000 MXN",
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
    ],
    area: "4,500 m²",
    type: "Nuevo",
    isLand: true,
    description: "Terreno premium con vista a una de las bahías más hermosas de Huatulco.",
  },
]

export function FeaturedSection() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (property: PropertyData) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProperty(null), 300)
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Featured Properties */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <AnimatedSection animation="slide-right">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium tracking-widest text-primary uppercase">
                  Propiedades Destacadas
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
                Lo mejor frente al mar
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <Link href="/propiedades">
                <Button variant="ghost" className="mt-6 lg:mt-0 group self-start lg:self-auto hover:scale-105 transition-transform duration-300">
                  Ver todas las propiedades
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard 
                key={property.title} 
                {...property} 
                index={index}
                onClick={() => openModal(property)}
              />
            ))}
          </div>
        </div>

        {/* Featured Lands */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <AnimatedSection animation="slide-right">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium tracking-widest text-primary uppercase">
                  Terrenos Destacados
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
                Tu pedazo de paraíso
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <Link href="/terrenos">
                <Button variant="ghost" className="mt-6 lg:mt-0 group self-start lg:self-auto hover:scale-105 transition-transform duration-300">
                  Ver todos los terrenos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredLands.map((land, index) => (
              <PropertyCard 
                key={land.title} 
                {...land} 
                index={index}
                onClick={() => openModal(land)}
              />
            ))}
          </div>
        </div>
      </div>

      <PropertyModal 
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
