import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioData } from "../../../data/portfolio-data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Jaikrishnan Ganeshan's public profile: name, title, tagline, location, contact links, resume and portfolio URLs, product philosophy and languages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const site = "https://jaikrishnan.in";
    const abs = (u: string) => (u.startsWith("/") ? site + u : u);
    const payload = {
      personal: {
        ...portfolioData.personal,
        website: site,
        resumeUrl: abs(portfolioData.personal.resumeUrl),
        portfolioUrl: abs(portfolioData.personal.portfolioUrl),
      },
      philosophy: portfolioData.philosophy.map((p) => p.text),
      languages: portfolioData.languages,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});