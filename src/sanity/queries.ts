import { defineQuery } from "next-sanity";

// Course grid — ordered by course date (upcoming first), then publish date.
export const CAPACITACOES_QUERY = defineQuery(`
  *[_type == "capacitacao" && defined(slug.current)]
  | order(coalesce(data, publishedAt) asc) {
    _id,
    titulo,
    "slug": slug.current,
    modalidade,
    data,
    diaSemana,
    resumo,
    imagem,
    inscricoesAbertas
  }
`);

// Single course by slug.
export const CAPACITACAO_QUERY = defineQuery(`
  *[_type == "capacitacao" && slug.current == $slug][0]{
    _id,
    titulo,
    "slug": slug.current,
    modalidade,
    data,
    diaSemana,
    cargaHoraria,
    investimento,
    professor,
    resumo,
    corpo,
    saibaMaisUrl,
    imagem,
    publishedAt
  }
`);

// All slugs, for static generation.
export const CAPACITACOES_SLUGS_QUERY = defineQuery(`
  *[_type == "capacitacao" && defined(slug.current)]{ "slug": slug.current }
`);
