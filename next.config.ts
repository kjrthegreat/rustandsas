import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rustandsas",
  assetPrefix: "/rustandsas",
  images: { unoptimized: true },
};

export default nextConfig;
