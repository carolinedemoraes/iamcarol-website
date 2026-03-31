export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* FOTO */}
        <div className="flex justify-center">
          <img
            src="/aboutme.jpg"
            alt="Carol sorrindo em frente a uma parede branca"
            className="w-72 h-72 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* TEXTO */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-[#f96d80] dark:text-[#ff9cae]">Me</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Hi! I’m <span className="text-[#f96d80]">Carol</span> — a Front-End
            Developer with a background in{" "}
            <span className="text-[#f96d80]">History</span>. That path taught me
            to observe carefully, think critically, and collaborate with others.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I discovered the world of{" "}
            <span className="text-[#f96d80]">technology</span> during the
            pandemic, and it was love at first line of code. Since then, I’ve
            been diving into <span className="text-[#f96d80]">HTML</span>,{" "}
            <span className="text-[#f96d80]">CSS</span>,{" "}
            <span className="text-[#f96d80]">JavaScript</span>, and{" "}
            <span className="text-[#f96d80]">React</span>.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I’m also passionate about{" "}
            <span className="text-[#f96d80]">design</span>—exploring{" "}
            <span className="text-[#f96d80]">Figma</span> helped me understand
            how UX/UI and development work together to create meaningful digital
            experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I currently live in <span className="text-[#f96d80]">Portugal</span>{" "}
            🇵🇹 and I’m looking for my{" "}
            <span className="text-[#f96d80]">first opportunity</span> in the
            field. I’d love to connect and collaborate on something creative!
          </p>
        </div>
      </div>
    </section>
  );
}
