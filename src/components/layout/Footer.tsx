import Link from "next/link";

import { Container } from "@/components/ui/Container";

const footerNavigation = [
  { href: "/", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-green-deep/20 bg-surface-soft text-text-primary">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-brand-green-deep">
              De La Luna Industria
            </p>
            <p className="mt-2 max-w-md text-sm text-text-primary/80">
              Información institucional y catálogo corporativo.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-text-primary hover:text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-brand-green-deep/20 pt-4 text-sm text-text-primary/80">
          © {new Date().getFullYear()} De La Luna Industria. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
