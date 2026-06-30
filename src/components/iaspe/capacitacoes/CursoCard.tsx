import { urlForImage } from "@/sanity/image";
import { formatData, modalidadeBadgeClass } from "@/lib/format";

export type CursoListItem = {
  _id: string;
  titulo: string;
  slug: string;
  modalidade?: string | null;
  data?: string | null;
  diaSemana?: string | null;
  resumo?: string | null;
  imagem?: unknown;
  inscricoesAbertas?: boolean | null;
};

// Course card for the grid — styled with the template11/Bootstrap theme.
export default function CursoCard({ curso }: { curso: CursoListItem }) {
  const href = `/capacitacoes/${curso.slug}`;
  const cover = curso.imagem
    ? urlForImage(curso.imagem).width(640).height(360).fit("crop").auto("format").url()
    : null;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card border-0 shadow-sm h-100 hover-shadow-lg hover-translate-y-n10 text-left overflow-hidden">
        <a href={href} className="d-block position-relative">
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} className="card-img-top" alt={curso.titulo} />
          ) : (
            <div
              className="card-img-top bg-light d-flex align-items-center justify-content-center text-muted"
              style={{ height: 200 }}
            >
              <i className="fe fe-book text-30"></i>
            </div>
          )}
          {curso.modalidade && (
            <span
              className={`badge ${modalidadeBadgeClass(curso.modalidade)} text-white text-uppercase text-10 text-700 position-absolute px-2 py-1`}
              style={{ top: "0.75rem", left: "0.75rem" }}
            >
              {curso.modalidade}
            </span>
          )}
        </a>
        <div className="card-body d-flex flex-column p-4">
          {(curso.data || curso.diaSemana) && (
            <h5 className="text-700 text-dark mb-1 text-18">
              {formatData(curso.data)}
              {curso.data && curso.diaSemana ? " | " : ""}
              {curso.diaSemana}
            </h5>
          )}
          <p className="text-600 text-dark mb-2 text-15">{curso.titulo}</p>
          {curso.resumo && (
            <p className="text-muted text-14 mb-4">{curso.resumo}</p>
          )}
          <a
            href={href}
            className="btn btn-primary text-700 text-uppercase text-12 px-3 py-2 mt-auto align-self-start"
          >
            Ver curso
          </a>
        </div>
      </div>
    </div>
  );
}
