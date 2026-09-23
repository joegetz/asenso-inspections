import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { BrandDefs } from "@/components/motif";
import { Nav } from "@/components/nav";
import { IdentityBand } from "@/components/identity-band";
import { Footer } from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const title =
  "Asenso Construction Quality | Special Inspection & QA/QC | California, Texas & the Mountain West";
const description =
  "Asenso runs construction quality programs across California, Texas, and the Mountain West: special inspection, structural observation, threshold inspection, and owner's QA/QC. ICC-certified inspectors, AHJ-ready documentation, principals on the job. Minority-owned, California DGS-certified small business (SBE/VSBE).";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
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
      <body className="min-h-full flex flex-col">
        <BrandDefs />
        <Nav />
        <IdentityBand />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
