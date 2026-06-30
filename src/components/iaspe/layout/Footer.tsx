// Site footer: "Quem Somos" column + contact card + copyright.
export default function Footer() {
  return (
    <footer className="text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row py-4">
              <div className="col-md-6 mb-5 mb-md-0">
                <h5 className="mb-3 text-uppercase text-base text-700">Quem Somos</h5>
                <p className="text-14 text-500 mb-3">
                  O IASPE – Instituto de Avaliações, Seleções e Processos Educacionais
                  é uma entidade especializada em apoiar a Administração Pública na
                  realização de concursos públicos, processos seletivos e programas de
                  capacitação, com foco na legalidade, eficiência e transparência.
                  Atuamos como parceiros técnicos dos municípios, oferecendo soluções
                  completas para a gestão de pessoas no setor público, desde o
                  planejamento dos certames até a capacitação dos profissionais
                  selecionados.{" "}
                </p>
                <a
                  className="link-underline-light text-700"
                  href="https://portal.iaspeconcursos.com.br/sobre"
                >
                  Saiba mais
                </a>{" "}
                e/ou{" "}
                <a
                  className="link-underline-light text-700"
                  href="https://portal.iaspeconcursos.com.br/contato"
                >
                  Contate-nos
                </a>
              </div>
              <div className="col-md-2 mb-5 mb-md-0"></div>
              <div className="col-md-4 bg-pattern-map">
                <div className="card border-0 text-left bg-dark text-white mb-3">
                  <h5 className="mb-0 p-3">INFORMAÇÕES</h5>
                  <address>
                    <ul className="list-unstyled" style={{ background: "rgba(0,0,0,0.1)" }}>
                      <li className="p-3">
                        <div className="media align-items-center">
                          <div className="media-left text-center mr-2">
                            <i
                              className="fa fa-envelope fa-2x text-light"
                              style={{ width: "2rem", height: "2rem" }}
                            ></i>
                          </div>
                          <div className="media-body text-16">
                            <a
                              className="text-white"
                              href="mailto:atendimento@iaspeconcursos.com.br"
                              title="E-mail para contato atendimento@iaspeconcursos.com.br"
                            >
                              atendimento@iaspeconcursos.com.br
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="p-3">
                        <div className="media align-items-center">
                          <div className="media-left text-center mr-2">
                            <i
                              className="fa fa-phone fa-2x text-light"
                              style={{ width: "2rem", height: "2rem" }}
                            ></i>
                          </div>
                          <div className="media-body text-18 text-500">
                            (18) 99653-7019
                          </div>
                        </div>
                      </li>
                      <li className="text-light p-3">
                        Em dias úteis, das <u>8h30</u> às <u>12h</u> e das <u>13h30</u> às{" "}
                        <u>17h</u>.
                      </li>
                    </ul>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright text-10 text-700">
              IASPE <br />
              <a
                href="http://gestoreditais.com.br"
                target="_blank"
                title="Conheça o Gestor Editais - Plataforma online de gestão de concursos e seletivos."
              >
                Desenvolvido por Gestor Editais © 2012 - 2026
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
