const path = require("path");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "./src/bundle.js",
    path: path.resolve(__dirname, "BGS"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
