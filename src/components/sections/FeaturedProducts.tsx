import Link from "next/link";

import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/ui/Container";
import { productCatalog } from "@/content/products/catalog";

export function FeaturedProducts() {
  return (
    <section
      id="productos"
      aria-labelledby="featured-products-title"
      className="bg-surface-soft py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
              Portafolio
            </p>
            <h2
              id="featured-products-title"
              className="mt-3 font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              Productos destacados
            </h2>
            <p className="mt-4 text-base leading-7 text-text-primary/80 sm:text-lg">
              Conoce las referencias registradas en nuestro catálogo digital.
            </p>
          </div>

          <Link
            href="/productos"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-brand-green-deep bg-surface-primary px-5 py-3 text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft motion-reduce:transition-none"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
