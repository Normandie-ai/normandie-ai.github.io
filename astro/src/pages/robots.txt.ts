import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  // Check if we're in development mode
  // import.meta.env.MODE is 'development' with yarn dev, 'production' with yarn build
  const isDevelopment = import.meta.env.MODE === "development";

  const robotsTxt = isDevelopment
    ? `# Disallow all bots
User-agent: *
Disallow: /`
    : `# Allow all bots
User-agent: *
Allow: /`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
