import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import translations from "../data/translations";
import "../styles/navbar.css";

function Navbar({ lang, setLang }) {
  const t = translations[lang].nav;

  // Controla se a navbar tem sombra (após scroll)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links de navegação
  const links = [
    { to: "sobre", label: t.about },
    { to: "projetos", label: t.projects },
    { to: "skills", label: t.skills },
    { to: "trajetoria", label: t.timeline },
    { to: "contato", label: t.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <span className="navbar__logo">
          Clarice<span className="navbar__dot">.</span>
        </span>

        {/* Links */}
        <div className="navbar__links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="navbar__link"
            >
              {link.label}
            </Link>
          ))}

          {/* Toggle PT / EN */}
          <div className="navbar__lang">
            <button
              className={`navbar__lang-btn ${lang === "pt" ? "navbar__lang-btn--active" : ""}`}
              onClick={() => setLang("pt")}
              aria-label="Português"
            >
              PT
            </button>
            <button
              className={`navbar__lang-btn ${lang === "en" ? "navbar__lang-btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
