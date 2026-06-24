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

  // Controla se o modal está aberto
  const [modalOpen, setModalOpen] = useState(false);

  // Índice da imagem actual no carrossel
  const [imgIndex, setImgIndex] = useState(0);

  // Descrições e textos no idioma actual
  const desc = lang === "pt" ? project.descPt : project.descEn;
  const shortDesc = lang === "pt" ? project.shortPt : project.shortEn;
  const teamInfo =
    project.team && project.teamInfo ? project.teamInfo[lang] : null;

  // Imagens válidas — filtra strings vazios
  const images = (project.images || []).filter(Boolean);

  // Navega para a imagem anterior no carrossel
  function prevImg(e) {
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  // Navega para a imagem seguinte no carrossel
  function nextImg(e) {
    e.stopPropagation();
    setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  // Abre o modal e reinicia o carrossel na primeira imagem
  function openModal() {
    setImgIndex(0);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  // Fecha o modal ao clicar no overlay (fundo escuro)
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  return (
    <>
      {/* ── CARD ── */}
      <article className={`proj-card ${reverse ? "proj-card--reverse" : ""}`}>
        {/* Área da imagem — clicável para abrir modal */}
        <div
          className="proj-card__img"
          style={{ background: project.bg }}
          onClick={openModal}
          role="button"
          tabIndex={0}
          aria-label={`Ver detalhes de ${project.name}`}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
        >
          {/* Imagem real ou fundo com letra inicial */}
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

          {/* Overlay de hover */}
          <div className="proj-card__img-overlay" aria-hidden="true">
            <FiInfo size={14} />
            <span>Ver detalhes</span>
          </div>
        </div>

        {/* Corpo do card */}
        <div className="proj-card__body">
          <div>
            {/* Badge de stack + badge de equipa (se aplicável) */}
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

          {/* Botões de acção */}
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

      {/* ── MODAL ── */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <div className="modal">
            {/* Botão fechar */}
            <button
              className="modal__close"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <FiX size={16} />
            </button>

            {/* ── CARROSSEL ── */}
            <div className="modal__carousel">
              {/* Imagem actual */}
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

              {/* Setas — só aparecem com mais de 1 imagem */}
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

                  {/* Pontinhos indicadores */}
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

            {/* ── CONTEÚDO DO MODAL ── */}
            <div className="modal__content">
              {/* Tags */}
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

              {/* Nota de equipa */}
              {teamInfo && (
                <p className="modal__team-note">
                  <FiUsers size={12} aria-hidden="true" />
                  {teamInfo}
                </p>
              )}

              <p className="modal__desc">{desc}</p>

              {/* Pills da stack */}
              <p className="modal__stack-label">Stack</p>
              <div className="modal__pills">
                {project.stack.split(" · ").map((tech) => (
                  <span key={tech} className="modal__pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
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
