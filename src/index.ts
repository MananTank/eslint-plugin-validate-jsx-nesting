import { validJSXNesting } from './rules/validJSXNestings'

export default {
	rules: {
		'no-invalid-jsx-nesting': validJSXNesting,
	},
}
