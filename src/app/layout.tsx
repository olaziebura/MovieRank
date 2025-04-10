import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "./_components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "MovieRank",
  description: "Najlepsza baza filmowa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-neutral-700">
        <NavBar />
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
