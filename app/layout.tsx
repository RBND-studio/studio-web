import type { Metadata } from "next";
import "./globals.css";
import { css } from "../styled-system/css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rbnd.studio/"),
  title: "RBND studio",
  description: "Hey, we are RBND studio.",
  openGraph: {
    type: "website",
    title: "RBND studio",
    url: "https://rbnd.studio/",
    description: "Hey, we are RBND studio.",
    images: "https://rbnd.studio/og.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "RBND studio",
    description: "Hey, we are RBND studio.",
    images: "https://rbnd.studio/og.png",
  },
  authors: [
    { name: "Ondřej Pešička" },
    { name: "Vojtěch Vidra" },
    { name: "David Pešička" },
    { name: "Filip Šíma" },
  ],
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
    <html lang="en">
      <body
        className={css({
          padding: "6.4rem 2.4rem",
          lgDown: {
            padding: "3.2rem 2.4rem",
          },
        })}
      >
        <main
          className={css({
            maxWidth: "960px",
            margin: "0 auto",
            width: "100%",
          })}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
