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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
            Portafolio
          </p>
          <h2
            id="featured-products-title"
            className="mt-3 font-serif text-3xl font-semibold text-text-primary sm:text-4xl"
          >
            Nuestras soluciones
          </h2>
          <p className="mt-4 text-base leading-7 text-text-primary/80 sm:text-lg">
            Explora el catálogo de soluciones disponibles para empresas y
            hogares.
          </p>
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
