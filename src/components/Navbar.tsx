import { useState } from "react";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <button
  type="button"
  aria-label={
    isMenuOpen ? "Close navigation menu" : "Open navigation menu"
  }
  aria-controls="mobile-menu"
  aria-expanded={isMenuOpen}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
>
  <span className="h-0.5 w-5 rounded-full bg-slate-700" />
  <span className="h-0.5 w-5 rounded-full bg-slate-700" />
  <span className="h-0.5 w-5 rounded-full bg-slate-700" />
</button>

        <a
          href="#home"
          aria-label="Dev Stack home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5 lg:static lg:translate-x-0"
        >
          <span className="brand-gradient flex size-8 items-center justify-center rounded-lg text-sm font-extrabold text-white shadow-sm">
            DS
          </span>

          <span className="hidden text-xl font-bold tracking-tight text-slate-900 sm:inline">
            Dev{" "}
            <span className="text-pink-600">
              Stack
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-600 hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 lg:gap-5">
          <a
            href="#signin"
            className="text-xs font-medium text-slate-700 hover:text-pink-600 sm:text-sm"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm sm:px-4 sm:text-sm lg:px-5 lg:py-2.5"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {isMenuOpen && (
  <div
    id="mobile-menu"
    className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden"
  >
    <div className="flex flex-col gap-1">
      <a
        href="#home"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-lg bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-600"
      >
        Home
      </a>

      <a
        href="#technologies"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600"
      >
        Technologies
      </a>

      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600"
      >
        Projects
      </a>

      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600"
      >
        About
      </a>

      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600"
      >
        Contact
      </a>
    </div>
  </div>
)}
    </header>
  );
}

export default Navbar;