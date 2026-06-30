import { SITE, themeAsset } from "../data";

// "Área do candidato" CTA band with the patterned background.
export default function CandidateArea() {
  return (
    <div
      className="py-2 py-sm-5"
      style={{
        backgroundImage: `url('${themeAsset("/public/template11/img/patterns/candidato_pattern.jpg")}')`,
        backgroundSize: "cover",
        backgroundBlendMode: "color",
        backgroundColor: "rgba(255,255,255,0.9)",
      }}
    >
      <div className="container py-2 py-sm-5">
        <div className="row justify-content-center py-2 py-sm-5">
          <div className="col-auto text-center">
            <h3 className="text-heading-header text-20 text-uppercase text-700 text-dark mb-2">
              ÁREA DO CANDIDATO
            </h3>
            <p className="mb-3 text-18 text-500 text-dark d-none d-sm-block">
              Na área do candidato, podem ser feitas inscrições online, reimpressões
              de documentos, acompanhamento do edital, acompanhamento de relatórios,
              consulta à nota detalhada obtida no concurso e muito mais.
            </p>
            <a
              href={SITE.candidatoUrl}
              target="_blank"
              className="btn btn-outline-dark border-2 text-700 text-14 px-3 py-2"
            >
              CLIQUE PARA ACESSAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
