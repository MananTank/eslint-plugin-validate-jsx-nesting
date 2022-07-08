import type { Rule } from 'eslint'
import type { JSXElement } from 'estree-jsx'
import { isValidHTMLNesting } from 'validate-html-nesting'

export function isCompName(tag: string) {
	return tag[0] === tag[0].toUpperCase()
}

function isJSXElement(node: any): node is JSXElement {
	return node && node.type === 'JSXElement'
}

export const validJSXNesting: Rule.RuleModule = {
	meta: {
		type: 'problem',
	},
	create(context) {
		return {
			JSXElement(node: any) {
				const jsxElement = node as JSXElement
				const parent = node.parent
				const elName = jsxElement.openingElement.name
				if (elName.type === 'JSXIdentifier') {
					const elTagName = elName.name
					if (!isCompName(elTagName)) {
						if (isJSXElement(parent)) {
							const parentElName = parent.openingElement.name
							if (parentElName.type === 'JSXIdentifier') {
								const parentElTagName = parentElName.name
								if (!isCompName(parentElTagName)) {
									if (!isValidHTMLNesting(parentElName.name, elName.name)) {
										const errorMessage = `Invalid HTML nesting: <${elName.name}> can not be child of <${parentElName.name}>`
										context.report({
											node,
											message: errorMessage,
										})
									}
								}
							}
						}
					}
				}
			},
		}
	},
}
