const path = require("path");

module.exports = {
  entry: {
    filename: "./src/index.js"
  },
  output: {
    filename: "./build.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [["es2015", { modules: false }]]
        }
      }
    ]
  },
  plugins: []
};
