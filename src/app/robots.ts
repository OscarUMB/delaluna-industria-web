import type { MetadataRoute } from "next";

const defaultSiteUrl = "https://productosdelaluna.com";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl).replace(
    /\/+$/,
    "",
  );
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
