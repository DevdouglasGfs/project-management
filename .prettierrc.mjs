/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        arrowParens: "always",
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: "lf",
        printWidth: 90,
      },
    },
  ],
};
