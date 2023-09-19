import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RBND studio",
  description:
    "RBND studio is a digital studio based in Prague, Czechia. We create things.",
  openGraph: {
    type: "website",
    title: "RBND studio",
    url: "https://rbnd.studio/",
    description:
      "RBND studio is a digital studio based in Prague, Czechia. We create things.",
  },
  authors: [{ name: "Ondřej Pešička" }, { name: "Vojtěch Vidra" }],
  keywords: [
    "product design",
    "ux",
    "ui",
    "design",
    "digital design",
    "startups",
    "development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
