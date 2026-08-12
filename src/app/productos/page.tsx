import type { Metadata } from "next";
import Link from "next/link";

import { ProductCatalogClient } from "@/components/product/ProductCatalogClient";
import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/ui/Container";
import { productCatalog } from "@/content/products/catalog";

export const metadata: Metadata = {
  title: "Productos | De La Luna Industria",
  description:
    "Explora el catálogo digital de De La Luna Industria y solicita una cotización para productos de limpieza e higiene.",
};

export default function ProductsPage() {
  const productFilterData = productCatalog.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
  }));
  const productCards = productCatalog.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <Container className="py-4 sm:py-8">
      <div>
        <header className="overflow-hidden rounded-3xl border border-brand-green-deep/10 bg-surface-soft px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Catálogo digital
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight font-semibold text-brand-green-deep sm:text-5xl lg:text-6xl">
            Conoce nuestro catálogo de productos
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-text-primary/80 sm:text-lg sm:leading-8">
            Consulta las referencias registradas en nuestro portafolio y abre
            cada ficha para revisar la información disponible.
          </p>
        </header>

        <ProductCatalogClient
          products={productFilterData}
          productCards={productCards}
        />

        <section
          aria-labelledby="catalog-quote-title"
          className="mt-16 rounded-3xl bg-brand-green-deep px-6 py-10 text-surface-primary sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14"
        >
          <div className="max-w-2xl">
            <h2
              id="catalog-quote-title"
              className="font-serif text-3xl font-semibold sm:text-4xl"
            >
              ¿Necesitas una cotización para tu organización?
            </h2>
            <p className="mt-4 leading-7 text-surface-primary/80">
              Comparte los datos de tu solicitud para iniciar el contacto
              comercial.
            </p>
          </div>
          <Link
            href="/cotizacion"
            className="mt-6 inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-md bg-surface-primary px-6 py-3 text-center text-sm font-semibold text-brand-green-deep transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep motion-reduce:transition-none sm:w-auto lg:mt-0"
          >
            Solicitar cotización
          </Link>
        </section>
      </div>
    </Container>
  );
}
