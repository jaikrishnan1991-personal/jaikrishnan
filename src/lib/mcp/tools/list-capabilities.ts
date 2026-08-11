import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioData } from "../../../data/portfolio-data";

export default defineTool({
  name: "list_capabilities",
  title: "List capabilities",
  description:
    "List Jaikrishnan's product, hardware, platform and leadership capabilities grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = portfolioData.capabilities.map((c) => ({
      category: c.title,
      skills: c.skills,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});