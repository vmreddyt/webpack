var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path:'./build',
    filename: 'app.all.js'
  },
  module:{
  	loaders:[{
  		test: /\.js$/,
  		include:path.resolve(__dirname, 'src'),
  		loader:'babel-loader',
  		query:{
  			presets:['es2015']
  		}
  	}]
  },
  watch:true
}
