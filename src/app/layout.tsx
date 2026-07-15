import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.motion4frames.no"),
  title: {
    default: "Motion4Frames | Visual Positioning for Product-Based Brands",
    template: "%s | Motion4Frames",
  },
  description:
    "Motion4Frames turns ordinary product visuals into cinematic brand moments built for social media, websites, ads and launch campaigns.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Motion4Frames | Visual Positioning for Product-Based Brands",
    description:
      "Your product deserves more attention. Motion4Frames creates cinematic product visuals for campaigns, websites and launch content.",
    url: "https://www.motion4frames.no",
    siteName: "Motion4Frames",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motion4Frames cinematic product visualization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion4Frames | Visual Positioning for Product-Based Brands",
    description:
      "Your product deserves more attention. Cinematic product visuals for campaigns, websites and launch content.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
        </body>
    </html>
  );
}