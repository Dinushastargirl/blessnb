
import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat, La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const laBelle = La_Belle_Aurore({ weight: "400", subsets: ["latin"], variable: "--font-la-belle" });

export const metadata: Metadata = {
  title: "BlessndB | Digital Keepsake Studio",
  description: "Transform memories into timeless digital experiences. Minimalist, high-end digital gifting studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${laBelle.variable} font-sans bg-cream`}>
        {children}
      </body>
    </html>
  );
}
