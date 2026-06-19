export function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] bg-white px-6 py-4 dark:border-white/[.145] dark:bg-black">
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Spanda Connect. All rights reserved.
      </p>
    </footer>
  );
}
