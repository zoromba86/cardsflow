import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CardsFlow — Reliable Virtual Cards for Modern Online Payments",
  description: "The world's first virtual card issuance platform built on absolute zero-knowledge protocols. Experience total financial privacy with an industry-leading global merchant acceptance rate.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50`}
        suppressHydrationWarning
      >
        <link rel="preload" href="/frames/ezgif-frame-001.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        {children}
      </body>
    </html>
  );
}
