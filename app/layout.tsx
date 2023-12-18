import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
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
      <body className="bg-black">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
