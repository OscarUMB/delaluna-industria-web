import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <Container className="py-4 sm:py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
          Contacto
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl">
          Hablemos sobre tus necesidades
        </h1>
        <p className="mt-6 text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
          Elige un canal directo o envíanos la información mediante el
          formulario.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <section
          aria-labelledby="direct-contact-title"
          className="rounded-2xl bg-surface-soft p-6 sm:p-8"
        >
          <h2
            id="direct-contact-title"
            className="font-serif text-3xl font-semibold text-text-primary"
          >
            Contacto directo
          </h2>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-semibold text-brand-green-deep">
                Teléfono
              </dt>
              <dd className="mt-1 text-lg text-text-primary">
                [PENDIENTE: teléfono]
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-brand-green-deep">
                Correo
              </dt>
              <dd className="mt-1 text-lg text-text-primary">
                [PENDIENTE: email]
              </dd>
            </div>
          </dl>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-brand-green-deep bg-surface-primary px-6 py-3 text-center text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft sm:w-auto"
          >
            Abrir WhatsApp
          </a>
        </section>

        <ContactForm />
      </div>
    </Container>
  );
}
