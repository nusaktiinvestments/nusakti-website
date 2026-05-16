import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nusakti Ecosystem | Strategic Investments & Manufacturing',
  description: 'Luxury institutional homepage showcasing strategic investments, advanced manufacturing, and AI-powered automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
