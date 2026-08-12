import { Benefits } from "@/components/sections/Benefits";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { InstitutionalTrust } from "@/components/sections/InstitutionalTrust";
import { MarketSolutions } from "@/components/sections/MarketSolutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <MarketSolutions />
      <InstitutionalTrust />
      <FinalCta />
    </>
  );
}
