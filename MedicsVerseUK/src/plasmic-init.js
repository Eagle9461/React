import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "vL6qo4eDoyEhFY6FutGqkQ",  // ID of a project you are using
      token: "2XVLVbB6F2xUXZz9MxTOzTtZ055CrV8lSksZ8YQYIPlVm1W892eQZ7NT8Wzoe5tOuia3mPU68KMauntf4xQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})