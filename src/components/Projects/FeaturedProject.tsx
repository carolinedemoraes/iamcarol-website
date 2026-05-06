export function FeaturedProject() {
  return (
    <section className="space-y-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="/violetaeliz.png"
            alt="Violeta Eliz project preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {/* LABEL */}
          <p className="text-sm uppercase tracking-wider text-[#f96d80]">
            Featured Project
          </p>

          {/* TITLE */}
          <h3 className="text-2xl md:text-3xl font-semibold">Violeta Eliz</h3>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg opacity-80 leading-relaxed">
            Worked on the development of an institutional website as part of a
            collaborative team. Contributed to both design and frontend
            implementation, focusing on user experience and real-world features.
          </p>

          {/* WHAT I DID */}
          <div>
            <h4 className="font-medium mb-2">What I did</h4>

            <ul className="text-sm space-y-2 opacity-80">
              <li>• Implemented Pix payment flow with dynamic QR code</li>
              <li>• Designed volunteer form in Figma</li>
              <li>• Built reusable UI components</li>
              <li>• Integrated frontend with backend APIs</li>
            </ul>
          </div>

          {/* TECHS */}
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Zustand", "Tailwind", "Figma"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-[#faf9f8] dark:bg-[#242424]"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* ACTION */}
          <a
            href="https://github.com/Projeto-FrontEnd-Fusion/Aceve-website-development"
            target="_blank"
            className="inline-block mt-2 text-[#f96d80] font-medium hover:underline"
          >
            Go to code →
          </a>
        </div>
      </div>
    </section>
  );
}
