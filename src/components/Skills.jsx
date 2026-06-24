import translations from "../data/translations";
import skills from "../data/skills";
import "../styles/skills.css";

function Skills({ lang }) {
  const t = translations[lang].skills;

  return (
    <section className="section section--white" id="skills">
      <div className="container section__inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>

        <div className="skills__cols">
          {/* Coluna 1 — Desenvolvimento */}
          <div className="skills__col">
            <p className="skills__col-label">{t.dev}</p>
            <div className="skills__pills">
              {skills.dev.map((skill) => (
                <span key={skill} className="skills__pill skills__pill--hl">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Ferramentas */}
          <div className="skills__col">
            <p className="skills__col-label">{t.tools}</p>
            <div className="skills__pills">
              {skills.tools.map((skill) => (
                <span key={skill} className="skills__pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna 3 — Idiomas com nível */}
          <div className="skills__col">
            <p className="skills__col-label">{t.langs}</p>
            <div className="skills__pills">
              {skills.languages.map((item) => (
                <span key={item.namePt} className="skills__pill">
                  {lang === "pt" ? item.namePt : item.nameEn}
                  <span className="skills__pill-level">
                    {lang === "pt" ? item.levelPt : item.levelEn}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
