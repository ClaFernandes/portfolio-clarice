import { FiGithub } from "react-icons/fi";
import translations from "../data/translations";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

function Projects({ lang }) {
  const t = translations[lang].projects;

  return (
    <section className="section" id="projetos">
      <div className="container section__inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>

        <div className="proj-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="proj-more">
          <a
            href="https://github.com/ClaFernandes"
            target="_blank"
            rel="noreferrer"
            className="proj-btn proj-btn--outline"
          >
            <FiGithub size={13} aria-hidden="true" />
            {t.seeMore}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
