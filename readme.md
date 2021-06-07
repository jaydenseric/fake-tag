# fake-tag

[![npm version](https://badgen.net/npm/v/fake-tag)](https://npm.im/fake-tag) [![CI status](https://github.com/jaydenseric/fake-tag/workflows/CI/badge.svg)](https://github.com/jaydenseric/fake-tag/actions)

A fake template literal tag to trick syntax highlighters, linters and formatters into action. Interpolations and escapes are tested.

## Setup

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install fake-tag
```

## API

### function fakeTag

A fake template literal tag that doesn’t do anything except return the tagged template string. Import and use the fake tag with the required name, e.g. `gql`.

| Parameter     | Type          | Description                  |
| :------------ | :------------ | :--------------------------- |
| `literals`    | Array<string> | Template string literals.    |
| `expressions` | …\*           | Template string expressions. |

**Returns:** string — The tagged template string.

#### Examples

_How to `import`._

> ```js
> import fakeTag from 'fake-tag';
> ```

_How to `require`._

> ```js
> const fakeTag = require('fake-tag');
> ```

_Tagging a [GraphQL](https://graphql.org) SDL string with `gql`._

> ```js
> import gql from 'fake-tag';
>
> const typeDefs = gql`
>   "A foo."
>   type Foo {
>     "The \`Foo\` ID."
>     id: ID!
>   }
> `;
> ```

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
