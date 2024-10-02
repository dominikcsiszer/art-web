// app/layout.tsx (assuming you're using the /app directory in Next.js 13+)

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Weart App",
  description: "The event based social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {/* Navbar */}
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
