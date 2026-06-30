import { BANNERS } from "../data";

// Hero banner — Bootstrap carousel inside the .home-feature section.
// custom.css pulls this up to overlap the .welcome-area band above it.
export default function HeroBanner() {
  return (
    <section className="section home-feature mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div
                className="col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="features-small-item">
                  <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      {BANNERS.map((src, i) => (
                        <div
                          key={src}
                          className={`carousel-item pull-left p-0 ${i === 0 ? "active" : ""}`}
                        >
                          <img className="d-block w-100 rounded" src={src} alt="" />
                          <div
                            className="carousel-caption d-none d-md-block pull-left text-left px-4 w-100 rounded-bottom"
                            style={{ background: "rgba(0,0,0,0.5)", left: 0, bottom: 0 }}
                          >
                            <h5 className="text-700"></h5>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Próximo</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel"
                      role="button"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Anterior</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
