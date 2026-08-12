import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { productCatalog } from "@/content/products/catalog";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-4 sm:py-8">
      <article>
        <header className="max-w-3xl">
          <p className="w-fit rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold tracking-wide text-brand-green-deep uppercase">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl">
            {product.name}
          </h1>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div
            className="grid aspect-square place-items-center rounded-2xl border border-brand-green-deep/20 bg-surface-soft text-brand-green-deep"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-20 sm:size-24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
          </div>

          <div>
            <p className="text-lg leading-8 text-text-primary">
              {product.shortDescription}
            </p>

            <section
              aria-labelledby="verified-benefits-title"
              className="mt-8 border-t border-brand-green-deep/20 pt-8"
            >
              <h2
                id="verified-benefits-title"
                className="font-serif text-2xl font-semibold text-brand-green-deep"
              >
                Beneficios verificados
              </h2>
              <ul className="mt-4 space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li
                    key={`${product.id}-benefit-${index}`}
                    className="flex gap-3 leading-7 text-text-primary"
                  >
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full bg-brand-green-leaf"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="presentations-title"
              className="mt-8 border-t border-brand-green-deep/20 pt-8"
            >
              <h2
                id="presentations-title"
                className="font-serif text-2xl font-semibold text-brand-green-deep"
              >
                Presentaciones disponibles
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.presentations.map((presentation, index) => (
                  <li
                    key={`${product.id}-presentation-${index}`}
                    className="rounded-xl border border-brand-green-deep/20 bg-surface-soft p-4"
                  >
                    <p className="font-semibold text-text-primary">
                      {presentation.label}
                    </p>
                    <p className="mt-1 text-sm text-text-primary/80">
                      {presentation.volume} {presentation.unit}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="precautions-title"
              className="mt-8 border-t border-brand-green-deep/20 pt-8"
            >
              <h2
                id="precautions-title"
                className="font-serif text-2xl font-semibold text-brand-green-deep"
              >
                Precauciones
              </h2>
              <ul className="mt-4 space-y-3">
                {product.precautions.map((precaution, index) => (
                  <li
                    key={`${product.id}-precaution-${index}`}
                    className="flex gap-3 leading-7 text-text-primary"
                  >
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full bg-brand-yellow"
                      aria-hidden="true"
                    />
                    <span>{precaution}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Link
              href="/#cotizacion"
              className="mt-10 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-center text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary sm:w-auto"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </article>
    </Container>
  );
}
