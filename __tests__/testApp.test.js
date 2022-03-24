import {
  makeUppercase,
  replaceSpaces,
  limitLength,
} from '../scripts/helpers/stringHelpers';

test("makes the text uppercase", () => {
  expect(makeUppercase("lillian")).toBe("LILLIAN");
});

test("Replaces spaces with _", () => {
  expect(replaceSpaces("hello world")).toBe("hello_world");
});

test("removes the first three letters in the word", () => {
  expect(limitLength(3, "lillian")).toBe("lil");
});
