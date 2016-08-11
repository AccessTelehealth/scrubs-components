var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015', 'stage-0'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader'),
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=200000&minetype=application/font-woff"
    }],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules',],
    alias: {
      'scrubs-components': '../'
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      ignoreOrder: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
