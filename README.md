# eslint-plugin-validate-jsx-nesting

Find Invalid HTML Nesting in JSX, like this:

<img src="assets/demo.png"  />

## Why this validation is important?

Without such validation, When JSX is converted to HTML and rendered in the DOM, the browser will try to fix the invalid nestings ( such as `<p>` inside `<p>` ) and thus the rendered DOM will have a different structure than the JSX structure.

This is a big issue for frameworks that rely on JSX rendering the exact same elements in DOM. This can lead to unexpected behaviors.

This plugin uses the [validate-html-nesting](https://github.com/MananTank/validate-html-nesting) library for validating HTML element nesting

<br/>

### Framework agnostic

This ESLint plugin works with any framework that uses JSX

<br/>

## Install

```bash
npm i -D eslint-plugin-validate-jsx-nesting
```

## Usage

### Step 1: Add the plugin in ESLint Config

Add `"eslint-plugin-validate-jsx-nesting"` to the plugins section of your ESLint configuration file. You can omit the `"eslint-plugin-"` prefix if you want.

```json
{
	"plugins": ["validate-jsx-nesting"]
}
```

### Step 2: Add the Plugin's rule

This plugin only has one rule `"no-invalid-jsx-nesting"`.

Add the `"validate-jsx-nesting/no-invalid-jsx-nesting"` rule in your ESLint config file as shown below

```json
"rules": {
	"validate-jsx-nesting/no-invalid-jsx-nesting": "error"
}
```

<br />

## Testing Suite

The core validation logic is in [validate-html-nesting](https://github.com/MananTank/validate-html-nesting) library and you can checkout the testing suite [here](https://github.com/MananTank/validate-html-nesting/blob/main/tests/validation.test.js).

<br />
<br />

## See also: Related Libraries

- [babel-plugin-validate-jsx-nesting](https://github.com/MananTank/validate-jsx-nesting)
- [validate-html-nesting](https://github.com/MananTank/validate-html-nesting)
