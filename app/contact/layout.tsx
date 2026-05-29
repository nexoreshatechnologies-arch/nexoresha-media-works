import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Start Your Project | Nexoresha Media Works",
  description: "Get in touch with Nexoresha Media Works. Outline your brand targets and let our directors craft a premium digital identity for your brand.",
  keywords: ["contact Nexoresha", "branding inquiry", "content strategy inquiry", "hire social media manager", "Nexoresha Media Works"],
  alternates: {
    canonical: 'https://nexoresha.tech/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
