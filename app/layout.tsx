import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
