import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/navbar/navbar";

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
      <body>
        <NavBar />
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
