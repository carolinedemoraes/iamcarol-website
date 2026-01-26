import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsGrid.module.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  size: "large" | "medium" | "small";
  image?: string;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: "Violeta Eliz",
    description:
      "Institutional website developed using an original layout in Figma. I am part of the project's frontend development team.",
    techs: ["React", "Sass", "Figma"],
    size: "medium",
    image: "/violetaeliz.png",
    live: "https://violetaeliz.com",
  },
  {
    id: 2,
    title: "Pix Payment",
    description:
      "Payment flow via Pix with dynamic QR code generation and global status.",
    techs: ["Next.js", "TypeScript", "Zustand"],
    size: "large",
    image: "/pix.png",
    live: "https://violetaeliz.org.br/quero-doar/metodos/pix",
  },

  {
    id: 3,
    title: "Personal Portfólio",
    description: "",
    techs: ["React", "TypeScript", "Sass"],
    size: "medium",
  },
  {
    id: 4,
    title: "Frontend Fusion",
    description: "",
    techs: ["React"],
    size: "medium",
  },
  {
    id: 5,
    title: "Interactive Rating",
    description: "",
    techs: ["HTML", "CSS", "JS"],
    size: "medium",
  },
  {
    id: 6,
    title: "Formulário com Zod",
    description: "",
    techs: ["React", "Zod"],
    size: "small",
  },
  {
    id: 7,
    title: "Dark Mode",
    description: "",
    techs: ["CSS"],
    size: "small",
  },
  /*
  {
    id: 8,
    title: "Pix Payment",
    description: "Fluxo de pagamento.",
    techs: ["Next.js", "Zustand"],
    size: "small",
  }, */
];

export function ProjectsGrid() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
