import { FeaturedProject } from "./FeaturedProject";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Selected <span className="text-[#f96d80]">Projects</span>
          </h2>

          <p className="text-lg opacity-70 max-w-xl mx-auto">
            {/*A selection of projects focused on UI, UX and real-world
            functionality.*/}
          </p>
        </div>

        {/* FEATURED */}
        <FeaturedProject />

        {/* OUTROS */}
        <ProjectsGrid />
      </div>
    </section>
  );
}
