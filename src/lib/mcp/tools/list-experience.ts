import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { portfolioData } from "../../../data/portfolio-data";

export default defineTool({
  name: "list_experience",
  title: "List professional experience",
  description:
    "List Jaikrishnan's professional experience entries (company, role, period, summary and achievements). Optionally filter by company name.",
  inputSchema: {
    company: z
      .string()
      .optional()
      .describe("Optional case-insensitive substring to filter by company or role."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ company }) => {
    const needle = company?.trim().toLowerCase();
    const items = needle
      ? portfolioData.experience.filter(
          (e) =>
            e.company.toLowerCase().includes(needle) ||
            e.title.toLowerCase().includes(needle),
        )
      : portfolioData.experience;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});