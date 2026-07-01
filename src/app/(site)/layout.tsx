import { themeAsset } from "@/components/iaspe/data";
import Header from "@/components/iaspe/layout/Header";
import Footer from "@/components/iaspe/layout/Footer";
import CookieBanner from "@/components/iaspe/ui/CookieBanner";
import Preloader from "@/components/iaspe/ui/Preloader";
import VLibrasWidget from "@/components/iaspe/ui/VLibrasWidget";
import ThemeScripts from "@/components/iaspe/ui/ThemeScripts";

// template11 theme stylesheets, self-hosted under /public/iaspe-theme, loaded
// in the exact order the live site uses. `precedence` keeps React 19 from
// reordering them. These live in the (site) layout so they are scoped to the
// public site — the /studio route (outside this group) never loads them.
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

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
