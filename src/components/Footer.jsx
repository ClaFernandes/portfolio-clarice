import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import translations from "../data/translations";
import "../styles/footer.css";

function Footer({ lang }) {
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      {/* Wave de transição */}
      <svg
        className="footer__wave"
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,28 L0,14 Q150,0 300,12 Q450,24 600,10 Q750,0 900,12 Q1050,24 1200,10 L1200,28 Z"
          fill="#162f3d"
        />
      </svg>

      <div className="footer__inner">
        <div className="container footer__content">
          <span className="footer__logo">
            Clarice<span className="footer__dot">.</span>
          </span>

          <p className="footer__credit">
            {lang === 'pt' ? 'Feito com' : 'Built with'}{' '}
            <FiHeart size={12} style={{ color: 'var(--terracota)', verticalAlign: 'middle', margin: '0 2px' }} aria-hidden="true" />
            {' '}React
          </p>

          <div className="footer__socials">
            <a
              href="https://github.com/ClaFernandes"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/claricefernandes/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;