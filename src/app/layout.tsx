import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Vogaza",
  description: "Shop powered by PrestaShop",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="default off-canvas">
      <head>
        <link rel="preload" href="/fonts/MaterialIcons-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/karatone-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fontawesome-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fa-light-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script src="/js/global-vars.js" strategy="beforeInteractive" />
      </head>
      <body id="index" className="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled fullwidth off-canvas-inactive">
        {children}
        <Script src="/index_files/bottom-b9697052.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
