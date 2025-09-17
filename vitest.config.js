import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    globals: true,
    css: true,
    coverage: {
      reporter: ["text", "html"],
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
});
