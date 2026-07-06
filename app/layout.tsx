import type { Metadata } from "next";
import {
  Darumadrop_One,
  Zen_Kaku_Gothic_Antique,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const darumadropone = Darumadrop_One({
  weight: ["400"],
  variable: "--font-darumadrop-one",
  subsets: ["latin"],
});

const zenkakugothicantique = Zen_Kaku_Gothic_Antique({
  weight: ["900"],
  variable: "--font-zen-kaku-gothic-antique",
  subsets: ["latin"],
});

const spacemono = Space_Mono({
  weight: ["400"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "konohira's tech notes",
  description:
    "Things I thought I might forget, items for copy-pasting, things I found difficult, new things I learned, things I came to understand, and so on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${darumadropone.variable} ${zenkakugothicantique.variable} ${spacemono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
