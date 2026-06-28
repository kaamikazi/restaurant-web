import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif-custom",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wok On the Wild Side Redesign Concept | Fast Food & Desi Restaurant Lahore",
  description: "A modern unofficial website redesign concept for Wok On the Wild Side on Harbanspura Road, Lahore, focused on menu discovery, quick takeout calls, and local restaurant branding.",
  metadataBase: new URL("https://wokonwildside-redesign.demo"),
  openGraph: {
    title: "Wok On the Wild Side Redesign Concept",
    description: "A modern unofficial website redesign concept for Wok On the Wild Side in Lahore, Pakistan.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
