const autoprefixer = require('autoprefixer');
module.exports = [{
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { 
              loader: 'postcss-loader',
                options: {
                    plugins: () => [autoprefixer({ grid: false })]
                },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules']
              }
            }
        ]
      }]
    },
  }];

  module.exports.push({
    entry: './app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
  });