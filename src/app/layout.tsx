import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/elements/Navbar";
import { Footer } from "@/components/elements/Footer";
import { AOSInit } from "./aos";

const rubik = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yondika's Portfolio",
  description: "Yondika's Portfolio build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
