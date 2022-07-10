import type { Rule } from 'eslint'
import type { JSXElement, JSXIdentifier } from 'estree-jsx'
import { isValidHTMLNesting } from 'validate-html-nesting'

/** If the name starts with uppercase, it's a component name  */
export function isCompName(str: string) {
	return str[0] === str[0].toUpperCase()
}

/** node is JSXElement if it's type is JSXElement  */
export function isJSXElement(node: any): node is JSXElement {
	return typeof node === 'object' && node !== null && node.type === 'JSXElement'
}

export const validJSXNesting: Rule.RuleModule = {
	meta: {
		type: 'problem',
	},
	create(context) {
		return {
			JSXElement(node: any) {
				// get node and it's parent
				const jsxElement = node as JSXElement
				const parent = node.parent

				// return if node is not a native element
				const elName = jsxElement.openingElement.name
				if (elName.type !== 'JSXIdentifier') return
				if (isCompName(elName.name)) return

				// return if parent is not a native element
				if (!isJSXElement(parent)) return
				const parentElName = parent.openingElement.name
				if (parentElName.type !== 'JSXIdentifier') return
				if (isCompName(parentElName.name)) return

				// if both are native elements, check if the nesting is valid
				// return if nesting is valid
				if (isValidHTMLNesting(parentElName.name, elName.name)) return

				// report error if nesting is invalid
				context.report({
					node,
					message: `Invalid HTML nesting: <${elName.name}> can not be child of <${parentElName.name}>`,
				})
			},
		}
	},
}
