import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  image?: string;
  github?: string;
  live?: string;
};

export function ProjectCard({
  title,
  description,
  techs,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <article
      className="
        bg-white dark:bg-[#1e1e1e]
        rounded-2xl overflow-hidden
        border border-transparent dark:border-white/5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(255,122,146,0.15)]
      "
    >
      {/* IMAGE */}
      {image && (
        <div className="h-44 overflow-hidden">
          <img
            src={image}
            alt={`Preview do projeto ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        {/* TITLE */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-sm opacity-70 leading-relaxed">{description}</p>
        )}

        {/* TECHS */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="
                text-xs px-2 py-1 rounded-full
                bg-[#faf9f8] dark:bg-[#242424]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        {(github || live) && (
          <div className="flex gap-4 pt-2 text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#f96d80] hover:underline"
              >
                <FiGithub />
                GitHub
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#f96d80] hover:underline"
              >
                <FiExternalLink />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
