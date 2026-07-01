import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { CAPACITACOES_QUERY } from "@/sanity/queries";
import CursoCard, {
  type CursoListItem,
} from "@/components/iaspe/capacitacoes/CursoCard";

export const metadata: Metadata = {
  title: "Capacitações | IASPE",
  description:
    "Cursos de capacitação do IASPE para a Administração Pública — concursos, processos seletivos e gestão de pessoas.",
};

const options = { next: { revalidate: 60 } };

export default async function CapacitacoesPage() {
  const cursos = await client.fetch<CursoListItem[]>(
    CAPACITACOES_QUERY,
    {},
    options
  );

  return (
    <>
      {/* Page title band */}
      <section className="below-header pb-4 pb-sm-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="text-heading-header text-30 text-700 text-dark text-uppercase mb-0">
                Capacitações
              </h1>
              <p className="text-15 text-muted mb-0 mt-1">
                Cursos e treinamentos para a Administração Pública.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="section py-5">
        <div className="container">
          {cursos.length === 0 ? (
            <div className="text-center text-muted py-5">
              <i className="fe fe-book text-30 d-block mb-3"></i>
              <p className="text-16">Nenhuma capacitação publicada ainda.</p>
            </div>
          ) : (
            <div className="row">
              {cursos.map((curso) => (
                <CursoCard key={curso._id} curso={curso} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
