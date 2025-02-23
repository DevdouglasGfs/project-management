module.exports = {
  plugins: [
    require("postcss-utopia")({
      typeScale: {
        minWidth: 320,
        maxWidth: 1920,
        minFontSize: 16,
        maxFontSize: 22,
        minTypeScale: 1.2,
        maxTypeScale: 1.25,
        positiveSteps: 7,
        negativeSteps: 2,
        prefix: "step",
        relativeTo: "viewport-width",
      },
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-sorting"),
  ],
};
