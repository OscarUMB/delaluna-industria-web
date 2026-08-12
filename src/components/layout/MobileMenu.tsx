"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";

interface NavigationItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navigationItems: readonly NavigationItem[];
}

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-green-deep px-4 text-sm font-semibold text-brand-green-deep transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        {isOpen ? "Cerrar" : "Menú"}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-y border-brand-green-deep/20 bg-surface-primary"
        >
          <Container className="py-4">
            <nav aria-label="Navegación móvil">
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-3 font-medium text-text-primary hover:bg-surface-soft hover:text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 border-t border-brand-green-deep/20 pt-4 sm:grid-cols-2">
                <Link
                  href="/cotizacion"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green-deep px-4 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
                  onClick={closeMenu}
                >
                  Solicitar Cotización
                </Link>
                <Link
                  href="https://wa.me/573000000000?text=Hola,%20quisiera%20información%20sobre%20los%20productos%20institucionales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-green-deep px-4 text-center text-sm font-semibold text-brand-green-deep transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
                  onClick={closeMenu}
                >
                  WhatsApp
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
