var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.join(__dirname, 'docs')
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules\/(?!scrubs-(icons|libs)\/).*/,
      loader: 'babel',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000',
    }, {
      test: /\.svg$/,
      loaders: ['react-svgdom', 'svgo']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=200000&minetype=application/font-woff"
    }],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'wip_modules',
    ],
    alias: {
      traits: 'scrubs-traits',
      icons: 'scrubs-icons',
      theme: 'scrubs-theme'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    contentBase: 'docs/'
  }
}
