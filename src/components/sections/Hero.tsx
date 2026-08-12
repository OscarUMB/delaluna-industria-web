import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden rounded-3xl bg-surface-soft"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
              Soluciones de limpieza e higiene
            </p>
            <h1
              id="hero-title"
              className="max-w-3xl font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl lg:text-6xl"
            >
              Limpieza que cuida de ti y del planeta
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
              Desarrollamos y comercializamos soluciones de limpieza e higiene
              para empresas y hogares, con una experiencia cercana y clara.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/#productos"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
              >
                Ver productos
              </Link>
              <Link
                href="/#cotizacion"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-green-deep bg-surface-primary px-6 py-3 text-center text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>

          <div
            className="relative min-h-64 overflow-hidden rounded-2xl bg-brand-green-deep p-6 text-surface-primary sm:min-h-80 sm:p-8"
            aria-hidden="true"
          >
            <div className="absolute -top-12 -right-12 size-40 rounded-full bg-brand-aqua/60" />
            <div className="absolute -bottom-16 -left-10 size-52 rounded-full bg-brand-green-leaf/70" />
            <div className="relative flex h-full min-h-52 flex-col justify-between sm:min-h-64">
              <span className="font-serif text-2xl font-semibold">
                De La Luna Industria
              </span>
              <div className="ml-auto grid size-32 place-items-center rounded-full border border-surface-primary/40 bg-surface-primary/10 sm:size-40">
                <svg
                  viewBox="0 0 64 64"
                  className="size-20 text-surface-primary sm:size-24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M50 12C31 13 18 22 16 38c10 1 20-2 26-10" />
                  <path d="M15 51c5-13 14-23 27-30" />
                  <path d="M12 49c8 3 15 2 21-3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
