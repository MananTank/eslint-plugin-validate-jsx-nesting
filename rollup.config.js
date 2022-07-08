import typescript from 'rollup-plugin-ts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.js',
		format: 'commonjs',
		exports: 'auto',
	},
	plugins: [typescript(), nodeResolve(), commonjs()],
}
