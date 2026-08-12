import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Naturaleza",
    description:
      "Una mirada consciente sobre los recursos y el entorno en cada decisión.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.6 19 3 20 2c0 7.5-2.7 14-9 14" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.16 13.05 12 12 16 12" />
      </svg>
    ),
  },
  {
    title: "Limpieza",
    description:
      "Soluciones pensadas para acompañar las rutinas de hogares y organizaciones.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z" />
        <path d="m19 15-.8 2.2L16 18l2.2.8L19 21l.8-2.2L22 18l-2.2-.8L19 15Z" />
        <path d="m5 2-.8 2.2L2 5l2.2.8L5 8l.8-2.2L8 5l-2.2-.8L5 2Z" />
      </svg>
    ),
  },
  {
    title: "Bienestar Técnico",
    description:
      "Criterio técnico y comunicación clara como base de cada solución.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Nuestros pilares
          </p>
          <h2
            id="benefits-title"
            className="mt-3 font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
          >
            Confianza construida desde lo esencial
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-2xl border border-brand-green-deep/20 bg-surface-primary p-6 sm:p-8"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-surface-soft text-brand-green-deep">
                {benefit.icon}
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-brand-green-deep">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-text-primary/80">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
