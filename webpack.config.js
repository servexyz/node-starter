const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const NodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["idempotent-babel-polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    libraryTarget: "commonjs"
  },
  target: "node",
  externals: [NodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "source-map-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    symlinks: false
  },
  plugins: [
    new NodemonPlugin({
      verbose: true
    }),
    new DuplicatePackageCheckerPlugin()
  ]
};
