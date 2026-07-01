import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import {
  CAPACITACAO_QUERY,
  CAPACITACOES_SLUGS_QUERY,
} from "@/sanity/queries";
import { formatData, modalidadeBadgeClass } from "@/lib/format";
import PortableBody from "@/components/iaspe/capacitacoes/PortableBody";

type Curso = {
  _id: string;
  titulo: string;
  slug: string;
  modalidade?: string | null;
  data?: string | null;
  diaSemana?: string | null;
  cargaHoraria?: string | null;
  investimento?: string | null;
  professor?: { nome?: string; foto?: unknown; bio?: string } | null;
  resumo?: string | null;
  corpo?: unknown;
  saibaMaisUrl?: string | null;
  imagem?: unknown;
};

const options = { next: { revalidate: 60 } };

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    CAPACITACOES_SLUGS_QUERY,
    {},
    { next: { revalidate: 3600 } }
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const curso = await client.fetch<Curso | null>(
    CAPACITACAO_QUERY,
    { slug },
    options
  );
  if (!curso) return { title: "Capacitação | IASPE" };
  return {
    title: `${curso.titulo} | IASPE`,
    description: curso.resumo ?? undefined,
  };
}

export default async function CapacitacaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curso = await client.fetch<Curso | null>(
    CAPACITACAO_QUERY,
    { slug },
    options
  );

  if (!curso) notFound();

  const cover = curso.imagem
    ? urlForImage(curso.imagem).width(800).auto("format").url()
    : null;
  const profFoto = curso.professor?.foto
    ? urlForImage(curso.professor.foto).width(200).height(200).fit("crop").url()
    : null;
  const saibaMaisUrl =
    curso.saibaMaisUrl || "https://portal.iaspeconcursos.com.br/contato";

  return (
    <>
      {/* Title band */}
      <section className="below-header pb-4 pb-sm-5 bg-light">
        <div className="container">
          <a
            href="/capacitacoes"
            className="text-14 text-700 link-underline d-inline-block mb-2"
          >
            <i className="fe fe-arrow-left mr-1"></i> Capacitações
          </a>
          <h1 className="text-heading-header text-28 text-700 text-dark mb-0">
            {curso.titulo}
          </h1>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="row">
            {/* Main content */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              {curso.resumo && (
                <p className="text-16 text-600 text-dark mb-4">{curso.resumo}</p>
              )}

              <PortableBody value={curso.corpo} />

              {curso.professor?.nome && (
                <div className="mt-5">
                  <h3 className="text-700 text-dark text-22 mb-3">Professor(a)</h3>
                  <div className="media align-items-start">
                    {profFoto && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profFoto}
                        alt={curso.professor.nome}
                        className="rounded mr-3"
                        width={120}
                        height={120}
                      />
                    )}
                    <div className="media-body">
                      <h4 className="text-700 text-dark text-18 mb-2">
                        {curso.professor.nome}
                      </h4>
                      {curso.professor.bio && (
                        <p className="text-14 text-500 text-muted mb-0">
                          {curso.professor.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm overflow-hidden">
                {cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cover} alt={curso.titulo} className="card-img-top" />
                )}
                <div className="card-body">
                  {curso.modalidade && (
                    <span
                      className={`badge ${modalidadeBadgeClass(curso.modalidade)} text-white text-uppercase text-10 text-700 px-2 py-1 mb-3`}
                    >
                      {curso.modalidade}
                    </span>
                  )}
                  {(curso.data || curso.diaSemana) && (
                    <h5 className="text-700 text-dark text-18 mb-3">
                      {formatData(curso.data)}
                      {curso.data && curso.diaSemana ? " | " : ""}
                      {curso.diaSemana}
                    </h5>
                  )}

                  <ul className="list-unstyled text-14 text-500 mb-4">
                    {curso.cargaHoraria && (
                      <li className="d-flex align-items-center mb-2">
                        <i className="fe fe-clock text-muted mr-2"></i>
                        Carga horária: {curso.cargaHoraria}
                      </li>
                    )}
                    {curso.investimento && (
                      <li className="d-flex align-items-center mb-2">
                        <i className="fe fe-tag text-muted mr-2"></i>
                        Investimento: {curso.investimento}
                      </li>
                    )}
                  </ul>

                  <a
                    href={saibaMaisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block text-700 text-uppercase text-14 py-2"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
