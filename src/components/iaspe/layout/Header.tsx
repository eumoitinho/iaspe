import { SITE, NAV_LINKS, TERM_LINKS } from "../data";

// Sticky header: outer .main-nav shell + inner Bootstrap navbar.
// Collapse/toggle behaviour is handled by the theme's bootstrap.min.js.
export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href={SITE.baseUrl} className="logo">
                <img src={SITE.logo} width={185} className="mt-n2 d-none" alt="IASPE" />
              </a>

              <nav
                className="navbar navbar-expand-lg navbar-light bg-white"
                style={{ boxShadow: "0px 11px 25px -25px rgba(0,0,0,0.46)" }}
              >
                <div className="container">
                  <a
                    className="navbar-brand"
                    tabIndex={2}
                    href={SITE.baseUrl}
                    accessKey="i"
                    title="IASPE"
                  >
                    <img src={SITE.logo} alt="IASPE" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-md-auto">
                      {NAV_LINKS.map((l) => (
                        <li
                          key={l.accessKey}
                          className={l.current ? "nav-item active" : "nav-item "}
                        >
                          <a
                            className={
                              l.current
                                ? "nav-link text-700 active"
                                : "nav-link text-500"
                            }
                            tabIndex={l.tabIndex}
                            accessKey={l.accessKey}
                            href={l.href}
                            title={l.title}
                            aria-current={l.current ? "page" : undefined}
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                      <div className="termoInfo d-none">
                        {TERM_LINKS.map((l) => (
                          <li key={l.accessKey} className="nav-item">
                            <a
                              className="nav-link text-500"
                              target="_blank"
                              tabIndex={l.tabIndex}
                              accessKey={l.accessKey}
                              href={l.href}
                              title={l.title}
                            >
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>

              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
