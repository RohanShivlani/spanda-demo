export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-amber-400/20 bg-black/60 px-6 py-4 backdrop-blur-sm">
      <p className="text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Spanda Connect. All rights reserved.
      </p>
    </footer>
  );
}
