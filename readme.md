# fake-tag

[![npm version](https://badgen.net/npm/v/fake-tag)](https://npm.im/fake-tag) [![CI status](https://github.com/jaydenseric/fake-tag/workflows/CI/badge.svg)](https://github.com/jaydenseric/fake-tag/actions)

A fake template literal tag to trick syntax highlighters, linters and formatters into action. Interpolations and escapes are tested.

This hack will be redundant once comment tags are supported by tools [such as Prettier](https://github.com/prettier/prettier/issues/4360):

<!-- prettier-ignore -->
```js
/* GraphQL */`
  {
    foo
  }
`
```

## Install

Install with [npm](https://npmjs.com):

```sh
npm install fake-tag
```

## Usage

Import and use the tag with the required name:

```js
import gql from 'fake-tag'

const typeDefs = gql`
  "A foo."
  type Foo {
    "The \`Foo\` ID."
    id: ID!
  }
`
```

## Why not `String.raw`?

It doesn’t unescape characters. For the usage example, if you `console.log(typeDefs)` before and after replacing the import with `const gql = String.raw` you will see the difference in the type description markdown:

```diff
    "A foo."
    type Foo {
-     "The `Foo` ID."
+     "The \`Foo\` ID."
      id: ID!
    }
```
