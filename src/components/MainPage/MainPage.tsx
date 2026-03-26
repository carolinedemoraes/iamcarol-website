export function MainPage() {
  return (
    <>
      <main className="min-h-dvh flex flex-col pt-16 bg-[#faf9f8] text-[#222] dark:bg-[#121212] dark:text-[#f5f5f5]">
        <section className="min-h-dvh flex items-center justify-center">
          <div className="max-w-[900px] text-center flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl md:text-6xl italic">Hi</h2>

            <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-semibold text-[#f96d80] dark:text-[#ff9cae]">
              I am Carol!
            </h1>

            <p className="text-lg md:text-xl font-light">
              Front-end Developer focused on React, UX and accessibility
            </p>
          </div>
        </section>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#projects"
            className="
          px-6 py-3 rounded-2xl
          bg-white dark:bg-[#1e1e1e]
          text-[#222] dark:text-[#faf9f8]
          border border-transparent dark:border-white/5
          shadow-sm
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(255,122,146,0.15)]
          transition-all duration-300
        "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
          px-6 py-3 rounded-2xl
          border border-[#222] dark:border-[#faf9f8]
          text-[#222] dark:text-[#faf9f8]
          hover:bg-[#222] hover:text-white
          dark:hover:bg-white dark:hover:text-black
          transition-all duration-300
        "
          >
            Let's Work Together
          </a>
        </div>
      </main>
    </>
  );
}
