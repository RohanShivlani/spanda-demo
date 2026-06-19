import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-black/[.08] bg-white px-6 py-4 dark:border-white/[.145] dark:bg-black">
      <Link href="/" className="flex items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Spanda logo"
          width={100}
          height={20}
          priority
        />
      </Link>
      <Link
        href="/login"
        className="flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Login
      </Link>
    </nav>
  );
}
