import { defineField, defineType } from "sanity";

// A "Capacitação" (training course). Mirrors the kind of content shown on a
// course-listing/blog: a cover image, scheduling metadata, an instructor, a
// rich body, and an external "Saiba mais" link (no online enrollment).
export const capacitacao = defineType({
  name: "capacitacao",
  title: "Capacitação",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "imagem",
      title: "Imagem (banner do curso)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "modalidade",
      title: "Modalidade",
      type: "string",
      options: {
        list: [
          { title: "Presencial", value: "Presencial" },
          { title: "Ao Vivo", value: "Ao Vivo" },
          { title: "EAD", value: "EAD" },
          { title: "Online", value: "Online" },
        ],
        layout: "radio",
      },
      initialValue: "Online",
    }),
    defineField({
      name: "data",
      title: "Data do curso",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
    }),
    defineField({
      name: "diaSemana",
      title: "Dia da semana (texto)",
      type: "string",
      description: 'Ex.: "Quinta-feira" ou "Terça e Quarta-feira"',
    }),
    defineField({
      name: "cargaHoraria",
      title: "Carga horária",
      type: "string",
      description: 'Ex.: "8 horas"',
    }),
    defineField({
      name: "investimento",
      title: "Investimento (opcional)",
      type: "string",
      description: 'Ex.: "R$ 580,00". Deixe em branco para não exibir.',
    }),
    defineField({
      name: "professor",
      title: "Professor(a)",
      type: "object",
      fields: [
        defineField({ name: "nome", title: "Nome", type: "string" }),
        defineField({
          name: "foto",
          title: "Foto",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({ name: "bio", title: "Mini-bio", type: "text", rows: 4 }),
      ],
      options: { collapsible: true, collapsed: false },
    }),
    defineField({
      name: "resumo",
      title: "Resumo (card)",
      type: "text",
      rows: 3,
      description: "Texto curto exibido na grade de cursos.",
    }),
    defineField({
      name: "corpo",
      title: "Conteúdo do curso",
      type: "array",
      description: "Público alvo, objetivos, programa, metodologia etc.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título", value: "h3" },
            { title: "Subtítulo", value: "h4" },
            { title: "Citação", value: "blockquote" },
          ],
          lists: [
            { title: "Lista", value: "bullet" },
            { title: "Numerada", value: "number" },
          ],
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "saibaMaisUrl",
      title: 'Link "Saiba mais"',
      type: "url",
      description:
        "Destino do botão Saiba mais (WhatsApp, contato, PDF, formulário externo).",
      validation: (r) => r.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    }),
    defineField({
      name: "inscricoesAbertas",
      title: "Inscrições abertas",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Data do curso (próximos primeiro)",
      name: "dataAsc",
      by: [{ field: "data", direction: "asc" }],
    },
    {
      title: "Publicação (recentes primeiro)",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titulo", subtitle: "modalidade", media: "imagem" },
  },
});
