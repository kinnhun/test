import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#EAD8C2]/30 bg-[#FAF0E6]/98 backdrop-blur-xl transition-all duration-700 shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-16">
        <Link href="/" className="group flex items-center gap-3 transition-all duration-400 hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center bg-[#EAD8C2] rounded-lg text-[#2a2a2a] shadow-soft transition-all duration-400 group-hover:shadow-soft-lg">
            <span className="text-xs font-medium tracking-[0.2em]">CN</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#2a2a2a]">
              Creative Portfolio
            </span>
            <span className="text-[10px] font-light text-gray-600 tracking-[0.1em]">
              Photographer · Model · Creative Director
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.15em] text-gray-700 md:flex">
          <Link href="/#work" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            Work
          </Link>
          <Link href="/designer" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            Designer
          </Link>
          <Link href="/photography-album" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            Album
          </Link>
          <Link href="/#about" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            About
          </Link>
          <Link href="/services" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            Services
          </Link>
          <Link href="/#contact" className="relative transition-all duration-400 hover:text-[#2a2a2a] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#EAD8C2] after:transition-all after:duration-400 hover:after:w-full">
            Contact
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="hidden items-center gap-2 bg-[#EAD8C2] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-[#2a2a2a] rounded-full transition-all duration-400 hover:bg-[#EAD8C2]/90 hover:scale-105 hover:-translate-y-0.5 hover:shadow-soft-lg md:inline-flex"
        >
          <AppIcon name="EnvelopeIcon" size={14} />
          Let&apos;s Talk
        </Link>
        <button className="inline-flex h-10 w-10 items-center justify-center border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm text-[#3a3a3a] rounded-lg transition-all duration-300 hover:border-[#EAD8C2] hover:bg-[#EAD8C2]/20 hover:shadow-soft md:hidden">
          <AppIcon name="Bars3Icon" size={18} />
        </button>
      </div>
    </header>
  );
}


