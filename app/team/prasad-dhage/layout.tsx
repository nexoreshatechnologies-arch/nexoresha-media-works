import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Prasad N. Dhage | Co-Founder & Chief Editor | Nexoresha Media Works",
  description: "Prasad N. Dhage is the co-founder and visual editor behind Nexoresha Media Works, structuring cinematic transitions, sound design, and retention color-grading for luxury brands.",
  alternates: {
    canonical: 'https://www.nexoreshamedia.works/team/prasad-dhage',
  },
};

export default function PrasadDhageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
