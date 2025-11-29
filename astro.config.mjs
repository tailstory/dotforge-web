// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";
import { execSync } from "child_process";

// Get Git commit hash at build time
const getGitCommitHash = () => {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  } catch (error) {
    return "unknown";
  }
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
  ],
  output: "server",
  adapter: cloudflare(),
  vite: {
    build: {
      minify: false,
    },
    define: {
      __GIT_COMMIT_HASH__: JSON.stringify(getGitCommitHash()),
    },
  },
});
