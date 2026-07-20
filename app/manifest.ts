import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.nameEn,
    description: siteConfig.tagline,
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: siteConfig.language,
    categories: [...siteConfig.categories],
    icons: [
      {
        src: assetPath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
