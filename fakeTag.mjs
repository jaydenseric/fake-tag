// @ts-check

/**
 * A fake template literal tag that doesn’t do anything except return the tagged
 * template string. Import and use the fake tag with the required name, e.g.
 * `gql`.
 * @param {TemplateStringsArray} literals The template literal’s text segments.
 * @param {...unknown} expressions The template literal’s embedded expressions.
 * @returns {string} The tagged template string.
 * @example
 * Tagging a [GraphQL](https://graphql.org) SDL string with `gql`:
 *
 * ```js
 * import gql from "fake-tag";
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
export default function fakeTag(literals, ...expressions) {
  let string = "";

  for (const [index, literal] of literals.entries()) {
    string += literal;

    if (index in expressions) string += expressions[index];
  }

  return string;
}
