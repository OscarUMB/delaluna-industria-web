import Link from "next/link";

import { Container } from "@/components/ui/Container";

const pendingApprovedCopy = "[PENDIENTE: texto aprobado por la empresa]";

const marketSegments = [
  "Hogar",
  "Institucional y Empresas",
  "Agropecuario",
] as const;

export default function SolutionsPage() {
  return (
    <Container className="py-4 sm:py-8">
      <article className="space-y-16 sm:space-y-20">
        <header className="rounded-3xl bg-surface-soft px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Soluciones
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl lg:text-6xl">
            Soluciones a la medida de tu sector
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
            {pendingApprovedCopy}
          </p>
        </header>

        <section aria-labelledby="market-segments-title">
          <h2
            id="market-segments-title"
            className="font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
          >
            Segmentos
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {marketSegments.map((segment, index) => (
              <li
                key={segment}
                className="flex min-h-64 flex-col rounded-2xl border border-brand-green-deep/20 bg-surface-primary p-6 sm:p-8"
              >
                <span className="text-sm font-semibold text-brand-green-leaf">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-brand-green-deep">
                  {segment}
                </h3>
                <p className="mt-3 leading-7 text-text-primary/80">
                  {pendingApprovedCopy}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="special-quotes-title"
          className="rounded-3xl bg-surface-soft px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16"
        >
          <h2
            id="special-quotes-title"
            className="font-serif text-3xl font-semibold text-brand-green-deep sm:text-4xl"
          >
            Cotizaciones especiales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-primary/80">
            {pendingApprovedCopy}
          </p>
          <Link
            href="/cotizacion"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft sm:w-auto"
          >
            Solicitar cotización especial
          </Link>
        </section>
      </article>
    </Container>
  );
}
