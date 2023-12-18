import type { Metadata } from "next";
import "./globals.css";

import pageData from "@/data/pageData";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "B.K. Schatzki, SWE",
  description: "The guy who makes the things.",
};

export default function RootLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) {
  const thisPage = pageData.find((element) => element.title === page);

  return (
    <html lang="en">
      <body
        className={`transition duration-500 ${thisPage?.styleClasses.bgColor}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
