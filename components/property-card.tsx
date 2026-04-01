"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Maximize, Eye } from "lucide-react"
import type { PropertyData } from "./property-modal"

interface PropertyCardProps extends PropertyData {
  onClick?: () => void
  index?: number
}

export function PropertyCard({
  title,
  location,
  price,
  image,
  beds,
  baths,
  area,
  type,
  isLand = false,
  onClick,
  index = 0,
}: PropertyCardProps) {
  return (
    <Card 
      className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-card cursor-pointer animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Ver detalles</span>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
          <Badge
            variant={type === "Nuevo" ? "default" : "secondary"}
            className={type === "Nuevo" ? "bg-primary text-primary-foreground" : "bg-card/90 text-card-foreground"}
          >
            {type}
          </Badge>
        </div>
        
        <div className="absolute top-4 left-4 group-hover:-translate-x-full transition-transform duration-500">
          <Badge
            variant={type === "Nuevo" ? "default" : "secondary"}
            className={type === "Nuevo" ? "bg-primary text-primary-foreground" : "bg-card/90 text-card-foreground"}
          >
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-lg font-medium text-card-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          {!isLand && beds && (
            <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
              <Bed className="h-4 w-4" />
              <span>{beds}</span>
            </div>
          )}
          {!isLand && baths && (
            <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
              <Bath className="h-4 w-4" />
              <span>{baths}</span>
            </div>
          )}
          <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
            <Maximize className="h-4 w-4" />
            <span>{area}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
          <p className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{price}</p>
        </div>
      </CardContent>
    </Card>
  )
}
