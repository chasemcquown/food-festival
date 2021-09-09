const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');

const config = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
    // new WebpackPwaManifest({
    //   name: "Food Event",
    //   short_name: "Foodies",
    //   description: "An app that allows you to view upcoming food events.",
    //   background_color: "#01579b",
    //   theme_color: "#ffffff",
    //   fingerprints: false,
    //   inject: false,
    //   icons: [{
    //     src: path.resolve("assets/img/icons/icon-512x512.png"),
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     destination: path.join("assets", "icons")
    //   }]
    // })
  ],
  mode: 'development'
};

module.exports = config;


// OCDE WITH NOTES BELOW
// module.exports = {
//     // NOTE: the entry point is the root of the bundle and the beginning of the dependency graph
//     entry: './assets/js/script.js',
//     // NOTE: webpack will next take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify. It is common and best practice to put your bundled code into a folder named dist, which is short for distribution
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.bundle.js'
//     },
//     // NOTE: you work with libraries that are dependent on the use of a global variable, just like jQuery is with $ and jQuery, you must tell webpack to make exceptions for these variables by using webpack.ProvidePlugin
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: "jquery",
//             jQuery: "jquery"
//         }),
//     ],
//     // NOTE: by default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions
//     mode: 'development'
// };