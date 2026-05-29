import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MonkeyCursor from "@/components/MonkeyCursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexoreshamedia.works'),
  title: "Nexoresha Media Works | Social Media Management & Branding Agency",
  description: "Premium social media management, content creation, branding, reels production, performance marketing and professional shoots for growing businesses.",
  keywords: [
    "social media agency",
    "social media management",
    "branding agency",
    "instagram marketing",
    "reels production",
    "content strategy",
    "digital marketing",
    "Nexoresha Media Works"
  ],
  authors: [{ name: "Nexoresha Media Works" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.nexoreshamedia.works',
  },
  openGraph: {
    title: "Nexoresha Media Works | Social Media Management & Branding Agency",
    description: "Premium social media management, content creation, branding, reels production, performance marketing and professional shoots for growing businesses.",
    url: 'https://www.nexoreshamedia.works',
    siteName: 'Nexoresha Media Works',
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Nexoresha Media Works Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexoresha Media Works | Social Media Management & Branding Agency",
    description: "Premium social media management, content creation, branding, reels production, performance marketing and professional shoots for growing businesses.",
    images: ["/logo.png"],
  },
  verification: {
    google: "t8GTxoQmFniqQETDBbJH1d3WdjmRA_RkF4kXU7OBjNA",
    yandex: "750cf12607b8b736",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9EEDC] text-[#1E1E1E]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <CartDrawer />
        <Footer />
        <MonkeyCursor />
      </body>
    </html>
  );
}
