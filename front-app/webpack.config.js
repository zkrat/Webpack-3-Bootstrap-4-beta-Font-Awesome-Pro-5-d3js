const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')


const extractSass = new ExtractTextPlugin({
  filename: "css/styles.css",
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, '../www')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
          exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: 'es2015'
          }
        }]
      },
      {
        test: /\.(scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        })
      },  {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: '../',
                        useRelativePath: false,
                        outputPath: '',
                        name: 'css/webfonts/[hash].[ext]'
                        //name: '[path][hash].[ext]'
                    },

                }
            ]
        },

    ]
  },
  plugins: [

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      d3: "d3",
      Popper: ['popper.js', 'default']
    }),
    extractSass
  ],
    watch: true
};