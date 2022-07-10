import { isCompName } from '../rules/noInvalidJSXNesting'

it('works', () => {
	expect(isCompName('div')).toBe(false)
	expect(isCompName('p')).toBe(false)
	expect(isCompName('Foo')).toBe(true)
})
