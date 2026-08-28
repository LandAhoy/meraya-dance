import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meraya Dance — Dubai Movement Studio',
  description: 'A home for rhythm, expression and movement.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
