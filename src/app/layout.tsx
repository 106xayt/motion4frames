import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const title = "Motion4Frames | Vi markedsfører biler";
const description =
  "Foto, film og visuelle konsepter for bilbedrifter, bilutleie og biler som skal selges på FINN.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.motion4frames.no"),
  title: { default: title, template: "%s | Motion4Frames" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://www.motion4frames.no",
    siteName: "Motion4Frames",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bil filmet av Motion4Frames" }],
    locale: "nb_NO",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nb">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
