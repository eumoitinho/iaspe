import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The capacitações listing lives at "/" on this subdomain; keep the old
      // path working for any link already published.
      { source: "/capacitacoes", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
