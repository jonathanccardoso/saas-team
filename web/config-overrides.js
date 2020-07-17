const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("root-import", {
    rootPathPrefix: "~",
    rootPathSuffix: "src",
  })
);
