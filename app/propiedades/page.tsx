"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { PropertyModal, type PropertyData } from "@/components/property-modal"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, Home } from "lucide-react"

const allProperties: PropertyData[] = [
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
    description: "Espectacular villa de lujo ubicada en primera línea de playa en Tulum. Cuenta con acabados de primera calidad, piscina infinity con vista al mar Caribe, amplias terrazas y acceso directo a la playa.",
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
    description: "Exclusivo penthouse con vistas panorámicas al océano Pacífico en la zona más exclusiva de Puerto Vallarta. Terraza privada con jacuzzi y cocina gourmet.",
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
    description: "Majestuosa residencia frente al mar en el corredor turístico de Los Cabos. Arquitectura contemporánea con amplios espacios, piscina privada y muelle propio.",
  },
  {
    title: "Condominio Playa del Carmen",
    location: "Playa del Carmen, Quintana Roo",
    price: "$6,500,000 MXN",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    beds: 2,
    baths: 2,
    area: "120 m²",
    type: "Venta",
    description: "Moderno condominio a pasos de la Quinta Avenida y la playa. Amenidades de lujo incluyendo piscina, gimnasio y seguridad 24/7.",
  },
  {
    title: "Villa Tropical Cancún",
    location: "Zona Hotelera, Cancún",
    price: "$18,900,000 MXN",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    beds: 6,
    baths: 6,
    area: "650 m²",
    type: "Nuevo",
    description: "Impresionante villa en la zona hotelera de Cancún con acceso privado a la laguna y al mar. Jardín tropical, piscina y múltiples terrazas.",
  },
  {
    title: "Departamento Frente al Mar",
    location: "Mazatlán, Sinaloa",
    price: "$4,200,000 MXN",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    beds: 2,
    baths: 2,
    area: "95 m²",
    type: "Venta",
    description: "Acogedor departamento con vista directa al mar en el malecón de Mazatlán. Completamente amueblado y listo para habitar.",
  },
  {
    title: "Residencia Costa Esmeralda",
    location: "Huatulco, Oaxaca",
    price: "$12,500,000 MXN",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    beds: 4,
    baths: 3,
    area: "320 m²",
    type: "Venta",
    description: "Hermosa residencia rodeada de naturaleza en la bahía de Huatulco. Vistas panorámicas al océano Pacífico y acabados de alta calidad.",
  },
  {
    title: "Loft Moderno Sayulita",
    location: "Sayulita, Nayarit",
    price: "$3,800,000 MXN",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    beds: 1,
    baths: 1,
    area: "75 m²",
    type: "Venta",
    description: "Loft contemporáneo en el corazón del pueblo mágico de Sayulita. A 5 minutos caminando de la playa principal.",
  },
  {
    title: "Casa Club de Playa",
    location: "Acapulco, Guerrero",
    price: "$8,900,000 MXN",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    beds: 3,
    baths: 3,
    area: "280 m²",
    type: "Venta",
    description: "Elegante casa en exclusivo club de playa con acceso a amenidades premium. Marina, campo de golf y restaurantes de primera.",
  },
]

export default function PropiedadesPage() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProperties = allProperties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (property: PropertyData) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProperty(null), 300)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                Todas las propiedades
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6 text-balance">
              Propiedades Frente al Mar
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explora nuestra colección completa de propiedades exclusivas en los mejores destinos de playa de México.
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

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando <span className="font-medium text-foreground">{filteredProperties.length}</span> propiedades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard 
                key={property.title} 
                {...property} 
                index={index}
                onClick={() => openModal(property)}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No se encontraron propiedades con ese criterio de búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <PropertyModal 
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  )
}
