import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/site";

/**
 * Three roles, deliberately distinct.
 *
 * Archivo is an industrial grotesque with enough weight to carry headlines
 * without shouting. IBM Plex Sans was drawn for a technology company and holds
 * up in long running text. IBM Plex Mono carries every label, metric, and
 * measurement, which is what gives the page its spec-sheet character: on an
 * engineering portfolio, numbers should look like data rather than decoration.
 */
const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s`,
  },
  description: siteMetadata.description,
  applicationName: "Ocean West Portfolio",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
