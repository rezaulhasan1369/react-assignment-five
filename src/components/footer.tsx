function Footer() { 
    const currentYear = new Date().getFullYear();

  const linkClass =
    "text-xs text-slate-500 transition-colors hover:text-pink-600";

  return (
    <footer
      id="about"
      className="scroll-mt-20 border-t border-slate-100 bg-white px-5 pb-12 pt-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2 lg:pr-4">
            <a
              href="#home"
              aria-label="Dev Stack home"
              className="inline-flex items-center gap-2.5"
            >
              <span className="brand-gradient flex size-6 items-center justify-center rounded-md text-xs font-extrabold text-white">
                DS
              </span>

              <span className="text-lg font-bold text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <a
                href="https://github.com/rezaulhasan1369/react-assignment-five"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pink-600"
              >
                GitHub
              </a>

              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h2>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#home" className={linkClass}>
                  Home
                </a>
              </li>

              <li>
                <a href="#technologies" className={linkClass}>
                  Technologies
                </a>
              </li>

              <li className="text-xs text-slate-500">Projects</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h2>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#about" className={linkClass}>
                  About
                </a>
              </li>

              <li className="text-xs text-slate-500">Contact</li>
              <li className="text-xs text-slate-500">Careers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Legal
            </h2>

            <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );}

export default Footer;