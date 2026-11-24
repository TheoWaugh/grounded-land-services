import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.158"],
  async redirects() {
    return [
      // Cities we don't serve (removed 2026-11-24): the city page and all of its service pages
      {
        source: "/service-areas/:city(stephenville|brady|cisco|caddo-mills)/:service*",
        destination: "/service-areas",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
