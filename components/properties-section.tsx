"use client"

import { useState } from "react"
import { PropertyCard } from "./property-card"
import { PropertyModal, type PropertyData } from "./property-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const properties: PropertyData[] = [
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
    description: "Espectacular villa de lujo ubicada en primera línea de playa en Tulum. Cuenta con acabados de primera calidad, piscina infinity con vista al mar Caribe, amplias terrazas y acceso directo a la playa. Perfecta para vivir el sueño del Caribe mexicano.",
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
    type: "Venta",
    description: "Exclusivo penthouse con vistas panorámicas al océano Pacífico en la zona más exclusiva de Puerto Vallarta. Terraza privada con jacuzzi, cocina gourmet y amenidades de primer nivel.",
  },
  {
    title: "Casa de Playa Premium",
    location: "Los Cabos, BCS",
    price: "$22,800,000 MXN",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    beds: 5,
    baths: 5,
    area: "520 m²",
    type: "Venta",
    description: "Majestuosa residencia frente al mar en el corredor turístico de Los Cabos. Arquitectura contemporánea con amplios espacios, piscina privada, palapa y muelle propio. El lugar perfecto para disfrutar del mar de Cortés.",
  },
]

export function PropertiesSection() {
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
    <section id="propiedades" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <AnimatedSection animation="slide-right">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Propiedades Frente al Mar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
              Despierta con vista al océano
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={200}>
            <Button variant="ghost" className="mt-6 lg:mt-0 group self-start lg:self-auto hover:scale-105 transition-transform duration-300">
              Ver todas las propiedades
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <PropertyCard 
              key={property.title} 
              {...property} 
              index={index}
              onClick={() => openModal(property)}
            />
          ))}
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
