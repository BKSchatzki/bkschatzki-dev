import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "B.K. Schatzki, SWE",
  description: "The guy who makes the things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar scrollbar-track-black scrollbar-thumb-neutral-400 overflow-y-scroll bg-black text-neutral-300">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
