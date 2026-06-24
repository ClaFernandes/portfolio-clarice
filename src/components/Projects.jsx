import translations from '../data/translations'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

// Secção de projetos — lista todos os ProjectCards
// Props:
//   lang — idioma atual ('pt' ou 'en')

function Projects({ lang }) {
  const t = translations[lang].projects

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
              // Alterna: par = imagem à direita, ímpar = imagem à esquerda
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
