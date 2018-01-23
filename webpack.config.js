const path = require('path');
const webpack = require('webpack');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer-stylus');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
          test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=100000'
      },
      {
          test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  stylus: {
    use: [
      rupture(),
      autoprefixer()
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
