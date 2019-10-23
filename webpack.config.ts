import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const config: Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.ts'),
	target: 'web',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.ejs')
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	externals: {
		phaser: 'Phaser'
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	},
	devServer: {
		open: true
	}
}

export default config
