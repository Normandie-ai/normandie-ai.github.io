// @ts-check
import { config } from "dotenv";
import { defineConfig } from "astro/config";
import { resolve } from "path";

// Load environment variables from .env file
config();

import tailwindcss from "@tailwindcss/vite";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import matomo from "astro-matomo";

// Flexible base configuration
// For GitHub Pages: set ASTRO_BASE to your repository name
// For root hosting: set ASTRO_BASE to empty string or don't set it
const getBaseUrl = () => {
  // Check if we're building for GitHub Pages
  const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

  // Allow explicit override via environment variable
  if (process.env.ASTRO_BASE !== undefined) {
    return process.env.ASTRO_BASE;
  }

  // Default behavior for GitHub Pages
  if (isGitHubPages) {
    // Extract repository name from GITHUB_REPOSITORY (format: owner/repo)
    const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

    // If repository name matches GitHub Pages user/org site pattern (*.github.io),
    // it should be hosted at root
    if (repoName && repoName.endsWith(".github.io")) {
      return "";
    }

    // For project sites, use the repository name as base
    return repoName || "website";
  }

  // For local development and other hosting, use root
  return "";
};

const baseUrl = getBaseUrl();

export default defineConfig({
  site: "https://normandie-ai.github.io",
  base: baseUrl,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": resolve("./src/components"),
        "@layouts": resolve("./src/layouts"),
        "@interfaces": resolve("./src/interfaces"),
        "@styles": resolve("./src/styles"),
        "@lib": resolve("./src/lib"),
        "@assets": resolve("./src/assets"),
      },
    },
    preview: {
      allowedHosts: [
        "normandie-ai.github.io",
        ".normandie.ai", // Allow all subdomains
      ],
    },
  },
  integrations: [
    sentry(),
    spotlightjs(),
    ...(process.env.MATOMO_ENABLED === "true" && process.env.MATOMO_HOST && process.env.MATOMO_SITE_ID
      ? [matomo({
          enabled: true,
          host: process.env.MATOMO_HOST,
          siteId: parseInt(process.env.MATOMO_SITE_ID),
          disableCookies: process.env.MATOMO_DISABLE_COOKIES !== "false",
        })]
      : []),
  ],
});
