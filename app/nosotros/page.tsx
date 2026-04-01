"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"
import { CheckCircle2, Award, Users, MapPin, Heart } from "lucide-react"

const features = [
  "Especialistas en propiedades costeras y frente al mar",
  "Conocimiento profundo de las mejores playas de México",
  "Portafolio exclusivo de propiedades con vista al océano",
  "Asesoría en inversiones turísticas y vacacionales",
  "Acompañamiento legal y financiero personalizado",
  "Red de contactos en todo el Caribe mexicano y Pacífico",
]

const values = [
  {
    icon: Heart,
    title: "Pasión por el Mar",
    description: "Amamos lo que hacemos. Cada propiedad que presentamos es un pedazo de paraíso que queremos compartir contigo.",
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description: "Cada cliente es único. Nos tomamos el tiempo de conocer tus sueños para encontrar la propiedad perfecta.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Solo trabajamos con las mejores propiedades. Nuestra reputación se basa en calidad, no cantidad.",
  },
  {
    icon: MapPin,
    title: "Conocimiento Local",
    description: "Conocemos cada rincón de la costa mexicana. Te llevamos a lugares que solo los locales conocen.",
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80"
            alt="Costa azul"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <p className="text-sm font-medium tracking-widest text-primary-foreground/80 uppercase mb-4">
              Nuestra Historia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 text-balance max-w-3xl">
              Expertos en la vida frente al mar
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              En Costa Azul, convertimos el sueño de vivir frente al mar en realidad. Con más de una década de experiencia en propiedades costeras, te ayudamos a encontrar el lugar perfecto donde el océano sea tu vecino.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    alt="Propiedad Costa Azul"
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
                  Por qué elegirnos
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 text-balance">
                  Tu socio de confianza en bienes raíces costeros
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Desde 2012, hemos ayudado a cientos de familias a encontrar su hogar frente al mar. Conocemos cada playa, cada atardecer y cada oportunidad que la costa mexicana tiene para ofrecer.
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

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              Nuestros Valores
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
              Lo que nos define
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedItem key={value.title} index={index} baseDelay={100}>
                <div className="text-center group cursor-default">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <value.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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
