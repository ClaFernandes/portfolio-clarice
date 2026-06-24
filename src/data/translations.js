// ─── TRADUÇÕES PT-PT / EN ─────────────────────────────
//
// Como usar:
//   const t = translations[lang]   → objecto com todos os textos
//   t.hero.desc                    → frase da hero
//   t.nav.about                    → link "Sobre"
//
// Para editar um texto: altera o valor da chave correspondente
// Para adicionar um idioma: copia o bloco 'pt' e traduz

const translations = {

  // ── PORTUGUÊS DE PORTUGAL ────────────────────────────
  pt: {
    nav: {
      about:    'Sobre',
      projects: 'Projectos',
      skills:   'Skills',
      timeline: 'Trajectória',
      contact:  'Contacto',
    },

    hero: {
      available:   'Disponível para oportunidades',
      role:        'Frontend Developer Junior',
      greeting:    'Olá, o meu\nnome é ',
      name:        'Clarice',
      surname:     'Fernandes',
      desc:        'Aprendi a contar histórias em palavras. Agora conto-as em código. Desenvolvo interfaces que comunicam.',
      btnProjects: 'Ver projectos',
      // Botão CV — activa quando tiveres o PDF pronto:
      // 1. Coloca o ficheiro em public/cv-clarice.pdf
      // 2. Adiciona href="/cv-clarice.pdf" ao botão em Hero.jsx
      // 3. Remove a classe btn--disabled do botão
      btnCV:       'Download CV',
      location:    'Lisboa, Portugal',
    },

    about: {
      eyebrow: 'Quem sou',
      title:   'Sobre mim',
      // Edita este texto livremente — é a tua voz
      text:    'Desenvolvedora Frontend Junior com background em jornalismo e gestão financeira. Construo aplicações reais com foco em UX/UI e boas práticas — e trago uma visão de negócio que vai além do código. A completar formação Full-Stack na TechOf em outubro de 2026.',
    },

    projects: {
      eyebrow:   'O que construí',
      title:     'Projectos',
      btnSee:    'Ver projecto ↗',
      btnGithub: 'Ver no GitHub ↗',
      // Texto exibido no badge de projecto em equipa
      teamBadge: 'Projecto em dupla',
    },

    skills: {
      eyebrow: 'Ferramentas',
      title:   'Skills',
      dev:     'Desenvolvimento',
      tools:   'Ferramentas',
      langs:   'Idiomas',
    },

    timeline: {
      eyebrow: 'Percurso',
      title:   'Trajectória',
      now:     'agora',
    },

    contact: {
      eyebrow:     'Fala comigo',
      title:       'Contacto',
      email:       'Email',
      linkedin:    'LinkedIn',
      github:      'GitHub',
      whatsapp:    'WhatsApp',
      location:    'Localização',
      labelName:   'Nome',
      labelEmail:  'Email',
      labelMsg:    'Mensagem',
      placeName:   'O teu nome',
      placeEmail:  'O teu email',
      placeMsg:    'Escreve a tua mensagem...',
      btnSend:     'Enviar mensagem',
      sending:     'A enviar...',
      successMsg:  'Mensagem enviada! Obrigada pelo contacto.',
      errorMsg:    'Erro ao enviar. Tenta novamente.',
    },

    footer: {
      made:      'Feito com React ♥',
      copyright: '© 2026 Clarice Cerqueira Fernandes',
    },
  },

  // ── ENGLISH ──────────────────────────────────────────
  en: {
    nav: {
      about:    'About',
      projects: 'Projects',
      skills:   'Skills',
      timeline: 'Journey',
      contact:  'Contact',
    },

    hero: {
      available:   'Open to opportunities',
      role:        'Junior Frontend Developer',
      greeting:    'Hi, my\nname is ',
      name:        'Clarice',
      surname:     'Fernandes',
      desc:        'I learned to tell stories with words. Now I tell them with code. I build interfaces that communicate.',
      btnProjects: 'See projects',
      btnCV:       'Download CV',
      location:    'Lisbon, Portugal',
    },

    about: {
      eyebrow: 'Who I am',
      title:   'About me',
      text:    'Junior Frontend Developer with a background in journalism and financial management. I build real-world applications focused on UX/UI and best practices — bringing a business perspective that goes beyond code. Currently completing Full-Stack training at TechOf, finishing in October 2026.',
    },

    projects: {
      eyebrow:   'What I built',
      title:     'Projects',
      btnSee:    'View project ↗',
      btnGithub: 'View on GitHub ↗',
      teamBadge: 'Team project',
    },

    skills: {
      eyebrow: 'Tools',
      title:   'Skills',
      dev:     'Development',
      tools:   'Tools',
      langs:   'Languages',
    },

    timeline: {
      eyebrow: 'Journey',
      title:   'Timeline',
      now:     'now',
    },

    contact: {
      eyebrow:     'Get in touch',
      title:       'Contact',
      email:       'Email',
      linkedin:    'LinkedIn',
      github:      'GitHub',
      whatsapp:    'WhatsApp',
      location:    'Location',
      labelName:   'Name',
      labelEmail:  'Email',
      labelMsg:    'Message',
      placeName:   'Your name',
      placeEmail:  'Your email',
      placeMsg:    'Write your message...',
      btnSend:     'Send message',
      sending:     'Sending...',
      successMsg:  'Message sent! Thank you for reaching out.',
      errorMsg:    'Error sending. Please try again.',
    },

    footer: {
      made:      'Built with React ♥',
      copyright: '© 2026 Clarice Cerqueira Fernandes',
    },
  },
}

export default translations
