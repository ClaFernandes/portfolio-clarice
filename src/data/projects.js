const base = import.meta.env.BASE_URL;

const projects = [
  // ── 1. AGENDLY ────────────────────────────────────────
  {
    id: 1,
    name: "Agendly",
    tag: "React + Supabase",

    // Descrição curta — aparece no card
    shortPt:
      "Plataforma de agendamentos online para negócios locais. CRM, agenda e painel financeiro num único produto.",
    shortEn:
      "Online booking platform for local businesses. CRM, calendar and financial dashboard in one product.",

    // Descrição completa — aparece no modal
    descPt:
      "Plataforma de agendamentos online para prestadores de serviços (barbearias, clínicas, personal trainers, etc.). O cliente agenda através de um link público sem criar conta. O prestador gere tudo num dashboard completo: agenda interativa, CRM de clientes com histórico e valor gasto, painel financeiro com gráficos e exportação CSV, gestão de serviços e horários por turnos. Inclui ainda painel de administração com gestão global da plataforma.",
    descEn:
      "Online booking platform for service providers (barbershops, clinics, personal trainers, etc.). Clients book through a public link without creating an account. Providers manage everything in a full dashboard: interactive calendar, client CRM with history and spending, financial panel with charts and CSV export, service and shift schedule management. Also includes an admin panel for global platform management.",

    stack:
      "React · Supabase · React Router · Recharts · react-big-calendar · CSS Modular",

    // Screenshots — coloca os ficheiros em public/assets/ com estes nomes
    // Sugestão de ordem: landing → dashboard → agenda → financeiro
    images: [
      `${base}assets/agendly-dashboard.jpg`, // Dashboard do prestador com métricas — mais impactante como primeira imagem
      `${base}assets/agendly-landing.jpg`, // Landing page do produto
      `${base}assets/agendly-publica.jpg`, // Fluxo público de agendamento (vista do cliente)
      `${base}assets/agendly-agenda.jpg`, // Agenda/calendário interactivo
      `${base}assets/agendly-financeiro.jpg`, // Painel financeiro com gráficos
      `${base}assets/agendly-admin.jpg`, // Painel de administração global
    ],

    link: "https://clafernandes.github.io/agendly/",
    github: "https://github.com/ClaFernandes/agendly",
    bg: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",

    // Projecto desenvolvido em dupla — mostra badge no card
    team: true,
    teamInfo: {
      pt: "Projecto desenvolvido em dupla com Glauber Carlos",
      en: "Project built in pair with Glauber Carlos",
    },
  },

  // ── 2. PÁGINA & CIA ───────────────────────────────────
  {
    id: 2,
    name: "Página & Cia",
    tag: "React",

    shortPt:
      "E-commerce de livraria com carrinho, checkout multi-etapas, favoritos e autenticação.",
    shortEn:
      "Bookstore e-commerce with cart, multi-step checkout, favourites and authentication.",

    descPt:
      "Aplicação React que simula um e-commerce real de livraria. Inclui catálogo com filtros, pesquisa e ordenação, página individual de livro, sistema de favoritos persistente, carrinho com sidebar dinâmica, checkout em múltiplas etapas (entrega, pagamento, confirmação) e autenticação completa (login, registo, recuperação de palavra-passe). Arquitectura com Context API + useReducer, React Router com rotas protegidas e React Hook Form.",
    descEn:
      "React application simulating a real bookstore e-commerce. Includes catalogue with filters, search and sorting, individual book page, persistent favourites system, cart with dynamic sidebar, multi-step checkout (delivery, payment, confirmation) and full authentication (login, register, password recovery). Built with Context API + useReducer, React Router with protected routes and React Hook Form.",

    stack:
      "React · Context API · React Router · React Hook Form · localStorage · CSS",

    images: [
      `${base}assets/paginacia-catalogo.jpg`, // Catálogo com grelha de livros (pagina1.jpg)
      `${base}assets/paginacia-livro.jpg`, // Página individual do livro (pagina2.jpg)
      `${base}assets/paginacia-carrinho.jpg`, // Carrinho aberto em sidebar (pagina6.jpg)
      `${base}assets/paginacia-checkout.jpg`, // Checkout — confirmar encomenda (pagina7.jpg)
    ],

    link: "https://clafernandes.github.io/paginacia/",
    github: "https://github.com/ClaFernandes/paginacia",
    bg: "linear-gradient(135deg, #0d3b2e, #1a5c46)",

    team: false,
    teamInfo: null,
  },

  // ── 3. FOCUS. ─────────────────────────────────────────
  {
    id: 3,
    name: "Focus.",
    tag: "React + Firebase",

    shortPt:
      "Gestor de tarefas com autenticação Firebase, Google Login e persistência de dados na nuvem.",
    shortEn:
      "Task manager with Firebase authentication, Google Login and cloud data persistence.",

    descPt:
      "Gestor de tarefas com autenticação híbrida via Firebase Auth (email/palavra-passe e Google Login). As tarefas são armazenadas no Firestore em tempo real e cada utilizador acede apenas aos seus próprios dados. Inclui organização por categorias, datas-limite, edição em linha, pesquisa dinâmica por título e ordenação por data ou alfabética. Interface minimalista e totalmente responsiva com Tailwind CSS.",
    descEn:
      "Task manager with hybrid authentication via Firebase Auth (email/password and Google Login). Tasks are stored in Firestore in real time and each user only accesses their own data. Includes organisation by categories, deadlines, inline editing, dynamic search by title and sorting by date or alphabetically. Minimalist and fully responsive interface with Tailwind CSS.",

    stack:
      "React · Tailwind CSS · Firebase Auth · Firestore · React Router · Lucide React",

    images: [
      `${base}assets/focus-dashboard.jpg`, // Dashboard com lista de tarefas — mostra o produto
      `${base}assets/focus-login.jpg`, // Ecrã de login com Google Auth
      `${base}assets/focus-detalhe.jpg`, // Edição de tarefa em modo activo
    ],

    link: "https://clafernandes.github.io/focus-v2/login",
    github: "https://github.com/ClaFernandes/focus-v2",
    bg: "linear-gradient(135deg, #0d0d1a, #1a0a2e)",

    team: false,
    teamInfo: null,
  },

  // ── 4. FLAT FINDER ────────────────────────────────────
  {
    id: 4,
    name: "Flat Finder",
    tag: "JavaScript",

    shortPt:
      "Plataforma de gestão de imóveis em JavaScript puro com CRUD completo e autenticação por proprietário.",
    shortEn:
      "Property management platform in vanilla JavaScript with full CRUD and owner-based authentication.",

    descPt:
      "Aplicação web desenvolvida em JavaScript puro sem frameworks. Simula uma plataforma de gestão de imóveis para arrendamento com autenticação por email, CRUD completo de imóveis, filtros por cidade, preço e área, sistema de favoritos e perfil editável. Arquitectura modular por página com injeção dinâmica de header e footer. Cada utilizador vê apenas os seus próprios imóveis. Persistência com localStorage e IDs únicos com crypto.randomUUID().",
    descEn:
      "Web application built in vanilla JavaScript without frameworks. Simulates a rental property management platform with email authentication, full property CRUD, filters by city, price and area, favourites system and editable profile. Modular page architecture with dynamic header and footer injection. Each user only sees their own properties. Persistence with localStorage and unique IDs using crypto.randomUUID().",

    stack: "HTML · CSS · JavaScript · localStorage · CSS Flexbox",

    images: [
      `${base}assets/flatfinder-imoveis.jpg`, // Lista de imóveis com filtros — mostra o produto
      `${base}assets/flatfinder-login.jpg`, // Login split-screen
      `${base}assets/flatfinder-novo.jpg`, // Formulário de novo imóvel
      `${base}assets/flatfinder-favoritos.jpg`, // Página de favoritos
    ],

    link: "https://clafernandes.github.io/flat-finder/login.html",
    github: "https://github.com/ClaFernandes/flat-finder",
    bg: "linear-gradient(135deg, #0d1f2e, #1a3a52)",

    team: false,
    teamInfo: null,
  },
];

export default projects;
