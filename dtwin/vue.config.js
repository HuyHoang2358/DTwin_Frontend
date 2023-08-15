const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

module.exports = defineConfig({
  transpileDependencies: true,
  /*devServer: {
    proxy: "http://172.16.30.214",
  },*/
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSource, "Assets"), to: "Assets" },
          { from: path.join(cesiumSource, "ThirdParty"), to: "ThirdParty" },
          { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
          { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" },
        ],
      }),
    ],
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
        url: false,
        stream: require.resolve("stream-browserify"),
      },
    },
  },
});
