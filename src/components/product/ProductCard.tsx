import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.images
    .map((image) => image.trim())
    .find((image) => image.startsWith("/") && !image.startsWith("//"));

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-green-deep/15 bg-surface-primary shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand-green-deep/35 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-4/3 overflow-hidden bg-surface-soft">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
          />
        ) : (
          <div
            className="grid h-full place-items-center px-6 text-center text-brand-green-deep"
            role="img"
            aria-label={`Imagen de ${product.name} pendiente de aprobación`}
          >
            <div>
              <svg
                viewBox="0 0 24 24"
                className="mx-auto size-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <p className="mt-4 text-xs font-semibold tracking-wide uppercase">
                Imagen pendiente de aprobación
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="w-fit rounded-full border border-brand-green-deep/15 bg-surface-soft px-3 py-1 text-xs font-semibold tracking-wide text-brand-green-deep uppercase">
          {product.category}
        </p>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-text-primary">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 leading-7 text-text-primary/80">
          {product.shortDescription}
        </p>
        <Link
          href={`/productos/${product.slug}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md border border-brand-green-deep bg-surface-primary px-5 py-3 text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
          aria-label={`Ver ficha de ${product.name}`}
        >
          Ver ficha
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
