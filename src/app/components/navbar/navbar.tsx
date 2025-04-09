import Link from "next/link";

export const NavBar = () => {
  return (
    // TODO: Style navigation as on design
    <nav className="flex bg-accent-500 text-neutral-50 px-8 py-6">
      <Link href="/" className="text-neutral-700">
        🎬
      </Link>
      {/* TODO: Create links to subpages */}
    </nav>
  );
};
