import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-header-background px-xl py-md shadow-sm">
      <nav className="flex items-center justify-between">
        <div className="gap-lg flex">
          <Link
            href="/"
            className="text-foreground no-underline hover:underline"
          >
            Home
          </Link>
          <Link
            href="/cv"
            className="text-foreground no-underline hover:underline"
          >
            CV
          </Link>
          <Link
            href="/blog"
            className="text-foreground no-underline hover:underline"
          >
            Blog
          </Link>
        </div>
        <button type="button">Theme</button>
      </nav>
    </header>
  );
}
