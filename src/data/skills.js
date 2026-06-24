// ─── DADOS DAS SKILLS ─────────────────────────────────
//
// dev   → aparecem em destaque (terracota) — as tuas skills técnicas core
// tools → aparecem em cinzento — ferramentas de apoio
// languages → idiomas com nível
//
// Para adicionar uma skill: adiciona o string ao array correspondente
// Para remover: apaga o string

const skills = {

  // Skills de desenvolvimento — destacadas em terracota
  // Ordenadas por relevância para o mercado
  dev: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
  ],

  // Ferramentas de apoio — aparência neutra
  tools: [
    'Tailwind CSS',
    'Firebase',
    'Supabase',
    'Figma',
  ],

  // Idiomas com nível
  // name → nome do idioma | level → nível entre parênteses
  languages: [
    { namePt: 'Português', nameEn: 'Portuguese', levelPt: 'Nativo',  levelEn: 'Native' },
    { namePt: 'Espanhol',  nameEn: 'Spanish',    levelPt: 'B2',      levelEn: 'B2'     },
    { namePt: 'Inglês',    nameEn: 'English',     levelPt: 'B1',      levelEn: 'B1'     },
    { namePt: 'Francês',   nameEn: 'French',      levelPt: 'A2',      levelEn: 'A2'     },
  ],
}

export default skills
