import type { Metadata } from "next";
import "./globals.css";

// Minimal root layout shared by ALL routes (site + /studio). Intentionally has
// no site chrome or theme CSS — those live in the (site) route group's layout,
// so the embedded Sanity Studio at /studio renders clean.
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
      <body className="text-roboto">{children}</body>
    </html>
  );
}
