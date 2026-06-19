import Link from "next/link";

export function Navbar() {
  return (
    <nav className="relative z-10 flex w-full items-center justify-between border-b border-amber-400/20 bg-black/60 px-6 py-4 backdrop-blur-sm">
      <Link
        href="/"
        className="text-xl font-semibold tracking-tight text-amber-400"
      >
        Spanda Connect
      </Link>
      <Link
        href="/login"
        className="flex h-10 items-center justify-center rounded-full bg-amber-400 px-5 text-sm font-medium text-black transition-colors hover:bg-amber-300"
      >
        Login
      </Link>
    </nav>
  );
}
