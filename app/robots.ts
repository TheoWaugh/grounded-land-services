import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // Explicitly allow all major AI crawlers — full site access
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Diffbot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Omgili", allow: "/" },
    ],
    sitemap: "https://www.groundedlandservices.com/sitemap.xml",
    host: "https://www.groundedlandservices.com",
  };
}
