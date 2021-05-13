const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const port = 8003;

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "transactions",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
