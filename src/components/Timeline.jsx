import translations from "../data/translations";
import timeline from "../data/timeline";
import "../styles/timeline.css";

function Timeline({ lang }) {
  const t = translations[lang].timeline;

  return (
    <section className="section" id="trajetoria">
      <div className="container section__inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>

        <div className="tl__list">
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1;

            return (
              <div key={item.id} className="tl__item">
                {/* Ano / período */}
                <div className="tl__period">{item.period[lang]}</div>

                {/* Marcador visual — ponto + linha vertical */}
                <div className="tl__marker" aria-hidden="true">
                  <div
                    className={`tl__dot ${item.current ? "tl__dot--active" : ""}`}
                  />
                  {/* Linha vertical só existe entre itens (não no último) */}
                  {!isLast && <div className="tl__line" />}
                </div>

                {/* Conteúdo */}
                <div className="tl__content">
                  <p className="tl__role">
                    {item.role[lang]}
                    {/* Badge "agora" apenas no item atual */}
                    {item.current && <span className="tl__now">{t.now}</span>}
                  </p>
                  <p className="tl__place">{typeof item.place === 'object' ? item.place[lang] : item.place}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;