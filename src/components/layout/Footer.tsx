import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAD8C2]/30 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-xs text-gray-600 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-[#2a2a2a]">
            © {new Date().getFullYear()} Creative Portfolio. All rights reserved.
          </p>
          <p className="text-[11px] font-light text-gray-500">
            Professional Photography & Modeling Services
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/privacy" className="font-light hover:text-[#2a2a2a] transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-light hover:text-[#2a2a2a] transition-colors duration-300">
            Terms of Service
          </Link>
          <span className="hidden h-4 w-px bg-[#EAD8C2]/40 lg:inline-block" />
          <p className="text-[11px] font-light text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}


