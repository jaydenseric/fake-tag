// @ts-check

import { strictEqual } from "assert";
import TestDirector from "test-director";

import tag from "./fakeTag.mjs";

const tests = new TestDirector();

tests.add("Empty.", () => {
  strictEqual(tag``, "");
});

tests.add("Escapes.", () => {
  strictEqual(tag`\``, "`");
});

tests.add("No variables.", () => {
  strictEqual(tag`1`, "1");
});

tests.add("Only variables.", () => {
  strictEqual(tag`${1}${2}${3}`, "123");
});

tests.add("Surrounding variables.", () => {
  strictEqual(tag`${1}2${3}`, "123");
});

tests.add("Surrounded variables.", () => {
  strictEqual(tag`1${2}${3}4`, "1234");
});

tests.run();
