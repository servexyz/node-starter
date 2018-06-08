const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: ["idempotent-babel-polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@ava/babel-preset-stage-4"],
            plugins: [
              ["babel-plugin-dotenv", { replacedModuleName: "babel-dotenv" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin({
      verbose: true
    })
  ]
};
