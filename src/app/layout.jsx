import "./globals.css";
import { Play } from "next/font/google";

import Navbar from "@/components/Navbar";
import { AOSInit } from "./aos";
import Footer from "@/components/Footer";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Yondika Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={play.className}>
        <Navbar menu1="/works" menu2="/contact" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
