// ─── DADOS DA TRAJECTÓRIA PROFISSIONAL ───────────────
//
// Ordenado do mais recente para o mais antigo
//
// Campos:
//   id       → identificador único
//   period   → período em PT e EN
//   role     → cargo/função em PT e EN
//   place    → empresa/instituição · localização
//   current  → true = ponto coral + badge "agora"
//   type     → 'dev' | 'finance' | 'education' | 'other'
//              (reservado para filtros futuros)

const timeline = [
  {
    id: 1,
    period: { pt: '2025 – hoje',   en: '2025 – present' },
    role:   {
      pt: 'Full-Stack Developer (em formação)',
      en: 'Full-Stack Developer (in training)',
    },
    place:   'TechOf · Lisboa, Portugal',
    current: true,
    type:    'dev',
  },
  {
    id: 2,
    period: { pt: '2022 – hoje',   en: '2022 – present' },
    role:   {
      pt: 'Administrativa Financeira',
      en: 'Financial Administrator',
    },
    place:   'Make IT Simple · Lisboa, Portugal',
    current: false,
    type:    'finance',
  },
  {
    id: 3,
    period: { pt: '2021',          en: '2021' },
    role:   {
      pt: 'Técnica de Contabilidade (estágio)',
      en: 'Accounting Technician (internship)',
    },
    place:   'Pirâmide de Números · Lisboa, Portugal',
    current: false,
    type:    'finance',
  },
  {
    id: 4,
    period: { pt: '2016 – 2019',   en: '2016 – 2019' },
    role:   {
      pt: 'Professora de Língua Portuguesa',
      en: 'Portuguese Language Teacher',
    },
    place:   'Secretaria de Educação · Minas Gerais, Brasil',
    current: false,
    type:    'other',
  },
  {
    id: 5,
    period: { pt: '2011 – 2021',   en: '2011 – 2021' },
    role:   {
      pt: 'Revisora Linguística (Freelancer)',
      en: 'Proofreader (Freelancer)',
    },
    place:   'Brasil',
    current: false,
    type:    'other',
  },
  {
    id: 6,
    period: { pt: '2008 – 2013',   en: '2008 – 2013' },
    role:   {
      pt: 'Jornalista · Assessora de Imprensa',
      en: 'Journalist · Press Officer',
    },
    place:   'Brasil',
    current: false,
    type:    'other',
  },
]

export default timeline
