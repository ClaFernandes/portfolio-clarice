import translations from '../data/translations'
import '../styles/about.css'

// Secção "Sobre mim"
// Props:
//   lang — idioma atual ('pt' ou 'en')

function About({ lang }) {
  const t = translations[lang].about

  return (
    <section className="section section--white" id="sobre">
      <div className="container section__inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="about__text">{t.text}</p>
      </div>
    </section>
  )
}

export default About
