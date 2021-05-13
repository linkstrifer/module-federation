const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = "http://strifer.link/module-federation";

const { name } = packageJson;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      remotes: {
        javascript: `javascript@${domain}/javascript/remoteEntry.js`,
        typescript: `typescript@${domain}/typescript/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
