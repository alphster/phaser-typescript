import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// @ts-ignore
import HtmlWebpackExternalsPlugin from 'html-webpack-externals-plugin'
import path from 'path'

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'phaser',
          entry: 'https://cdn.jsdelivr.net/npm/phaser@3.20.1/dist/phaser-arcade-physics.min.js',
          global: 'Phaser',
        },
      ],
    })    
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    open: true
  }
}

export default config