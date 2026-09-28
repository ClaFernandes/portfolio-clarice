import { Link } from "react-scroll";
import { HiOutlineLocationMarker } from "react-icons/hi";
import translations from "../data/translations";
import foto from "../assets/foto.jpg";
import "../styles/hero.css";

function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">{t.available}</span>
          </div>

          <p className="hero__role">{t.role}</p>

          <h1 className="hero__name">
            {t.greeting}
            <em className="hero__name--coral">{t.name}</em>
            <br />
            <span className="hero__name--muted">{t.surname}</span>
          </h1>

          <p className="hero__desc">{t.desc}</p>

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
              href={`${import.meta.env.BASE_URL}${lang === "pt" ? "cv-clarice.pdf" : "cv-clarice-en.pdf"}`}
              download
              className="btn btn--coral"
            >
              {t.btnCV}
            </a>
          </div>
        </div>

        <div className="hero__photo-col">
          <div className="hero__photo-wrap">
            <div className="hero__photo-blob" aria-hidden="true" />
            <div className="hero__photo-ring" aria-hidden="true" />

            <div className="hero__photo-circle">
              <img src={foto} alt="Clarice Fernandes" />
            </div>

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