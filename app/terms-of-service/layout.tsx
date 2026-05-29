import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Nexoresha Media Works",
  description: "Read the Terms of Service of Nexoresha Media Works. Learn about client responsibilities, payments, refunds, and governing laws.",
  alternates: {
    canonical: 'https://www.nexoreshamedia.works/terms-of-service',
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
