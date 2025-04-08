import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-secondary/80 backdrop-blur-lg border-b border-border p-4 shadow-md">
      <Link
        href="/"
        className="text-primary font-bold text-xl tracking-wide transition-all hover:text-primary-hover"
      >
        🎬 MovieRank.pl
      </Link>
    </nav>
  );
};
