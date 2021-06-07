'use strict';

/**
 * A fake template literal tag that doesn’t do anything except return the
 * tagged template string. Import and use the fake tag with the required name,
 * e.g. `gql`.
 * @kind function
 * @name fakeTag
 * @param {Array<string>} literals Template string literals.
 * @param {...*} expressions Template string expressions.
 * @returns {string} The tagged template string.
 * @example <caption>How to `import`.</caption>
 * ```js
 * import fakeTag from 'fake-tag';
 * ```
 * @example <caption>How to `require`.</caption>
 * ```js
 * const fakeTag = require('fake-tag');
 * ```
 * @example <caption>Tagging a [GraphQL](https://graphql.org) SDL string with `gql`.</caption>
 * ```js
 * import gql from 'fake-tag';
 *
 * const typeDefs = gql`
 *   "A foo."
 *   type Foo {
 *     "The \`Foo\` ID."
 *     id: ID!
 *   }
 * `;
 * ```
 */
module.exports = function fakeTag(literals, ...expressions) {
  let string = '';

  for (const [index, literal] of literals.entries()) {
    string += literal;

    if (index in expressions) string += expressions[index];
  }

  return string;
};
