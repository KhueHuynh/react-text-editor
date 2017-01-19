var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "editor": "./src/editor.jsx",
    "style": "./src/_text-editor.scss"
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', '.']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dnd': 'ReactDnD'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'textEditor.js',
    libraryTarget: 'umd',
    library: 'Editor'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
  ]
};