import eslintPkg from "@eslint/js";
import tsPluginPkg from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// Get ESLint configuration and TypeScript plugin
const { config: eslintConfig, configs: eslintConfigs } = eslintPkg;
const { configs: tsConfigs } = tsPluginPkg;

// Define basic ESLint configuration object
const basicConfig = {
    ignores: [
        "dist/",
        "coverage/",
        ".github/",
        "eslint.config.mjs",
        "jest.config.ts",
      ],
  extends: [
    eslintConfigs.recommended, // Base ESLint recommended config
  ],
  parser: tsParser, // Use TypeScript parser
  parserOptions: {
    project: "./tsconfig.json", // Reference to tsconfig.json for type checking
  },
  rules: {
    // Add general ESLint rules here
    "no-console": "warn",
    "no-debugger": "warn",
  },
};

// Export the configuration directly as an object
export default basicConfig;
