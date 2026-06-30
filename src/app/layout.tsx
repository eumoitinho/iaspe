import type { Metadata } from "next";
import "./globals.css";
import { themeAsset } from "@/components/iaspe/data";
import Header from "@/components/iaspe/layout/Header";
import Footer from "@/components/iaspe/layout/Footer";
import CookieBanner from "@/components/iaspe/ui/CookieBanner";
import Preloader from "@/components/iaspe/ui/Preloader";
import VLibrasWidget from "@/components/iaspe/ui/VLibrasWidget";
import ThemeScripts from "@/components/iaspe/ui/ThemeScripts";

// template11 theme stylesheets, self-hosted under /public/iaspe-theme,
// loaded in the exact order the live site uses. `precedence` keeps React 19
// from reordering them (cascade order matters: bootstrap first, overrides last).
const THEME_CSS = [
  "/public/template11/assets/css/bootstrap.min.css",
  "/public/template11/assets/css/font-awesome.css",
  "/public/template11/assets/fonts/feather/feather.css",
  "/public/template11/plugins/plugin-owl-carousel/assets/owl.carousel.min.css",
  "/public/template11/plugins/plugin-owl-carousel/assets/owl.theme.default.min.css",
  "/public/template11/assets/css/helpers.css",
  "/public/template11/assets/css/custom.css",
  "/public/assets-for-all/css/style.css",
  "/public/plugins/plugin-tail-select/css/bootstrap4/tail.select-default.min.css",
  "/public/local.css",
  "/public/assets-for-all/cookies/styles.css",
];

export const metadata: Metadata = {
  title: "IASPE",
  description: "IASPE — Instituto de Avaliações, Seleções e Processos Educacionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="text-roboto">
        {THEME_CSS.map((p) => (
          <link key={p} rel="stylesheet" href={themeAsset(p)} precedence="theme" />
        ))}

        <CookieBanner />
        <Preloader />
        <Header />

        {children}

        <Footer />
        <VLibrasWidget />
        <ThemeScripts />
      </body>
    </html>
  );
}
