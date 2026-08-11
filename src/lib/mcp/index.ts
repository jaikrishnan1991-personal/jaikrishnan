import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listCapabilitiesTool from "./tools/list-capabilities";
import getCredentialsTool from "./tools/get-credentials";

export default defineMcp({
  name: "jaikrishnan-s-portfolio",
  title: "Jaikrishnan's Portfolio",
  version: "0.1.0",
  instructions:
    "Tools for exploring Jaikrishnan Ganeshan's public product portfolio. Use `get_profile` for who he is and how to reach him, `list_experience` for roles and achievements, `list_capabilities` for skills, and `get_credentials` for education, patents and innovations.",
  tools: [getProfileTool, listExperienceTool, listCapabilitiesTool, getCredentialsTool],
});