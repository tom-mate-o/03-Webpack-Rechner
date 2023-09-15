const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'frontend', 'src', 'index.js'),
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        
        use: {
        loader: 'babel-loader',
        options: {
          presets: [
          ['@babel/preset-env', {targets: "defaults"}]
          ],
          plugins: 
            ['@babel/plugin-transform-runtime'],
          cacheDirectory: true,
        }
        
      }
      },
    
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'frontend', 'src', 'templates', 'calculator.html'),
      title: 'calculator.html'
    }),
  ]
};