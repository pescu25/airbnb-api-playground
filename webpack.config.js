'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var isProduction = process.env.NODE_ENV == 'production';

var devOutput = {
  path: './src/public',
  publicPath: 'http://localhost:8080/',
  filename: 'bundle.js'
};

var prodOutput = {
  path: './dist',
  publicPath: '',
  filename: 'bundle.js'
};

module.exports = function makeWebpackConfig () {
  var config = {};

  config.entry = {
    app: './src/components/app'
  };

  config.output = isProduction ? prodOutput : devOutput;

  config.module = {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
         test: /\.scss$/,
         loader: "style!css!sass",
         exclude: [
             /node_modules/
         ]
       },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  config.devServer = {
    contentBase : './src/public',
    stats       : 'minimal'
  };

  return config;
}();
