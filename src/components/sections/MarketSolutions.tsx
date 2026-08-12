import Link from "next/link";

import { Container } from "@/components/ui/Container";

const pendingApprovedCopy = "[PENDIENTE: texto aprobado por la empresa]";

const marketSegments = [
  "Hogar",
  "Institucional y Empresas",
  "Agropecuario",
] as const;

export function MarketSolutions() {
  return (
    <section
      aria-labelledby="market-solutions-title"
      className="py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
              Soluciones por sector
            </p>
            <h2
              id="market-solutions-title"
              className="mt-3 font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              Un punto de partida para cada tipo de cliente
            </h2>
          </div>
          <Link
            href="/soluciones"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-brand-green-deep bg-surface-primary px-5 py-3 text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
          >
            Conocer todas las soluciones
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {marketSegments.map((segment, index) => (
            <li
              key={segment}
              className="flex min-h-64 flex-col justify-between rounded-2xl border border-brand-green-deep/15 bg-surface-primary p-6 sm:p-8"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-brand-green-deep">
                <span
                  className="size-2 rounded-full bg-brand-green-leaf"
                  aria-hidden="true"
                />
                0{index + 1}
              </span>
              <div className="mt-12">
                <h3 className="font-serif text-2xl font-semibold text-brand-green-deep">
                  {segment}
                </h3>
                <p className="mt-3 leading-7 text-text-primary/80">
                  {pendingApprovedCopy}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
