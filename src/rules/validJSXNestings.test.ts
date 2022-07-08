import { RuleTester } from 'eslint'
import { validJSXNesting } from './validJSXNestings'

const tester = new RuleTester({
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
})

tester.run('no-invalid-jsx-nesting', validJSXNesting, {
	valid: [{ code: '<p> <span> hi </span></p>' }],
	invalid: [
		{
			code: '<p> <p> hi </p></p>',
			errors: [
				{
					message: 'Invalid HTML nesting: <p> can not be child of <p>',
				},
			],
		},
	],
})
