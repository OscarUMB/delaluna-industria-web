import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";

export default function QuotePage() {
  return (
    <Container className="py-4 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Cotización
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl">
            Solicita precios institucionales
          </h1>
          <p className="mt-6 text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
            Completa tus datos y la información necesaria para preparar tu
            solicitud comercial.
          </p>
        </header>

        <section aria-label="Formulario de cotización" className="mt-10">
          <QuoteForm />
        </section>
      </div>
    </Container>
  );
}
