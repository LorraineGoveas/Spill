const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',

  entry: {
    'app': [
      'webpack-hot-middleware/client?reload=true'
    ]
  },
    //
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }

                ],

                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]

            }
        ]
    },

  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },



  devServer: {
    contentBase: './client/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  },

});
