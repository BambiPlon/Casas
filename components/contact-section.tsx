"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+52 998 123 4567" },
  { icon: Mail, label: "Email", value: "hola@costaazul.mx" },
  { icon: MapPin, label: "Oficina Principal", value: "Cancún, Quintana Roo" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Contáctanos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 text-balance">
              Estamos aquí para ayudarte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos tu sueño de vivir frente al mar y te ayudaremos a hacerlo realidad. Nuestros asesores conocen cada rincón de la costa.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection animation="slide-right">
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-fade-up">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Nos pondremos en contacto contigo pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
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
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
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
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
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
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos tu sueño: playa, tipo de propiedad, ubicación ideal..."
                        rows={4}
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

            <AnimatedSection animation="slide-left" delay={200} className="flex flex-col justify-center">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <AnimatedItem key={item.label} index={index} baseDelay={150}>
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">{item.value}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Horario de atención</p>
                  <p className="text-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                  <p className="text-foreground">Sábados: 10:00 - 14:00</p>
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
