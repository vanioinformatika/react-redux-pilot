var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
/* Az osszecsomagolt js bundle filebol kiveszi kulon fileba a css blokkokat */
var plugins = [new ExtractTextPlugin('./assets/css/style.css')]
module.exports = {
  entry: './main.jsx',
  output: {
    path: __dirname,
    filename: './index.js'
  },
  devServer: {
    inline: true, // server code can be altered in runtime
    port: 3000,
    stats: { colors: true },
    hot: true,
    progress: true
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=../img/[name].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './assets')],
    sourceComments: true,
    outputStyle: 'compact'
  },
  plugins: plugins
}
