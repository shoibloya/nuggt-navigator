// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");

export const metadata: Metadata = {
  ...(base ? { metadataBase: new URL(base) } : {}),
  title: "Nuggt: Find the best products",
  description: "A growing hub of curated directories that you can filter by real buyer needs. Nuggt helps teams quickly identify best-fit software and services for their unique use cases. Our first directory is live—many more are on the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
