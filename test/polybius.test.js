// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("error handling for polybius", () => {
  it("Should return 42 for the letters i and j", () => {
    const actual = polybius("ij");

    expect(actual === "4242");
  });
  it("Should return (i/j) for the number 42", () => {
    const actual = polybius("42", (encode = false));

    expect(actual === "(i/j)");
  });
  it("Should ignore capital letters", () => {
    const actual = polybius("ABC");

    expect(actual === "112131");
  });
  it("Should return decoded message with spaces", () => {
    const actual = polybius("11 21 31", (encode = false));

    expect(actual === "a b c");
  });
  it("Should return encoded message with spaces", () => {
    const actual = polybius("a b c");

    expect(actual === "11 21 31");
  });
});
