import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  size: "large" | "medium" | "small";
};

export function ProjectCard({
  title,
  description,
  techs,
  size,
}: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${styles[size]}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
