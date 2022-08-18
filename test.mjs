// @ts-check

import { strictEqual } from "node:assert";
import TestDirector from "test-director";

import fakeTag from "./fakeTag.mjs";

const tests = new TestDirector();

tests.add("`fakeTag` with an empty template literal.", () => {
  strictEqual(fakeTag``, "");
});

tests.add("`fakeTag` with literal escapes.", () => {
  strictEqual(fakeTag`\``, "`");
});

tests.add("`fakeTag` with only a literal.", () => {
  strictEqual(fakeTag`1`, "1");
});

tests.add("`fakeTag` with only embedded expressions.", () => {
  strictEqual(fakeTag`${1}${2}${3}`, "123");
});

tests.add("`fakeTag` with embedded expressions surrounding a literal.", () => {
  strictEqual(fakeTag`${1}2${3}`, "123");
});

tests.add("`fakeTag` with literals surrounding embedded expressions.", () => {
  strictEqual(fakeTag`1${2}${3}4`, "1234");
});

tests.run();
