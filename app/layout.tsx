import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ancient Spells - Powerful Love Spells, Money Spells & Mystical Services",
  description: "Transform your life with powerful ancient spells for love, money, healing, protection, and success. Authentic spell casting by master practitioners. Love spells, money spells, healing spells, protection spells, success spells. 98% success rate, 10,000+ satisfied clients.",
  keywords: "spells, spell casting, love spells, money spells, healing spells, protection spells, success spells, ancient spells, witchcraft, magic, energy work, spiritual transformation, soulmate attraction, wealth attraction, psychic protection, energy healing, manifestation spells, authentic magic, master practitioners, mystical services",
  authors: [{ name: "Spells Mystical Services" }],
  creator: "Spells Mystical Services",
  publisher: "Spells Mystical Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://spells-mystical.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Spells - Mystical Transformation & Spell Casting Services",
    description: "Transform your life with powerful, personalized spells for love, money, healing, protection, and success. Master practitioners with 15+ years experience.",
    url: 'https://spells-mystical.com',
    siteName: 'Spells Mystical Services',
    images: [
      {
        url: '/hero_spells.png',
        width: 1200,
        height: 630,
        alt: 'Spells Mystical Services - Transform Your Life',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spells - Mystical Transformation & Spell Casting Services",
    description: "Transform your life with powerful, personalized spells for love, money, healing, protection, and success.",
    images: ['/hero_spells.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
