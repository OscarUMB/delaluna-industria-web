import type { NextConfig } from "next";

const uncachedPageSources = [
  "/",
  "/nosotros",
  "/soluciones",
  "/contacto",
  "/cotizacion",
  "/productos/:slug",
] as const;

const noStoreHeaders = [
  {
    key: "Cache-Control",
    value: "private, no-cache, no-store, max-age=0, must-revalidate",
  },
];

const nextConfig: NextConfig = {
  deploymentId: process.env.NEXT_DEPLOYMENT_ID,
  async headers() {
    return uncachedPageSources.map((source) => ({
      source,
      headers: noStoreHeaders,
    }));
  },
};

export default nextConfig;
