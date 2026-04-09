import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Asenso — Quality Oversight & Inspection Services | Southern California",
  description:
    "Special inspections, structural observation, and QA/QC program management across LA, Orange County, Riverside and San Bernardino. ICC-certified, minority-owned, pursuing DBE.",
  openGraph: {
    title: "Asenso — Quality Oversight & Inspection Services | Southern California",
    description:
      "Special inspections, structural observation, and QA/QC program management across LA, Orange County, Riverside and San Bernardino. ICC-certified, minority-owned, pursuing DBE.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
