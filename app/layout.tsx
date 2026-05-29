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
  metadataBase: new URL('https://nexoresha.tech'),
  title: "Nexoresha Media Works | The Director's Eye for Your Brand",
  description: "High-tier cinematic branding and contemporary luxury media. We don't just create content; we direct your legacy.",
  keywords: ["social media management", "branding agency", "reels production", "cinematic marketing", "content strategy", "paid marketing", "Nexoresha"],
  authors: [{ name: "Nexoresha Media Works" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nexoresha.tech',
  },
  openGraph: {
    title: "Nexoresha Media Works",
    description: "The Director's Eye for Your Brand. Elite digital branding and cinematography.",
    url: 'https://nexoresha.tech',
    siteName: 'Nexoresha Media Works',
    type: "website",
    locale: "en_IN",
  },
  verification: {
    google: "t8GTxoQmFniqQETDBbJH1d3WdjmRA_RkF4kXU7OBjNA",
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
