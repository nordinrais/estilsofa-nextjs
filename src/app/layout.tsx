import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import fonts
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://estilsofa.com"),
  title: {
    default: "EstilSofa - Sofás de Diseño y Relax en Valencia | Fábrica Propia",
    template: "%s | EstilSofa",
  },
  description:
    "Descubre sofás relax, deslizantes y cama de alta gama en Valencia. Fabricación propia, personalización total y precios directos de fábrica. ¡Visita nuestra exposición!",
  keywords: [
    "sofás valencia",
    "fábrica de sofás",
    "sofás relax",
    "sofás a medida",
    "tienda sofás valencia",
    "estilsofa",
    "sillones relax",
    "sofás cama",
  ],
  authors: [{ name: "EstilSofa" }],
  creator: "EstilSofa",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://estilsofa.com",
    title: "EstilSofa - Sofás de Diseño y Relax en Valencia",
    description:
      "Sofás de alta calidad fabricados en Valencia. Personaliza tu descanso con nuestros modelos relax, deslizantes y cama.",
    siteName: "EstilSofa",
    images: [
      {
        url: "/assets/hero/sofa-afrodita-tapizado-claro-pata-metalica-ambiente.webp", // Usamos la imagen principal del hero como OG Image por defecto
        width: 1200,
        height: 630,
        alt: "Exposición EstilSofa Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EstilSofa - Sofás de Diseño y Relax en Valencia",
    description: "Sofás directos de fábrica en Valencia. Calidad premium y máximo confort.",
    images: ["/assets/hero/sofa-afrodita-tapizado-claro-pata-metalica-ambiente.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
