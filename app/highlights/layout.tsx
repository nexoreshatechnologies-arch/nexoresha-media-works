import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Highlights Reel | Nexoresha Media Works Portfolio",
  description: "Explore our media portfolio. Watch high-impact vertical campaigns and luxury visual narratives crafted for our brand partners.",
  keywords: ["Nexoresha portfolio", "highlights reel", "cinematography showcase", "brand campaigns", "Nexoresha Media Works"],
  alternates: {
    canonical: 'https://nexoresha.tech/highlights',
  },
};

export default function HighlightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
