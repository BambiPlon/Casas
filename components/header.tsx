"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoginModal } from "@/components/login-modal"
import { AppointmentModal } from "@/components/appointment-modal"

const navItems = [
  { label: "Propiedades", href: "/propiedades" },
  { label: "Terrenos", href: "/terrenos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                COSTA AZUL
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsLoginOpen(true)}>
                Iniciar Sesión
              </Button>
              <Button size="sm" onClick={() => setIsAppointmentOpen(true)}>
                Agendar Cita
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsLoginOpen(true)
                  }}
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsAppointmentOpen(true)
                  }}
                >
                  Agendar Cita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
    </>
  )
}
