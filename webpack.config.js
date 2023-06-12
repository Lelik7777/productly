// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: ["./src/index.js", "./src/sass/style.scss"],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 5000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    //! использую copy plugin для динамической отрисовки картинок через js
    new CopyPlugin({
      patterns: [
        {
          //! могу ,прописав путь, брать только тот контент в сборку,который нужен
          from: path.resolve(
            __dirname,
            "src",
            "assets",
            "images",
            "strategies"
          ),
          //! нужно помнить,что именно этот путь нужно указывать в файле с данными  imgUrl: './assets/nameImage.jpg
          to: path.resolve(__dirname, "dist", "assets"),
          noErrorOnMissing: true,
        },
      ],
    }),
    new CleanWebpackPlugin(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
