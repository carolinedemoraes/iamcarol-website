import { ProjectCard } from "./ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  image?: string;
  github?: string;
  live?: string;
};

const otherProjects: Project[] = [
  {
    id: 2,
    title: "Pix Payment Flow",
    description:
      "Pix payment integration with dynamic QR code and global state management.",
    techs: ["Next.js", "TypeScript", "Zustand"],
    image: "/pix.png",
    live: "https://violetaeliz.org.br/quero-doar/metodos/pix",
  },
  {
    id: 3,
    title: "Form Validation with Zod",
    description:
      "Form validation with error handling and improved user feedback.",
    techs: ["React", "Zod"],
    image: "/Formteste.png",
  },
];

export function ProjectsGrid() {
  return (
    <div className="space-y-10">
      {/* SUBTITLE */}
      <h3 className="text-xl font-medium text-center opacity-80">
        Other Projects Soon
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
