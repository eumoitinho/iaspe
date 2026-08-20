// Static content for this subdomain (capacitacao.iaspeconcursos.com.br), which
// serves ONLY the capacitações pages and borrows the template11 theme from
// https://portal.iaspeconcursos.com.br/. Every navigation item other than
// "Capacitações" points back to the main portal on purpose — this site must not
// serve cloned copies of the portal's pages.

export const SITE = {
  // Logo / brand click goes back to the main portal.
  baseUrl: "https://portal.iaspeconcursos.com.br/",
  logo: "https://cdn.iaspeconcursos.com.br/prestador/logo.png",
  candidatoUrl: "https://candidato.iaspeconcursos.com.br/",
};

export type NavLink = {
  label: string;
  href: string;
  title: string;
  accessKey: string;
  tabIndex: number;
  external?: boolean;
  /** Marks the only item served by this subdomain. */
  current?: boolean;
};

// Primary menu links, mirroring the portal's own menu order.
export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "https://portal.iaspeconcursos.com.br/sobre", title: "Clique para ir A empresa", accessKey: "1", tabIndex: 1, external: true },
  { label: "Concursos e seletivos", href: "https://portal.iaspeconcursos.com.br/edital", title: "Clique para ver os Concursos e seletivos", accessKey: "2", tabIndex: 2, external: true },
  { label: "Serviços", href: "https://portal.iaspeconcursos.com.br/servicos", title: "Clique para conhecer nossos serviços", accessKey: "3", tabIndex: 3, external: true },
  { label: "Notícias", href: "https://portal.iaspeconcursos.com.br/noticia", title: "Clique para ir as Notícias", accessKey: "4", tabIndex: 4, external: true },
  { label: "Capacitações", href: "/", title: "Cursos de capacitação do IASPE", accessKey: "c", tabIndex: 5, current: true },
];

// Secondary links (hidden by default via `termoInfo d-none`)
export const TERM_LINKS: NavLink[] = [
  { label: "Termos de uso", href: "https://iaspeconcursos.com.br/termos.pdf", title: "Clique para ir ao termos de uso", accessKey: "5", tabIndex: 5, external: true },
  { label: "Privacidade", href: "https://iaspeconcursos.com.br/politicas.pdf", title: "Clique para ir ao privacidade", accessKey: "6", tabIndex: 6, external: true },
  { label: "Candidato", href: "https://candidato.iaspeconcursos.com.br/", title: "Clique para ir ao área do candidato", accessKey: "7", tabIndex: 7, external: true },
];

// Hero banner slides (Bootstrap carousel)
export const BANNERS: string[] = [
  "https://cdn.iaspeconcursos.com.br/banner/1/2f55707d4193dc27118a0f19a1985716.png",
  "https://cdn.iaspeconcursos.com.br/banner/1/afd4836712c5e77550897e25711e1d96.png",
];

export type EditalCard = {
  bg: string;
  icon: string;
  title: [string, string];
  href: string;
};

export const EDITAIS_CARDS: EditalCard[] = [
  { bg: "bg-info", icon: "fe fe-calendar", title: ["EDITAIS", "FUTUROS"], href: "https://portal.iaspeconcursos.com.br/edital/index/futuros" },
  { bg: "bg-primary", icon: "fe fe-edit", title: ["INSCRIÇÕES", "ABERTAS"], href: "https://portal.iaspeconcursos.com.br/edital/index/abertos" },
  { bg: "bg-warning", icon: "fe fe-loader", title: ["EDITAIS EM", "ANDAMENTO"], href: "https://portal.iaspeconcursos.com.br/edital/index/andamento" },
  { bg: "bg-dark", icon: "fe fe-check", title: ["EDITAIS", "FINALIZADOS"], href: "https://portal.iaspeconcursos.com.br/edital/index/encerrados" },
];

// Filter options used in the search panel
export const ENTIDADES = [
  { value: "default", label: "Ignorar esse filtro" },
  { value: "1", label: "Prefeitura de SMO Teste" },
  { value: "2", label: "Prefeitura Municipal da Estância Climática de Campos Novos Paulista" },
  { value: "3", label: "Prefeitura Municipal de Narandiba" },
];

export const TIPOS_EDITAL = [
  { value: "default", label: "Ignorar esse filtro" },
  { value: "7", label: "Capacitação" },
  { value: "16", label: "Concurso de Admissção de Alunos ao CMR" },
  { value: "11", label: "Concurso de Bolsa de Estudos" },
  { value: "2", label: "Concurso Público " },
  { value: "10", label: "Concurso Público e Processo Seletivo" },
  { value: "6", label: "Eleição" },
  { value: "3", label: "Emprego Público" },
  { value: "15", label: "Processo de Recrutamento de Pessoal" },
  { value: "1", label: "Processo Seletivo" },
  { value: "12", label: "Processo Seletivo de Estagiários" },
  { value: "4", label: "Processo Seletivo Especial" },
  { value: "9", label: "Processo Seletivo Interno" },
  { value: "14", label: "Processo Seletivo Público" },
  { value: "13", label: "Processo Seletivo Simplificado" },
  { value: "5", label: "Prova de Progressação" },
  { value: "19", label: "PSS" },
  { value: "22", label: "Seleção de Colaboradores - Aplicação de Provas" },
  { value: "23", label: "Seleção de Colaboradores - Banca" },
  { value: "8", label: "Seminário" },
];

export const SITUACOES = [
  { value: "default", label: "Ignorar esse filtro" },
  { value: "0", label: "Abertos para inscrição" },
  { value: "1", label: "Em andamento" },
  { value: "2", label: "Futuros" },
  { value: "3", label: "Finalizados" },
  { value: "4", label: "Suspensos" },
];

// Where the self-hosted template11 assets live under /public
export const themeAsset = (p: string) => `/iaspe-theme${p}`;
