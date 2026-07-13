import type { Metadata } from "next";
import { Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signatureFont = Alex_Brush({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgetown Heritage Advisors | Independent Automotive Advisory",
  description:
    "Independent counsel for exceptional automobile acquisitions. Trusted guidance for discerning clients acquiring enthusiast, luxury, and collector automobiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${signatureFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}