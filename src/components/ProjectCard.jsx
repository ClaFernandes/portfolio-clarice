import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiInfo,
  FiUsers,
} from "react-icons/fi";
import translations from "../data/translations";
import "../styles/projects.css";

function ProjectCard({ project, lang, reverse }) {
  const t = translations[lang].projects;

  const [modalOpen, setModalOpen] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);

  const desc = lang === "pt" ? project.descPt : project.descEn;
  const shortDesc = lang === "pt" ? project.shortPt : project.shortEn;
  const teamInfo =
    project.team && project.teamInfo ? project.teamInfo[lang] : null;

  const images = (project.images || []).filter(Boolean);

  function prevImg(e) {
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function nextImg(e) {
    e.stopPropagation();
    setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  function openModal() {
    setImgIndex(0);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  return (
    <>
      <article className={`proj-card ${reverse ? "proj-card--reverse" : ""}`}>
        <div
          className="proj-card__img"
          style={{ background: project.bg }}
          onClick={openModal}
          role="button"
          tabIndex={0}
          aria-label={`Ver detalhes de ${project.name}`}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
        >
          {images[0] ? (
            <img
              src={`${import.meta.env.BASE_URL}${images[0]}`}
              alt={project.name}
              className="proj-card__img-file"
            />
          ) : (
            <span className="proj-card__img-placeholder">
              {project.name[0]}
            </span>
          )}

          <div className="proj-card__img-overlay" aria-hidden="true">
            <FiInfo size={14} />
            <span>Ver detalhes</span>
          </div>
        </div>

        <div className="proj-card__body">
          <div>
            <div className="proj-card__tags">
              <span className="proj-card__tag">{project.tag}</span>
              {project.team && (
                <span className="proj-card__tag proj-card__tag--team">
                  <FiUsers size={9} aria-hidden="true" />
                  {t.teamBadge}
                </span>
              )}
            </div>

            <h3 className="proj-card__name">{project.name}</h3>
            <p className="proj-card__desc">{shortDesc}</p>
            <p className="proj-card__stack">{project.stack}</p>
          </div>

          <div className="proj-card__btns">
            <button className="proj-btn proj-btn--outline" onClick={openModal}>
              <FiInfo size={12} aria-hidden="true" />
              {lang === "pt" ? "Ver detalhes" : "View details"}
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="proj-btn proj-btn--outline"
              >
                <FiGithub size={12} aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="proj-btn proj-btn--terracota"
              >
                <FiExternalLink size={12} aria-hidden="true" />
                {t.btnSee}
              </a>
            )}
          </div>
        </div>
      </article>

      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <div className="modal">
            <button
              className="modal__close"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <FiX size={16} />
            </button>

            <div className="modal__carousel">
              <div
                className="modal__carousel-img"
                style={{ background: project.bg }}
              >
                {images[imgIndex] ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${images[imgIndex]}`}
                    alt={`${project.name} — vista ${imgIndex + 1}`}
                  />
                ) : (
                  <span className="modal__carousel-placeholder">
                    {project.name[0]}
                  </span>
                )}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    className="modal__carousel-btn modal__carousel-btn--prev"
                    onClick={prevImg}
                    aria-label="Imagem anterior"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    className="modal__carousel-btn modal__carousel-btn--next"
                    onClick={nextImg}
                    aria-label="Próxima imagem"
                  >
                    <FiChevronRight size={18} />
                  </button>

                  <div className="modal__carousel-dots" aria-hidden="true">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={`modal__carousel-dot ${i === imgIndex ? "modal__carousel-dot--active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIndex(i);
                        }}
                        aria-label={`Imagem ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="modal__content">
              <div className="proj-card__tags" style={{ marginBottom: "8px" }}>
                <span className="proj-card__tag">{project.tag}</span>
                {project.team && (
                  <span className="proj-card__tag proj-card__tag--team">
                    <FiUsers size={9} aria-hidden="true" />
                    {t.teamBadge}
                  </span>
                )}
              </div>

              <h3 className="modal__title">{project.name}</h3>

              {teamInfo && (
                <p className="modal__team-note">
                  <FiUsers size={12} aria-hidden="true" />
                  {teamInfo}
                </p>
              )}

              <p className="modal__desc">{desc}</p>

              <p className="modal__stack-label">Stack</p>
              <div className="modal__pills">
                {project.stack.split(" · ").map((tech) => (
                  <span key={tech} className="modal__pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal__btns">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn--outline"
                  >
                    <FiGithub size={12} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn--terracota"
                  >
                    <FiExternalLink size={12} aria-hidden="true" />
                    {t.btnSee}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
