import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-[70vh]
        flex items-center justify-center
        px-6 py-24
      "
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Let’s <span className="text-[#f96d80]">work together</span>
        </h2>

        {/* TEXT */}
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          I’m currently looking for my first opportunity in tech. If you have a
          project, an idea, or just want to connect — I’d love to hear from you.
        </p>

        {/* CONTACT LINKS */}
        <div className="flex flex-col items-center gap-4 text-lg">
          <a
            href="mailto:caroliineedemoraes@gmail.com"
            className="
              flex items-center gap-2
              hover:text-[#f96d80]
              transition-colors
            "
          >
            <FiMail />
            caroliineedemoraes@gmail.com
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              hover:text-[#f96d80]
              transition-colors
            "
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/carolinemmoraes"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              hover:text-[#f96d80]
              transition-colors
            "
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
