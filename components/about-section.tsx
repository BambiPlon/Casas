"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const features = [
  "Especialistas en propiedades costeras y frente al mar",
  "Conocimiento profundo de las mejores playas de México",
  "Portafolio exclusivo de propiedades con vista al océano",
  "Asesoría en inversiones turísticas y vacacionales",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection animation="slide-right">
            <div className="relative group">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
                  alt="Propiedad frente al mar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-lg -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fade-up">
              <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
                Sobre Nosotros
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 text-balance">
                Expertos en la vida frente al mar
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                En Costa Azul, convertimos el sueño de vivir frente al mar en realidad. Con años de experiencia en propiedades costeras, te ayudamos a encontrar el lugar perfecto donde el océano sea tu vecino.
              </p>
            </AnimatedSection>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <AnimatedItem key={feature} index={index} baseDelay={150}>
                  <li className="flex items-start gap-3 group cursor-default">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
                  </li>
                </AnimatedItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
