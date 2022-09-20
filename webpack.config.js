const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.scss']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "css-loader",
            options: {
                modules: {
                    localIdentName: 'SLT-[folder]__[local]'
                },
                sourceMap: false,
            }
          },

          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              sourceMap: false,
            }
          }
        ]
      },
    ],
    },
}