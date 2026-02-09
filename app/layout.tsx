import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { personSchema } from "@/lib/seo";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.metadata.baseUrl),
  title: site.metadata.title,
  description: site.metadata.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    siteName: site.metadata.siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jonathan Hersh, PhD"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pb-20 lg:pb-0">{children}</main>
        <StickyMobileCta />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
      </body>
    </html>
  );
}
