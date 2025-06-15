// app/layout.tsx
import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant,
  Alex_Brush,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Fixed Alex Brush configuration
const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  weight: "400",
  subsets: ["latin"], // Add subsets here
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Benedicta Agyei | Professional Makeup Artist",
  description:
    "10+ years experience in bridal, editorial & special occasion makeup. Enhance your natural beauty with personalized makeup services in Accra.",
  keywords: [
    "makeup artist Ghana",
    "bridal makeup Accra",
    "professional makeup",
    "wedding makeup artist",
    "editorial makeup",
    "special occasion makeup",
    "beauty services",
    "Ghana makeup artist",
  ],
  authors: [{ name: "Benedicta Agyei", url: "" }],
  creator: "Benedicta Agyei",
  publisher: "Benedicta Agyei Beauty Studio",
  // metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${cormorant.variable} ${alexBrush.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Provider>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
