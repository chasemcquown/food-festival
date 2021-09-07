// in order to use the method webpack.ProvidePlugin, you must require webpack to use its methods
const webpack = require("webpack");

const path = require("path");

module.exports = {
    entry: "./assets/js/script.js",
    output: {
      path: path.join(__dirname + "/dist"),
      filename: "main.bundle.js"
    },
    plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    ],
    mode: "development"
};

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