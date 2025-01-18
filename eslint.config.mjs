import eslintPkg from "@eslint/js";
import tsPluginPkg from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// Get ESLint configuration and TypeScript plugin
const { config: eslintConfig, configs: eslintConfigs } = eslintPkg;
const { configs: tsConfigs } = tsPluginPkg;

// Define basic ESLint configuration object
const basicConfig = {
  ignorePatterns: [
    "dist/",
    "coverage/",
    ".github/",
    "eslint.config.mjs",
    "jest.config.ts",
  ],
  extends: [
    eslintConfigs.recommended, // Base ESLint recommended config
    "plugin:@typescript-eslint/recommended", // Extend TypeScript recommended rules
  ],
  parser: tsParser, // Use TypeScript parser
  parserOptions: {
    project: "./tsconfig.json", // Reference to tsconfig.json for type checking
  },
  plugins: ["@typescript-eslint"], // Add TypeScript plugin for linting
  rules: {
    "no-console": "warn", // Warn about console logs
    "no-debugger": "warn", // Warn about debugger statements
    "@typescript-eslint/no-explicit-any": "warn", // Optional rule for controlling `any` type usage
    "@typescript-eslint/explicit-module-boundary-types": "warn", // Enforce type annotations for functions and methods
  },
};

// Export the configuration directly as an object
export default basicConfig;
