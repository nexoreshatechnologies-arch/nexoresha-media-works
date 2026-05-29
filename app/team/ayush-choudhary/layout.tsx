import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ayush Choudhary | Founder & Director | Nexoresha Ventures",
  description: "Ayush Choudhary is the founder of Nexoresha Ventures (Technologies, Tales, and Media Works), operating at the intersection of custom engineering, branding and cinematic marketing.",
  alternates: {
    canonical: 'https://www.nexoreshamedia.works/team/ayush-choudhary',
  },
};

export default function AyushChoudharyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
