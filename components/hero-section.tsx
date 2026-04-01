"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProperties = () => {
    document.getElementById("propiedades")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Playa tropical con aguas cristalinas"
        fill
        className={`object-cover transition-all duration-1000 ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        priority
      />
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Animated waves decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute bottom-0 w-[200%] h-24 animate-wave opacity-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-background">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`flex items-center justify-center gap-2 mb-6 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Waves className="h-5 w-5 text-secondary animate-pulse" />
            <p className="text-sm font-medium tracking-widest text-secondary uppercase">
              Propiedades Frente al Mar
            </p>
            <Waves className="h-5 w-5 text-secondary animate-pulse" />
          </div>
          
          <h1 
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight text-white mb-6 text-balance transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tu paraíso te espera a orillas del mar
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Descubre propiedades exclusivas con vista al océano y terrenos en las playas más hermosas. Vive donde otros sueñan con vacacionar.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300"
              onClick={scrollToProperties}
            >
              Ver Propiedades
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("terrenos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Terrenos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToProperties}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-all duration-700 delay-1000 hover:text-secondary ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
