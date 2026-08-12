import type { MetadataRoute } from "next";

import { productCatalog } from "@/content/products/catalog";

const defaultSiteUrl = "https://productosdelaluna.com";
const staticRoutes = [
  "/",
  "/nosotros",
  "/soluciones",
  "/contacto",
  "/cotizacion",
] as const;

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl).replace(
    /\/+$/,
    "",
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const productPages: MetadataRoute.Sitemap = productCatalog.map((product) => ({
    url: `${siteUrl}/productos/${product.slug}`,
  }));

  return [...staticPages, ...productPages];
}
