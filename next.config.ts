import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rustandsas",
  assetPrefix: "/rustandsas",
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: "/rustandsas" },
};

export default nextConfig;
