/**
 * Seeds sample "capacitacao" (course) documents into the IASPE Sanity dataset.
 * Run: node scripts/seed-capacitacoes.mjs   (from web/, with Node 22)
 *
 * Auth: reuses the Sanity CLI session token from ~/.config/sanity/config.json
 * (the logged-in user must be a member of project cbvw3xbf). The token is read
 * internally and never printed.
 *
 * Content here is original sample data for the IASPE domain (public-sector
 * training) — placeholder images come from picsum.photos / randomuser.me.
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { createClient } from "@sanity/client";

const cfg = JSON.parse(
  readFileSync(join(homedir(), ".config/sanity/config.json"), "utf8")
);
const token = cfg.authToken;
if (!token) {
  console.error("No Sanity CLI auth token found. Run `npx sanity login` first.");
  process.exit(1);
}

const client = createClient({
  projectId: "cbvw3xbf",
  dataset: "production",
  apiVersion: "2026-06-30",
  token,
  useCdn: false,
});

let kc = 0;
const key = () => "k" + kc++;
const p = (text) => ({
  _type: "block", _key: key(), style: "normal", markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});
const h = (text) => ({
  _type: "block", _key: key(), style: "h3", markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});
const li = (text) => ({
  _type: "block", _key: key(), style: "normal", listItem: "bullet", level: 1, markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});

function corpo({ publico, objetivos, programa }) {
  return [
    h("Público alvo"),
    p(publico),
    h("Objetivos"),
    ...objetivos.map(li),
    h("Programa"),
    ...programa.map(li),
    h("Metodologia"),
    p(
      "Exposição dialogada com estudos de caso e exemplos práticos da Administração Pública. Material de apoio disponibilizado aos participantes e emissão de certificado."
    ),
  ];
}

async function uploadImage(url, filename) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buf, { filename });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

const CURSOS = [
  {
    slug: "elaboracao-de-editais-de-concursos-publicos",
    titulo: "Elaboração de Editais de Concursos Públicos",
    modalidade: "Presencial",
    data: "2026-08-12",
    diaSemana: "Quarta-feira",
    cargaHoraria: "8 horas",
    investimento: "R$ 580,00",
    professor: { nome: "Dra. Helena Moraes", g: "women", n: 68,
      bio: "Especialista em Direito Administrativo, atua há 15 anos na assessoria a concursos públicos municipais." },
    resumo: "Planejamento e redação de editais à luz da Lei nº 14.133/2021, com foco em segurança jurídica.",
    publico: "Servidores das áreas de RH, jurídico e gestão de pessoas de prefeituras e autarquias.",
    objetivos: [
      "Compreender as etapas de planejamento de um certame.",
      "Redigir editais claros e juridicamente seguros.",
      "Reduzir impugnações e questionamentos administrativos.",
    ],
    programa: [
      "Fundamentos legais do concurso público.",
      "Estruturação do edital: requisitos, cronograma e critérios.",
      "Recursos, impugnações e boas práticas.",
    ],
  },
  {
    slug: "gestao-de-processos-seletivos-simplificados",
    titulo: "Gestão de Processos Seletivos Simplificados",
    modalidade: "Ao Vivo",
    data: "2026-08-20",
    diaSemana: "Quinta-feira",
    cargaHoraria: "6 horas",
    investimento: "R$ 420,00",
    professor: { nome: "Prof. Ricardo Tavares", g: "men", n: 52,
      bio: "Consultor em gestão pública e contratações temporárias na Administração municipal." },
    resumo: "Condução de PSS com transparência, da publicação à homologação dos resultados.",
    publico: "Gestores e equipes responsáveis por contratações temporárias no setor público.",
    objetivos: [
      "Diferenciar PSS de concurso público.",
      "Definir critérios objetivos de seleção.",
      "Garantir transparência e isonomia.",
    ],
    programa: [
      "Hipóteses legais de contratação temporária.",
      "Etapas do processo seletivo simplificado.",
      "Classificação, recursos e homologação.",
    ],
  },
  {
    slug: "lgpd-na-administracao-publica-municipal",
    titulo: "LGPD na Administração Pública Municipal",
    modalidade: "EAD",
    data: "2026-09-03",
    diaSemana: "Quinta-feira",
    cargaHoraria: "10 horas",
    investimento: null,
    professor: { nome: "Dra. Camila Nunes", g: "women", n: 44,
      bio: "Advogada com atuação em proteção de dados e compliance no setor público." },
    resumo: "Adequação dos municípios à Lei Geral de Proteção de Dados em processos seletivos e cadastros.",
    publico: "Encarregados de dados (DPO), TI e gestores municipais.",
    objetivos: [
      "Entender os princípios e bases legais da LGPD.",
      "Mapear o tratamento de dados em concursos e cadastros.",
      "Implementar medidas mínimas de governança.",
    ],
    programa: [
      "Conceitos e bases legais da LGPD.",
      "Tratamento de dados de candidatos e servidores.",
      "Plano de adequação e governança de dados.",
    ],
  },
  {
    slug: "avaliacao-e-selecao-de-pessoal-no-setor-publico",
    titulo: "Avaliação e Seleção de Pessoal no Setor Público",
    modalidade: "Online",
    data: "2026-09-17",
    diaSemana: "Quinta-feira",
    cargaHoraria: "8 horas",
    investimento: "R$ 480,00",
    professor: { nome: "Prof. André Lopes", g: "men", n: 33,
      bio: "Psicólogo organizacional especializado em avaliação por competências no serviço público." },
    resumo: "Métodos de avaliação por competências aplicados a seleções no serviço público.",
    publico: "Profissionais de RH, bancas examinadoras e gestores de pessoas.",
    objetivos: [
      "Aplicar avaliação por competências.",
      "Elaborar instrumentos de seleção objetivos.",
      "Reduzir vieses no processo de seleção.",
    ],
    programa: [
      "Competências e perfis de cargo.",
      "Instrumentos: provas, títulos e entrevistas estruturadas.",
      "Análise de resultados e tomada de decisão.",
    ],
  },
];

async function run() {
  for (const c of CURSOS) {
    kc = 0;
    const filenameBase = c.slug;
    const imagem = await uploadImage(
      `https://picsum.photos/seed/${c.slug}/800/450`,
      `${filenameBase}.jpg`
    );
    const foto = await uploadImage(
      `https://randomuser.me/api/portraits/${c.professor.g}/${c.professor.n}.jpg`,
      `${filenameBase}-prof.jpg`
    );

    const doc = {
      _id: `capacitacao-${c.slug}`,
      _type: "capacitacao",
      titulo: c.titulo,
      slug: { _type: "slug", current: c.slug },
      imagem,
      modalidade: c.modalidade,
      data: c.data,
      diaSemana: c.diaSemana,
      cargaHoraria: c.cargaHoraria,
      investimento: c.investimento ?? undefined,
      professor: { nome: c.professor.nome, foto, bio: c.professor.bio },
      resumo: c.resumo,
      corpo: corpo({ publico: c.publico, objetivos: c.objetivos, programa: c.programa }),
      saibaMaisUrl: "https://portal.iaspeconcursos.com.br/contato",
      inscricoesAbertas: true,
      publishedAt: `${c.data}T12:00:00.000Z`,
    };

    const saved = await client.createOrReplace(doc);
    console.log("✓", saved._id);
  }
  console.log("Done. Seeded", CURSOS.length, "capacitações.");
}

run().catch((e) => {
  console.error("Seed failed:", e.message);
  process.exit(1);
});
