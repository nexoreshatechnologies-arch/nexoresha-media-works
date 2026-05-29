import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Nexoresha Media Works",
  description: "Read the Privacy Policy of Nexoresha Media Works. Understand how we collect, use, and protect your personal and business data.",
  alternates: {
    canonical: 'https://www.nexoreshamedia.works/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
