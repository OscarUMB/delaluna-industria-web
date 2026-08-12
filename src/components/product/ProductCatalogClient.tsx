"use client";

import { Fragment, useState, type ReactNode } from "react";

import type { Product } from "@/types/product";

const allCategoriesValue = "all";

interface ProductCatalogClientProps {
  products: readonly Pick<Product, "id" | "name" | "category">[];
  productCards: readonly ReactNode[];
}

export function ProductCatalogClient({
  products,
  productCards,
}: ProductCatalogClientProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(allCategoriesValue);

  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  ).sort((firstCategory, secondCategory) =>
    firstCategory.localeCompare(secondCategory, "es"),
  );

  const normalizedQuery = query.trim().toLocaleLowerCase("es-CO");
  const filteredEntries = products
    .map((product, index) => ({ product, card: productCards[index] }))
    .filter(({ product }) => {
      const matchesQuery = product.name
        .toLocaleLowerCase("es-CO")
        .includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === allCategoriesValue ||
        product.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });

  const hasActiveFilters =
    normalizedQuery.length > 0 || selectedCategory !== allCategoriesValue;
  const resultLabel = `${filteredEntries.length} ${
    filteredEntries.length === 1 ? "producto" : "productos"
  }`;

  function resetFilters() {
    setQuery("");
    setSelectedCategory(allCategoriesValue);
  }

  return (
    <section aria-labelledby="catalog-explorer-title" className="mt-12">
      <div className="rounded-2xl border border-brand-green-deep/15 bg-surface-soft p-5 sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-green-deep uppercase">
              Explorar catálogo
            </p>
            <h2
              id="catalog-explorer-title"
              className="mt-2 font-serif text-2xl font-semibold text-text-primary sm:text-3xl"
            >
              Encuentra una referencia
            </h2>
          </div>

          <p
            id="catalog-results-count"
            className="text-sm font-semibold text-brand-green-deep"
            aria-live="polite"
          >
            {resultLabel}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Buscar por nombre
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Escribe el nombre del producto"
              aria-describedby="catalog-results-count"
              className="min-h-11 w-full rounded-md border border-brand-green-deep/30 bg-surface-primary px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-primary/70 hover:border-brand-green-deep focus:border-brand-green-deep focus:ring-2 focus:ring-brand-green-deep/20 motion-reduce:transition-none"
            />
          </div>

          <div>
            <label
              htmlFor="product-category"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Categoría
            </label>
            <select
              id="product-category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              aria-describedby="catalog-results-count"
              className="min-h-11 w-full rounded-md border border-brand-green-deep/30 bg-surface-primary px-4 py-3 text-base text-text-primary outline-none transition-colors hover:border-brand-green-deep focus:border-brand-green-deep focus:ring-2 focus:ring-brand-green-deep/20 motion-reduce:transition-none"
            >
              <option value={allCategoriesValue}>Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-semibold text-brand-green-deep underline decoration-brand-green-deep/40 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep"
          >
            Limpiar filtros
          </button>
        ) : null}
      </div>

      {filteredEntries.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredEntries.map(({ product, card }) => (
            <Fragment key={product.id}>{card}</Fragment>
          ))}
        </div>
      ) : (
        <div
          className="mt-8 rounded-2xl border border-brand-green-deep/15 bg-surface-primary px-6 py-12 text-center"
          role="status"
        >
          <h3 className="font-serif text-2xl font-semibold text-brand-green-deep">
            No encontramos coincidencias
          </h3>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-text-primary/80">
            Ajusta el nombre o la categoría para consultar nuevamente el
            catálogo.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-brand-green-deep bg-surface-primary px-5 py-3 text-sm font-semibold text-brand-green-deep transition-colors hover:bg-brand-green-deep hover:text-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary motion-reduce:transition-none"
          >
            Mostrar todos los productos
          </button>
        </div>
      )}
    </section>
  );
}
