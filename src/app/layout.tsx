import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "De La Luna Industria | Productos Institucionales",
  description:
    "De La Luna Industria desarrolla y comercializa soluciones de limpieza e higiene corporativa y para el hogar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} flex min-h-full flex-col bg-surface-primary font-sans text-text-primary antialiased`}
      >
        <Header />
        <main id="contenido-principal" className="flex-1 py-8 sm:py-10">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
