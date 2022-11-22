const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error handling for substitution", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("abc", "plmoknijbuhvygctfxrdzeswa");

    expect(actual).to.be.false;
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("abc");

    expect(actual) === "plm";
  });
  it("It returns false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("abc", "pplmoknijbuhvygctfxrdzeswa");

    expect(actual).to.be.false;
  });
  it("It maintains spaces in the message, before and after encoding or decoding", () => {
    const actual = substitution("a b c");

    expect(actual) === "p l m";
  });
  it("It ignores capital letters", () => {
    const actual = substitution("ABC");

    expect(actual) === "plm";
  });
});
