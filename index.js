/* eslint-disable jsdoc/check-param-names */

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
 * @example <caption>Tagging a GraphQL SDL string with `gql`.</caption>
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
module.exports = function fakeTag() {
  var tagArgs = arguments;
  return tagArgs[0].reduce(function (accumulator, string, index) {
    accumulator += string;
    if (index + 1 in tagArgs) accumulator += tagArgs[index + 1];
    return accumulator;
  }, '');
};
