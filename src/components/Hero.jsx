import { Link } from "react-scroll";
import { HiOutlineLocationMarker } from "react-icons/hi";
import translations from "../data/translations";
import foto from "../assets/foto.jpg";
import "../styles/hero.css";

function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section className="hero" id="hero">
      {/* Blobs decorativos em coral */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Coluna de texto */}
        <div className="hero__content">
          {/* Badge de disponibilidade */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">{t.available}</span>
          </div>

          {/* Título da função */}
          <p className="hero__role">{t.role}</p>

          {/* Nome */}
          <h1 className="hero__name">
            {t.greeting}
            <em className="hero__name--coral">{t.name}</em>
            <br />
            <span className="hero__name--muted">{t.surname}</span>
          </h1>

          {/* Frase de apresentação */}
          <p className="hero__desc">{t.desc}</p>

          {/* Botões de ação */}
          <div className="hero__btns">
            <Link
              to="projetos"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn--dark"
            >
              {t.btnProjects}
            </Link>
            <a
              href={`${import.meta.env.BASE_URL}cv-clarice.pdf`}
              download
              className="btn btn--coral"
            >
              {t.btnCV}
            </a>
          </div>
        </div>

        {/* Coluna da foto */}
        <div className="hero__photo-col">
          <div className="hero__photo-wrap">
            {/* Blobs atrás da foto */}
            <div className="hero__photo-blob" aria-hidden="true" />
            <div className="hero__photo-ring" aria-hidden="true" />

            {/* Foto */}
            <div className="hero__photo-circle">
              <img src={foto} alt="Clarice Fernandes" />
            </div>

            {/* Tag de localização */}
            <div className="hero__location">
              <HiOutlineLocationMarker size={11} aria-hidden="true" />
              <span>{t.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
