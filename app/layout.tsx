import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aya Beachwear - Premium Swimwear Collection',
  description: 'Discover our collection of premium beachwear designed for comfort and style. Vibrant colors, one-of-a-kind fabrics and intricate details.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

