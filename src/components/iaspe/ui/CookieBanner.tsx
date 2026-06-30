// LGPD cookie consent. Hidden by default (display:none); the theme's
// cookies/scripts.js reveals it and wires the "Aceitar" button.
export default function CookieBanner() {
  return (
    <div id="cookie-notification" className="CookieMessage" style={{ display: "none" }}>
      <div className="CookieMessage-content">
        <p>
          A ACT SISTEMAS utiliza cookies e outras tecnologias semelhantes para
          melhorar a sua experiência, de acordo com a nossa{" "}
          <b>
            <a href="">Política de Privacidade</a>
          </b>{" "}
          e, ao continuar navegando, você concorda com estas condições.
        </p>
        <p>
          <a id="cookie-notification-close" className="CookieMessage-button" href="#">
            Aceitar
          </a>
        </p>
      </div>
    </div>
  );
}
