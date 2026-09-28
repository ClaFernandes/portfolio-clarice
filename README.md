# Portfólio — Clarice Fernandes

🔗 **[clafernandes.github.io/portfolio-clarice](https://clafernandes.github.io/portfolio-clarice/)**

[Português](#português) · [English](#english)

---

## Português

Portfólio pessoal de Clarice Fernandes, Full-Stack Developer Junior com background em jornalismo e gestão financeira. Reúne projetos, competências, trajetória profissional e contacto, em português e inglês.

### Funcionalidades

- **Bilingue (PT/EN)** — alternância de idioma em toda a página, incluindo o CV descarregado
- **Projetos com detalhe** — cada card abre um modal com carrossel de imagens, descrição completa, stack e links
- **Formulário de contacto funcional** — envio de mensagens por email com EmailJS, com feedback de sucesso e erro
- **Download do CV** em PDF, no idioma ativo
- **Navegação suave** entre secções
- **Design responsivo**, pensado para desktop e mobile

### Tecnologias

- React 19 + Vite
- CSS por componente, com variáveis globais
- react-scroll · react-icons
- EmailJS
- GitHub Pages (gh-pages)

### Estrutura

```
src/
├── components/   # Navbar, Hero, About, Projects, ProjectCard, Skills, Timeline, Contact, Footer
├── data/         # Conteúdo do site: projects, skills, timeline, translations
├── styles/       # Um ficheiro CSS por componente + global.css
└── assets/       # Foto de perfil
public/
├── assets/       # Imagens dos projetos
├── cv-clarice.pdf
└── cv-clarice-en.pdf
```

Todo o conteúdo está separado dos componentes, na pasta `src/data/`. Para adicionar um projeto, uma competência ou uma etapa da trajetória, basta editar o ficheiro de dados correspondente, sem mexer nos componentes.

### Como correr localmente

```bash
npm install
npm run dev
```

### Publicar

```bash
npm run deploy
```

Gera o build e publica a pasta `dist` no ramo `gh-pages`.

### Contacto

- [LinkedIn](https://www.linkedin.com/in/claricefernandes/)
- [GitHub](https://github.com/ClaFernandes)
- clarice_fernandes@hotmail.com

---

## English

Personal portfolio of Clarice Fernandes, Junior Full-Stack Developer with a background in journalism and financial management. It brings together projects, skills, professional journey and contact details, in Portuguese and English.

### Features

- **Bilingual (PT/EN)** — language toggle across the whole page, including the downloadable CV
- **Detailed projects** — each card opens a modal with an image carousel, full description, stack and links
- **Working contact form** — messages sent by email via EmailJS, with success and error feedback
- **CV download** as PDF, in the active language
- **Smooth scrolling** between sections
- **Responsive design** for desktop and mobile

### Tech stack

- React 19 + Vite
- Component-scoped CSS with global variables
- react-scroll · react-icons
- EmailJS
- GitHub Pages (gh-pages)

### Structure

```
src/
├── components/   # Navbar, Hero, About, Projects, ProjectCard, Skills, Timeline, Contact, Footer
├── data/         # Site content: projects, skills, timeline, translations
├── styles/       # One CSS file per component + global.css
└── assets/       # Profile photo
public/
├── assets/       # Project images
├── cv-clarice.pdf
└── cv-clarice-en.pdf
```

All content is kept separate from the components, in `src/data/`. Adding a project, a skill or a timeline entry only requires editing the matching data file, without touching the components.

### Run locally

```bash
npm install
npm run dev
```

### Deploy

```bash
npm run deploy
```

Builds the project and publishes the `dist` folder to the `gh-pages` branch.

### Contact

- [LinkedIn](https://www.linkedin.com/in/claricefernandes/)
- [GitHub](https://github.com/ClaFernandes)
- clarice_fernandes@hotmail.com
