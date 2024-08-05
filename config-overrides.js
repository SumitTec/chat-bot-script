const { override, overrideWebpackConfig } = require("customize-cra");

module.exports = override((config) => {
  const jsRule = config.module.rules.find(
    (rule) => rule.test && rule.test.toString().includes("js")
  );

  jsRule.oneOf.forEach((oneOf) => {
    if (oneOf.loader && oneOf.loader.includes("file-loader")) {
      oneOf.options.name = "static/js/[name].js";
    }
  });

  return config;
});
