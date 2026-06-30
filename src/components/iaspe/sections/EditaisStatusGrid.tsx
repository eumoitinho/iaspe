import { EDITAIS_CARDS } from "../data";

// "Concursos públicos e processos seletivos" heading + 4 status cards.
export default function EditaisStatusGrid() {
  return (
    <div className="container py-2 py-sm-5">
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <p className="text-heading-header text-30 text-uppercase text-500 text-dark text-roboto-condensed d-none d-md-block">
            CONCURSOS PÚBLICOS E PROCESSOS SELETIVOS
          </p>
          <p className="text-heading-header text-22 text-uppercase text-500 text-dark text-roboto-condensed d-block d-md-none">
            CONCURSOS PÚBLICOS
            <br />E PROCESSOS SELETIVOS
          </p>
          <hr className="w-25 mb-2 mb-sm-4 border-4 border-base-light" />
          <div className="row justify-content-center py-4">
            {EDITAIS_CARDS.map((card) => (
              <div key={card.href} className="col-lg-3">
                <div
                  className={`card py-5 hover-translate-y-n10 hover-shadow-lg shadow-sm text-center mb-3 mb-sm-0 border-0 ${card.bg}`}
                >
                  <div className="pb-3">
                    <i className={`${card.icon} text-30 text-white`}></i>
                  </div>
                  <div>
                    <h4 className="mb-3 text-white">
                      {card.title[0]}
                      <br />
                      {card.title[1]}
                    </h4>
                    <a
                      href={card.href}
                      className="link link-underline-white text-14 text-700"
                    >
                      CLIQUE PARA VER
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
