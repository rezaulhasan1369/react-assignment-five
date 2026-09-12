import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-14 bg-white px-5 py-8 lg:scroll-mt-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:min-h-[420px] lg:grid-cols-12">
        <div className="text-center lg:col-span-7 lg:pr-8 lg:text-left">
          <h1
            id="hero-heading"
            className="text-[30px] leading-[1.25] font-extrabold tracking-[-0.75px] text-slate-950 sm:text-4xl lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]"
          >
            <span className="block">Build Your Ideal</span>

            <span className="brand-gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 lg:mx-0 lg:mt-6 lg:text-lg lg:leading-[29px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mx-auto mt-7 grid w-full max-w-[350px] grid-cols-2 gap-3 lg:mx-0 lg:mt-10">
            <a
              href="#technologies"
              className="brand-gradient flex min-h-10 items-center justify-center rounded-lg px-3 text-center text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:text-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-xs font-medium text-slate-700 transition-colors hover:border-pink-300 hover:text-pink-600 sm:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[327px] items-center justify-center lg:col-span-5 lg:max-w-[350px]">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-pink-200/40 to-violet-300/40 blur-3xl" />

          <img
            src={heroImage}
            alt="An isometric illustration representing a modern development stack"
            className="relative z-10 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;