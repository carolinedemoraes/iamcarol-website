import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  size: "large" | "medium" | "small";
  image?: string;
  github?: string;
  live?: string;
};

export function ProjectCard({
  title,
  description,
  techs,
  size,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${styles[size]}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={`Preview do Projeto ${title}`} />
        </div>
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className={styles.tech}>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {(github || live) && (
          <div className={styles.actions}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
            )}

            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                <FiExternalLink />
                Ver site
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
