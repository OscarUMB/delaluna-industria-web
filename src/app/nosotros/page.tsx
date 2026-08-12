import Link from "next/link";

import { Container } from "@/components/ui/Container";

const pendingApprovedCopy = "[PENDIENTE: texto aprobado por la empresa]";

const corporateValues = ["Naturaleza", "Limpieza", "Bienestar"] as const;

export default function AboutPage() {
  return (
    <Container className="py-4 sm:py-8">
      <article className="space-y-16 sm:space-y-20">
        <header className="rounded-3xl bg-surface-soft px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Nosotros
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl lg:text-6xl">
            Nuestra Historia y Capacidad Técnica
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
            {pendingApprovedCopy}
          </p>
        </header>

        <section aria-labelledby="purpose-values-title">
          <div className="max-w-2xl">
            <h2
              id="purpose-values-title"
              className="font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              Propósito y Valores
            </h2>
            <p className="mt-4 leading-7 text-text-primary/80">
              {pendingApprovedCopy}
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {corporateValues.map((value) => (
              <li
                key={value}
                className="rounded-2xl border border-brand-green-deep/20 bg-surface-primary p-6 sm:p-8"
              >
                <div
                  className="size-3 rounded-full bg-brand-green-leaf"
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-serif text-2xl font-semibold text-brand-green-deep">
                  {value}
                </h3>
                <p className="mt-3 leading-7 text-text-primary/80">
                  {pendingApprovedCopy}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="technical-capacity-title"
          className="rounded-3xl bg-brand-green-deep px-6 py-10 text-surface-primary sm:px-10 sm:py-12 lg:px-16"
        >
          <h2
            id="technical-capacity-title"
            className="font-serif text-3xl font-semibold sm:text-4xl"
          >
            Capacidad Técnica
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-surface-primary/80 sm:text-lg sm:leading-8">
            {pendingApprovedCopy}
          </p>
        </section>

        <section
          aria-label="Contacto comercial"
          className="border-t border-brand-green-deep/20 pt-10 text-center"
        >
          <p className="text-base leading-7 text-text-primary/80">
            {pendingApprovedCopy}
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary sm:w-auto"
          >
            Contactar a un asesor
          </Link>
        </section>
      </article>
    </Container>
  );
}
