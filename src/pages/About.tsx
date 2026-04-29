export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* FOTO */}
        <div className="flex justify-center">
          <img
            src="/imgaboutme.png"
            alt="Carol sorrindo em frente a uma parede branca com detalhes coloridos na borda"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-[#f96d80] dark:text-[#ff9cae]">Me</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Hi, I’m <span className="text-[#f96d80]">Carol</span> — a Frontend
            Developer focused on building responsive React applications with
            attention to UX and accessibility.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            With a background in <span className="text-[#f96d80]">History</span>
            , I bring a strong analytical mindset, attention to detail, and a
            collaborative approach to problem-solving.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I’ve worked on real-world projects involving{" "}
            <span className="text-[#f96d80]">API integration</span>,{" "}
            <span className="text-[#f96d80]">state management</span>, and{" "}
            <span className="text-[#f96d80]">reusable UI components</span>,
            always aiming to create intuitive and meaningful user experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            I’m particularly interested in the intersection between{" "}
            <span className="text-[#f96d80]">design</span> and development,
            using tools like <span className="text-[#f96d80]">Figma</span> to
            bridge both worlds and build more thoughtful interfaces.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Currently based in <span className="text-[#f96d80]">Portugal</span>{" "}
            🇵🇹, I’m open to opportunities across Europe and remote teams.
          </p>
        </div>
      </div>
    </section>
  );
}
