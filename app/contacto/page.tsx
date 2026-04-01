"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+52 998 123 4567", href: "tel:+529981234567" },
  { icon: Mail, label: "Email", value: "hola@costaazul.mx", href: "mailto:hola@costaazul.mx" },
  { icon: MapPin, label: "Oficina Principal", value: "Av. Bonampak 123, Cancún, Quintana Roo", href: "#" },
]

const offices = [
  {
    city: "Cancún",
    address: "Av. Bonampak 123, Zona Hotelera",
    phone: "+52 998 123 4567",
    image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80",
  },
  {
    city: "Tulum",
    address: "Av. Tulum 456, Centro",
    phone: "+52 984 987 6543",
    image: "https://images.unsplash.com/photo-1682687220742-aba19b51f36a?w=600&q=80",
  },
  {
    city: "Puerto Vallarta",
    address: "Paseo de la Marina 789",
    phone: "+52 322 555 1234",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80",
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
    }, 3000)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt="Playa contacto"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-5 w-5 text-white/80" />
              <p className="text-sm font-medium tracking-widest text-white/80 uppercase">
                Contacto
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 text-balance">
              Estamos aquí para ayudarte
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Cuéntanos tu sueño de vivir frente al mar y te ayudaremos a hacerlo realidad. Nuestros asesores conocen cada rincón de la costa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection animation="slide-right">
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Envíanos un mensaje
                </h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-fade-up">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Un asesor se pondrá en contacto contigo pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nombre completo
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="transition-all duration-300 focus:scale-[1.01]"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Correo electrónico
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="transition-all duration-300 focus:scale-[1.01]"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+52 55 1234 5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="transition-all duration-300 focus:scale-[1.01]"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                          Interesado en
                        </label>
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="propiedad">Comprar propiedad</option>
                          <option value="terreno">Comprar terreno</option>
                          <option value="inversion">Inversión</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Tu mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos sobre tu proyecto ideal: ubicación, tipo de propiedad, presupuesto..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group transform hover:scale-[1.02] transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Enviar Mensaje
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slide-left" delay={200} className="flex flex-col justify-center">
              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <AnimatedItem key={item.label} index={index} baseDelay={150}>
                    <a 
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">{item.value}</p>
                      </div>
                    </a>
                  </AnimatedItem>
                ))}
              </div>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="p-6 bg-muted rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-foreground">Horario de atención</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Lunes a Viernes: 9:00 - 19:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                    <p>Domingos: Citas previa agenda</p>
                  </div>
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Nuestras Oficinas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
              Visítanos en persona
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <AnimatedItem key={office.city} index={index} baseDelay={100}>
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={office.image}
                      alt={office.city}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                    <p className="text-primary font-medium">{office.phone}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
