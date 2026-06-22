import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { NetworkBackground } from "@/components/network-background";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-black font-sans">
      <NetworkBackground />
      <Navbar>
        <p className="text-lg text-zinc-50">Welcome to Spanda Connect</p>
      </Navbar>
      <main className="relative z-10 mx-auto flex flex-1 w-full max-w-3xl flex-col items-center justify-between gap-12 px-16 py-32 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Connecting universities, AI talent, and industry partners
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Spanda Connect is the platform where universities discover AI talent,
            students find real-world opportunities, and industry partners build
            meaningful collaborations that drive innovation.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-amber-400 px-5 text-black transition-colors hover:bg-amber-300 md:w-[158px]"
            href="/login"
          >
            Get Started
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-amber-400/40 px-5 text-amber-400 transition-colors hover:border-amber-400 hover:bg-amber-400/10 md:w-[158px]"
            href="#how-it-works"
          >
            Learn More
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}