import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioData } from "../../../data/portfolio-data";

export default defineTool({
  name: "get_credentials",
  title: "Get education, patents and innovations",
  description:
    "Get Jaikrishnan's education history, granted patents and notable technical innovations.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      education: portfolioData.education,
      patents: portfolioData.patents,
      innovations: portfolioData.innovations,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});