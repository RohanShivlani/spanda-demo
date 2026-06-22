import Link from "next/link";

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="relative z-10 flex w-full flex-col border-b border-amber-400/20 bg-black/60 backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-6 py-4">
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
      </div>
      {children && (
        <div className="px-6 py-2 text-zinc-50">
          {children}
        </div>
      )}
    </nav>
  );
}