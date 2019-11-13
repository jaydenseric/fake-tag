# fake-tag changelog

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
