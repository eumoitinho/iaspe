"use client";

import { useEffect } from "react";
import { SITE, themeAsset } from "../data";

// The template11 theme is jQuery-based. We load its scripts on the client,
// in the exact order the live site uses, after the static markup has hydrated.
// These plugins attach to static (non-React-managed) DOM nodes, so they don't
// conflict with React's rendering.
const SCRIPTS: string[] = [
  themeAsset("/public/assets-for-all/cookies/scripts.js"),
  themeAsset("/public/template11/assets/js/libs/jquery-2.2.4.min.js"),
  themeAsset("/public/template11/assets/js/libs/popper.js"),
  themeAsset("/public/template11/assets/js/libs/bootstrap.min.js"),
  themeAsset("/public/template11/assets/js/scrollreveal.min.js"),
  themeAsset("/public/template11/assets/js/waypoints.min.js"),
  themeAsset("/public/template11/assets/js/jquery.counterup.min.js"),
  themeAsset("/public/template11/assets/js/imgfix.min.js"),
  themeAsset("/public/template11/assets/plugins/plugin-parallax/parallax.min.js"),
  themeAsset("/public/template11/assets/plugins/plugin-mask/jquery.mask.min.js"),
  themeAsset("/public/template11/assets/plugins/plugin-owlcarousel/owl.carousel.min.js"),
  themeAsset("/public/template11/assets/plugins/plugin-lightgallery/js/lightgallery.min.js"),
  themeAsset("/public/template11/assets/js/custom.js"),
  themeAsset("/public/plugins/plugin-tail-select/js/tail.select-full.min.js"),
  themeAsset("/public/js-for-all/avisos.js"),
];

const VLIBRAS_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[data-theme-src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.themeSrc = src;
    s.onload = () => resolve();
    s.onerror = () => resolve(); // don't block the chain on a single failure
    document.body.appendChild(s);
  });
}

export default function ThemeScripts() {
  useEffect(() => {
    let cancelled = false;
    // The theme expects this global.
    (window as unknown as { BASE_URL: string }).BASE_URL = SITE.baseUrl;

    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (cancelled) return;
      // VLibras last
      await loadScript(VLIBRAS_SRC);
      const w = window as unknown as { VLibras?: { Widget: new (url: string) => void } };
      if (w.VLibras) new w.VLibras.Widget("https://vlibras.gov.br/app");
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
