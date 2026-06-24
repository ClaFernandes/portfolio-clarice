import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import {
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import translations from "../data/translations";
import "../styles/contact.css";

// ─── CONFIGURAÇÃO DO EMAILJS ───────────────────────────
const EMAILJS_SERVICE_ID = "service_w1c0gyf";
const EMAILJS_TEMPLATE_ID = "template_f43zavn";
const EMAILJS_PUBLIC_KEY = "Nz7SS1kJtQ1vVGExL";

function Contact({ lang }) {
  const t = translations[lang].contact;

  // Referência ao formulário — usada pelo emailjs
  const formRef = useRef();

  // Estado do envio: null | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState(null);

  // Envia o formulário via EmailJS
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  // Cards de informação de contacto
  const contactCards = [
    {
      icon: <HiOutlineMail size={18} aria-hidden="true" />,
      label: t.email,
      value: "clarice_fernandes@hotmail.com",
      href: "mailto:clarice_fernandes@hotmail.com",
    },
    {
      icon: <FiLinkedin size={18} aria-hidden="true" />,
      label: t.linkedin,
      value: "linkedin.com/in/claricefernandes",
      href: "https://www.linkedin.com/in/claricefernandes/",
    },
    {
      icon: <FiGithub size={18} aria-hidden="true" />,
      label: t.github,
      value: "github.com/ClaFernandes",
      href: "https://github.com/ClaFernandes",
    },
    {
      icon: <IoLogoWhatsapp size={18} aria-hidden="true" />,
      label: t.whatsapp,
      value: "+351 913 194 094",
      // O link abre o WhatsApp directamente com uma mensagem pré-definida
      href: "https://wa.me/351913194094",
    },
    {
      icon: <HiOutlineLocationMarker size={18} aria-hidden="true" />,
      label: t.location,
      value: "Lisboa, Portugal",
      href: null,
    },
  ];

  return (
    <section className="section" id="contato">
      <div className="container section__inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>

        <div className="contact__grid">
          {/* Cards de contacto */}
          <div className="contact__cards">
            {contactCards.map((card) => (
              <div key={card.label} className="contact__card">
                <div className="contact__card-icon">{card.icon}</div>
                <div>
                  <p className="contact__card-label">{card.label}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="contact__card-value contact__card-value--link"
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http") ? "noreferrer" : undefined
                      }
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="contact__card-value">{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulário de contacto */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form"
            noValidate
          >
            <div className="contact__field">
              <label className="contact__label" htmlFor="from_name">
                {t.labelName}
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                className="contact__input"
                placeholder={t.placeName}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="from_email">
                {t.labelEmail}
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                className="contact__input"
                placeholder={t.placeEmail}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                {t.labelMsg}
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder={t.placeMsg}
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--dark contact__submit"
              disabled={status === "sending"}
            >
              <FiSend size={13} aria-hidden="true" />
              {status === "sending" ? t.sending : t.btnSend}
            </button>

            {status === "success" && (
              <div className="contact__feedback contact__feedback--success">
                <FiCheckCircle size={14} aria-hidden="true" />
                {t.successMsg}
              </div>
            )}

            {status === "error" && (
              <div className="contact__feedback contact__feedback--error">
                <FiAlertCircle size={14} aria-hidden="true" />
                {t.errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
