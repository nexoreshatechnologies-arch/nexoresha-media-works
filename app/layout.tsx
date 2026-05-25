import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

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
  title: "Nexoresha Media Works | The Director's Eye for Your Brand",
  description: "High-tier cinematic branding and contemporary luxury media. We don't just create content; we direct your legacy.",
  keywords: ["social media management", "branding agency", "reels production", "cinematic marketing", "content strategy", "paid marketing", "Nexoresha"],
  authors: [{ name: "Nexoresha Media Works" }],
  openGraph: {
    title: "Nexoresha Media Works",
    description: "The Director's Eye for Your Brand. Elite digital branding and cinematography.",
    type: "website",
    locale: "en_IN",
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
      </body>
    </html>
  );
}
