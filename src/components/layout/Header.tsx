import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";

const navigationItems = [
  { href: "/", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  return (
    <header className="relative z-50 border-b border-brand-green-deep/20 bg-surface-primary text-text-primary">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6 py-2">
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
            aria-label="De La Luna Industria, inicio"
          >
            De La Luna Industria
          </Link>

          <nav className="hidden lg:block" aria-label="Navegación principal">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:bg-surface-soft hover:text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/cotizacion"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green-deep px-4 text-center text-sm font-semibold text-surface-primary hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
            >
              Solicitar Cotización
            </Link>
            <Link
              href="https://wa.me/573000000000?text=Hola,%20quisiera%20información%20sobre%20los%20productos%20institucionales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-green-deep px-4 text-center text-sm font-semibold text-brand-green-deep hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
            >
              WhatsApp
            </Link>
          </div>

          <MobileMenu navigationItems={navigationItems} />
        </div>
      </Container>
    </header>
  );
}
