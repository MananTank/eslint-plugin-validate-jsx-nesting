import { isJSXElement } from '../rules/validJSXNestings'

it('works', () => {
	expect(isJSXElement(null)).toBe(false)
	expect(isJSXElement(undefined)).toBe(false)
	expect(isJSXElement(10)).toBe(false)
	expect(isJSXElement({})).toBe(false)
	expect(isJSXElement({ type: 'JSXElement' })).toBe(true)
	expect(isJSXElement({ type: 'VariableDeclaration' })).toBe(false)
})
