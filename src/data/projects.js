const projects = [
  // Agendly
  {
    id: 1,
    name: "Agendly",
    tag: "React + Supabase",
    shortPt:
      "Plataforma de agendamentos online para negócios locais. CRM, agenda e painel financeiro num único produto.",
    shortEn:
      "Online booking platform for local businesses. CRM, calendar and financial dashboard in one product.",
    descPt:
      "Plataforma de agendamentos online para prestadores de serviços (barbearias, clínicas, personal trainers, etc.). O cliente agenda através de um link público sem criar conta. O prestador gere tudo num dashboard completo: agenda interativa, CRM de clientes com histórico e valor gasto, painel financeiro com gráficos e exportação CSV, gestão de serviços e horários por turnos. Inclui ainda painel de administração com gestão global da plataforma.",
    descEn:
      "Online booking platform for service providers (barbershops, clinics, personal trainers, etc.). Clients book through a public link without creating an account. Providers manage everything in a full dashboard: interactive calendar, client CRM with history and spending, financial panel with charts and CSV export, service and shift schedule management. Also includes an admin panel for global platform management.",
    stack:
      "React · Supabase · React Router · Recharts · react-big-calendar · CSS Modular",
    images: [
      "assets/agendly-dashboard.jpg",
      "assets/agendly-landing.jpg",
      "assets/agendly-publica.jpg",
      "assets/agendly-agenda.jpg",
      "assets/agendly-financeiro.jpg",
      "assets/agendly-admin.jpg",
    ],
    link: "https://clafernandes.github.io/agendly/",
    github: "https://github.com/ClaFernandes/agendly",
    bg: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
    team: true,
    teamInfo: {
      pt: "Projecto desenvolvido em dupla com Glauber Carlos",
      en: "Project built in pair with Glauber Carlos",
    },
  },

  // Página & Cia
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
      "assets/paginacia-catalogo.jpg",
      "assets/paginacia-livro.jpg",
      "assets/paginacia-carrinho.jpg",
      "assets/paginacia-checkout.jpg",
    ],
    link: "https://clafernandes.github.io/paginacia/",
    github: "https://github.com/ClaFernandes/paginacia",
    bg: "linear-gradient(135deg, #0d3b2e, #1a5c46)",
    team: false,
    teamInfo: null,
  },

  // Focus.
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
      "assets/focus-dashboard.jpg",
      "assets/focus-login.jpg",
      "assets/focus-detalhe.jpg",
    ],
    link: "https://clafernandes.github.io/focus-v2/login",
    github: "https://github.com/ClaFernandes/focus-v2",
    bg: "linear-gradient(135deg, #0d0d1a, #1a0a2e)",
    team: false,
    teamInfo: null,
  },

  // Flat Finder
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
      "assets/flatfinder-imoveis.jpg",
      "assets/flatfinder-login.jpg",
      "assets/flatfinder-novo.jpg",
      "assets/flatfinder-favoritos.jpg",
    ],
    link: "https://clafernandes.github.io/flat-finder/login.html",
    github: "https://github.com/ClaFernandes/flat-finder",
    bg: "linear-gradient(135deg, #0d1f2e, #1a3a52)",
    team: false,
    teamInfo: null,
  },
];

export default projects;
