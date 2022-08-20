# fake-tag

A fake template literal tag to trick syntax highlighters, linters and formatters into action. Interpolations and escapes are tested.

## Installation

For [Node.js](https://nodejs.org), to install [`fake-tag`](https://npm.im/fake-tag) with [npm](https://npmjs.com/get-npm), run:

```sh
npm install fake-tag
```

For [Deno](https://deno.land) and browsers, an example import map:

```json
{
  "imports": {
    "fake-tag": "https://unpkg.com/fake-tag@4.0.0/fakeTag.mjs"
  }
}
```

Then, import and use the template literal tag [`fakeTag`](./fakeTag.mjs).

## Examples

Tagging a [GraphQL](https://graphql.org) SDL string with `gql`:

```js
import gql from "fake-tag";

const typeDefs = gql`
  "A foo."
  type Foo {
    "The \`Foo\` ID."
    id: ID!
  }
`;
```

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- [Deno](https://deno.land).
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

Non [Deno](https://deno.land) projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`fake-tag`](https://npm.im/fake-tag) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). These ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`fakeTag.mjs`](./fakeTag.mjs)

## FAQ

### Why not comment tags?

A comment tag looks like this:

```js
const QUERY = /* GraphQL */ `
  {
    foo
  }
`;
```

They are far superior to a fake tag:

- No dependency to manage.
- No inconvenient imports.
- No bundle size bloat.
- No runtime overhead.

Unfortunately not all tools support them yet. [`prettier` has since v1.13.0](https://github.com/prettier/prettier/issues/4360#issuecomment-392391729), but [`eslint-plugin-graphql` at v3.1.0 still doesn’t](https://github.com/apollographql/eslint-plugin-graphql/issues/224).

### Why not `String.raw`?

This may be temptingly simple:

```js
const gql = String.raw;
const QUERY = gql`
  {
    foo
  }
`;
```

However, it doesn’t unescape characters. For the usage example, if you `console.log(typeDefs)` before and after replacing the import with `const gql = String.raw` you will see the difference in the type description markdown:

```diff
    "A foo."
    type Foo {
-     "The `Foo` ID."
+     "The \`Foo\` ID."
      id: ID!
    }
```
