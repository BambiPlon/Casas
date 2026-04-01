"use client"

import { useEffect, useState, useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: 300, suffix: "+", label: "Propiedades Frente al Mar" },
  { value: 12, suffix: "", label: "Destinos de Playa" },
  { value: 98, suffix: "%", label: "Clientes Felices" },
  { value: 45, suffix: "+", label: "Desarrollos Costeros" },
]

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [ref, isVisible] = useScrollAnimation<HTMLSpanElement>({ threshold: 0.5 })

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * target))

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isVisible, target, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-primary transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`text-center transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary-foreground mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
