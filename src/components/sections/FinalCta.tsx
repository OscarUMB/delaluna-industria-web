import Link from "next/link";

import { Container } from "@/components/ui/Container";

const whatsappHref =
  "https://wa.me/573000000000?text=Hola,%20quisiera%20información%20sobre%20los%20productos%20institucionales";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-green-deep px-6 py-12 text-surface-primary sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-yellow uppercase">
              Contacto comercial
            </p>
            <h2
              id="final-cta-title"
              className="mt-3 font-serif text-3xl font-semibold sm:text-4xl"
            >
              Conversemos sobre lo que necesitas
            </h2>
            <p className="mt-4 text-base leading-7 text-surface-primary/80 sm:text-lg sm:leading-8">
              Comparte tu solicitud para iniciar una conversación comercial con
              nuestro equipo.
            </p>
          </div>

          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/cotizacion"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-surface-primary px-6 py-3 text-center text-sm font-semibold text-brand-green-deep transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep motion-reduce:transition-none"
            >
              Solicitar cotización
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-surface-primary/70 px-6 py-3 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-surface-primary hover:text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep motion-reduce:transition-none"
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
