import Link from "next/link"

const footerLinks = {
  propiedades: [
    { label: "Villas de Playa", href: "#" },
    { label: "Penthouses", href: "#" },
    { label: "Condominios", href: "#" },
    { label: "Casas Frente al Mar", href: "#" },
  ],
  terrenos: [
    { label: "Primera Línea", href: "#" },
    { label: "Vista al Mar", href: "#" },
    { label: "Acceso a Playa", href: "#" },
    { label: "Desarrollos", href: "#" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight">
                COSTA AZUL
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Especialistas en propiedades frente al mar. Hacemos realidad tu sueño de vivir junto al océano.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wider uppercase mb-6">
              Propiedades
            </h3>
            <ul className="space-y-3">
              {footerLinks.propiedades.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wider uppercase mb-6">
              Terrenos
            </h3>
            <ul className="space-y-3">
              {footerLinks.terrenos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wider uppercase mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Costa Azul. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Instagram
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Facebook
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
