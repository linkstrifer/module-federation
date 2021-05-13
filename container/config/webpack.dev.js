const { merge } = require("webpack-merge");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const { port, name } = packageJson;

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
      name,
      remotes: {
        customer: "customer@http://localhost:8002/remoteEntry.js",
        transactions: "transactions@http://localhost:8003/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
