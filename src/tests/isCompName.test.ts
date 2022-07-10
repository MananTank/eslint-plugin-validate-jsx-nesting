import { isCompName } from '../rules/validJSXNestings'

it('works', () => {
	expect(isCompName('div')).toBe(false)
	expect(isCompName('p')).toBe(false)
	expect(isCompName('Foo')).toBe(true)
})
