import Link from "next/link";

import { Container } from "@/components/ui/Container";

const pendingApprovedCopy = "[PENDIENTE: texto aprobado por la empresa]";
const brandValues = ["Naturaleza", "Limpieza", "Bienestar"] as const;

export function InstitutionalTrust() {
  return (
    <section
      aria-labelledby="institutional-trust-title"
      className="rounded-3xl bg-surface-soft py-16 sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
              Identidad De La Luna
            </p>
            <h2
              id="institutional-trust-title"
              className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              Conoce nuestro propósito y enfoque
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
              {pendingApprovedCopy}
            </p>
            <Link
              href="/nosotros"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft motion-reduce:transition-none"
            >
              Conocer De La Luna
            </Link>
          </div>

          <div className="rounded-2xl bg-brand-green-deep p-6 text-surface-primary sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-surface-primary/75 uppercase">
              Valores de marca
            </p>
            <ul className="mt-6 divide-y divide-surface-primary/20">
              {brandValues.map((value, index) => (
                <li
                  key={value}
                  className="flex min-h-16 items-center justify-between gap-4 py-4"
                >
                  <span className="font-serif text-2xl font-semibold">
                    {value}
                  </span>
                  <span
                    className="text-sm font-semibold text-brand-yellow"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
