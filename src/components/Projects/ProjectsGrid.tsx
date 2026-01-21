import { Header } from "../Header/Header";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsGrid.module.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  size: "large" | "medium" | "small";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    description: "UX, acessibilidade e dark mode.",
    techs: ["React", "TypeScript", "Sass"],
    size: "large",
  },
  {
    id: 2,
    title: "Frontend Fusion",
    description: "Projetos colaborativos.",
    techs: ["React"],
    size: "medium",
  },
  {
    id: 3,
    title: "Interactive Rating",
    description: "Frontend Mentor challenge.",
    techs: ["HTML", "CSS", "JS"],
    size: "medium",
  },
  {
    id: 4,
    title: "Formulário com Zod",
    description: "Validação e UX.",
    techs: ["React", "Zod"],
    size: "small",
  },
  {
    id: 5,
    title: "Dark Mode",
    description: "Persistência de tema.",
    techs: ["CSS"],
    size: "small",
  },
  {
    id: 6,
    title: "Pix Payment",
    description: "Fluxo de pagamento.",
    techs: ["Next.js", "Zustand"],
    size: "small",
  },
];

export function ProjectsGrid() {
  return (
    <main>
      <Header />
      <section className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}
