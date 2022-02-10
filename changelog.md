# fake-tag changelog

## 4.0.0

### Major

- Updated Node.js support to `^12.22.0 || ^14.17.0 || >= 16.0.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Removed `./package` from the package `exports` field; the full `package.json` filename must be used in a `require` path.
- The API is now ESM in `.mjs` files instead of CJS in `.js` files, [accessible via `import` but not `require`](https://nodejs.org/dist/latest/docs/api/esm.html#require).
- Implemented TypeScript types via JSDoc comments.

### Minor

- Added the main `./fakeTag.mjs` module to the package `exports` field to allow it to be deep imported.

### Patch

- Also run GitHub Actions CI with Node.js v17.
- Simplified package scripts.
- Simplified dev dependencies and config for ESLint.
- Check TypeScript types via a new package `types` script.
- Removed the [`jsdoc-md`](https://npm.im/jsdoc-md) dev dependency and the related package scripts, replacing the readme “API” section with manually written “Examples” and “Exports” sections.
- Added `esm` and `mjs` keywords to the package `keywords` field.
- Improved variable and test names within tests.
- Configured Prettier option `singleQuote` to the default, `false`.
- Added a `license.md` MIT License file.
- Improved documentation.

## 3.0.0

### Major

- Updated Node.js support to `^12.20 || >= 14.13`.
- Updated browser support to the Browserslist query `> 0.5%, not OperaMini all, not IE > 0, not dead`.
- Updated dev dependencies, some of which require newer Node.js versions than were previously supported.
- Added a package `exports` field.
- Refactored the published module to use more modern ES language features.
- The tests are now ESM in an `.mjs` file instead of CJS in a `.js` file.
- Use JSDoc comments and [`jsdoc-md`](https://npm.im/jsdoc-md) in package scripts to generate a new “API” readme section. The published module now contains JSDoc comments, which might affect TypeScript projects.

### Patch

- Updated dev dependencies.
- Add Node.js to the package `browserslist` field query.
- Updated GitHub Actions CI config:
  - Also run on pull request.
  - Run tests with Node.js v12, v14, v16.
  - Updated `actions/checkout` to v2.
  - Updated `actions/setup-node` to v2.
  - Use the simpler [`npm install-test`](https://docs.npmjs.com/cli/v7/commands/npm-install-test) command.
  - Don’t specify the `CI` environment variable as it’s set by default.
- Added a package `sideEffects` field.
- More specific package `main` path.
- Removed `npm-debug.log` from the `.gitignore` file as npm [v4.2.0](https://github.com/npm/npm/releases/tag/v4.2.0)+ doesn’t create it in the current working directory.
- Improved the package `test:prettier` script.
- Configured Prettier option `semi` to the default, `true`.
- The exported fake tag function now has the name `fakeTag` instead of being anonymous.
- Updated the EditorConfig.
- Readme tweaks.
- The file `changelog.md` is no longer published.

## 2.0.0

### Major

- Updated Node.js support from v8.10+ to v10+. This is mostly to do with dev dependencies and shouldn’t be a breaking change for the published package.
- Updated dev dependencies, some of which only support Node.js v10+.
- Use [`coverage-node`](https://npm.im/coverage-node) for test code coverage.

### Minor

- Setup [GitHub Sponsors funding](https://github.com/sponsors/jaydenseric):
  - Added `.github/funding.yml` to display a sponsor button in GitHub.
  - Added a `package.json` `funding` field to enable npm CLI funding features.

### Patch

- Removed the now redundant [`eslint-plugin-import-order-alphabetical`](https://npm.im/eslint-plugin-import-order-alphabetical) dev dependency.
- Use strict mode for scripts.
- In CI, additionally test macOS as well as Node.js v10 and v13.

## 1.0.1

### Patch

- Updated dev dependencies.
- Removed [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).
- Replaced old ESLint config with [`eslint-config-env`](https://npm.im/eslint-config-env).
- Use [`test-director`](https://npm.im/test-director) instead of [`ava`](https://npm.im/ava) for tests.
- Updated the package description.
- Simplified the package `repository` field.
- Added a package `main` field.
- Added a package `engines` field declaring support for Node.js >= v8.10, as that is what ESLint supports. This only limits the dev environment; the published code is very simple and should be able to run almost anywhere.
- Added a package `browserslist` field, for linting.
- Moved dev tool config from `package.json` to separate files to reduce the published package size.
- Updated package scripts.
- Ensure Prettier also lints `.yml` files.
- Replaced Travis with GitHub Actions for CI.
- Removed `package-lock.json` from the `.gitignore` file, as it has been disabled anyway.
- Removed some readme badges, and used [badgen.net](https://badgen.net) instead of [shields.io](https://shields.io) for the npm version badge.
- Updated the readme with more details, links, and a typo fix.
- Corrected the first version number in the changelog from `0.1.0` to `1.0.0`.

## 1.0.0

- Initial release.
