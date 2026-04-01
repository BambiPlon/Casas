"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, Bed, Bath, Maximize, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export interface PropertyData {
  title: string
  location: string
  price: string
  image: string
  images?: string[]
  beds?: number
  baths?: number
  area: string
  type: "Venta" | "Renta" | "Nuevo"
  isLand?: boolean
  description?: string
}

interface PropertyModalProps {
  property: PropertyData | null
  isOpen: boolean
  onClose: () => void
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const images = property?.images || (property ? [property.image] : [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
      setIsAnimating(true)
    } else {
      document.body.style.overflow = "unset"
      setIsAnimating(false)
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen || !property) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-opacity duration-300"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-all hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-all hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary w-6"
                          : "bg-card/60 hover:bg-card"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-4 left-4">
              <Badge
                variant={property.type === "Nuevo" ? "default" : "secondary"}
                className={
                  property.type === "Nuevo"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/90 text-card-foreground"
                }
              >
                {property.type}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[90vh]">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-2">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 py-4 border-y border-border">
                {!property.isLand && property.beds && (
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Recámaras</p>
                      <p className="font-medium text-foreground">{property.beds}</p>
                    </div>
                  </div>
                )}
                {!property.isLand && property.baths && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Baños</p>
                      <p className="font-medium text-foreground">{property.baths}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Área</p>
                    <p className="font-medium text-foreground">{property.area}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">Descripción</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description ||
                    `Hermosa ${property.isLand ? "propiedad" : "residencia"} ubicada en ${property.location}. 
                    Disfruta de vistas impresionantes al mar y acceso directo a la playa. 
                    Una oportunidad única para vivir en el paraíso.`}
                </p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-1">Precio</p>
                <p className="font-serif text-3xl font-semibold text-primary">
                  {property.price}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="flex-1 group">
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar Asesor
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Guardar</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm">Compartir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
