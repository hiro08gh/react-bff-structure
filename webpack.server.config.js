const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.tsx',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
    ],
  },
};
