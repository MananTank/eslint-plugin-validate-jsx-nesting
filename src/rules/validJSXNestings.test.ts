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
	valid: [
		{ code: '<p> foo </p>' },
		{ code: '<> <p> foo </p> <hr/> </>' },
		{ code: '<p> <span> foo </span> </p>' },
		{ code: '<> foo </>' },
		{ code: '<Foo/>' },
		{ code: '<Foo> <Bar /> </Foo>' },
		{ code: '<p> <Bar /> </p>' },
		{ code: '<P> <P /> </P>' },
	],
	invalid: [
		{
			code: '<p><hr /></p>',
			errors: [
				{
					message: 'Invalid HTML nesting: <hr> can not be child of <p>',
				},
			],
		},
		{
			code: '<p> <p> hi </p> </p>',
			errors: [
				{
					message: 'Invalid HTML nesting: <p> can not be child of <p>',
				},
			],
		},
	],
})
