var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index',
    './src/docs'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015', 'stage-0', 'react-hmre',],
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.svg$/,
      loaders: ['react-svgdom', 'svgo',],
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000',
    },],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules',],
    alias: {
      'scrubs-components': '../'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
