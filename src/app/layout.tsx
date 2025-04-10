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
      <body className="bg-accent-500">
        <NavBar />
        <main className="mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
