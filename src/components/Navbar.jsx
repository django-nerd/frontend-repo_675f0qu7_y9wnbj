import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-pink-400/90 shadow-[0_0_30px_-5px_rgba(244,114,182,0.8)]" />
              <span className="text-white font-semibold tracking-tight text-lg">יופי בסטייל</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-white/80">
              <a className="hover:text-white transition" href="#services">טיפולים</a>
              <a className="hover:text-white transition" href="#about">עליי</a>
              <a className="hover:text-white transition" href="#contact">יצירת קשר</a>
            </nav>

            <button className="md:hidden text-white/80">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
