import { defineCliConfig } from "sanity/cli";

// Lets the Sanity CLI (schema deploy, dataset, etc.) work from the web app.
export default defineCliConfig({
  api: {
    projectId: "cbvw3xbf",
    dataset: "production",
  },
});
