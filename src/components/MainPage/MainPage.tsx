import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Header } from "../Header/Header";
import { Projects } from "../Projects/Projects";

export function MainPage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh flex flex-col bg-[#faf9f8] text-[#222] dark:bg-[#121212] dark:text-[#f5f5f5]">
        {/* HERO */}
        <section className="min-h-dvh flex items-center justify-center px-6 relative">
          <div className="max-w-[900px] text-center flex flex-col items-center gap-6">
            {/* HEADLINE (agora principal) */}
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-tight">
              Front-end Developer focused on building accessible and
              user-friendly interfaces
            </h1>

            {/* SUBHEAD */}
            <p className="text-lg md:text-xl font-light max-w-xl opacity-80">
              Working with API integration, state management and reusable
              components to create meaningful user experiences.
            </p>

            {/* NOME (assinatura, não protagonista) */}
            <h2 className="text-xl md:text-4xl italic text-[#f96d80] dark:text-[#ff9cae]">
              Hi, I'm Carol Moraes!
            </h2>
          </div>

          {/* scroll */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm opacity-60 animate-bounce">
            ↓ scroll
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-6 md:py-10 px-2">
          <Projects />
        </section>

        {/* ABOUT */}
        <section id="about" className="py-6 md:py-10 px-2">
          <About />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-6 md:py-10 px-2">
          <Contact />
        </section>
      </main>
    </>
  );
}
