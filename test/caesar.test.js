// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling for caesar", () => {
  it("Should return false if the shift number is 0", () => {
    const actual = caesar("hi how are you", 0);

    expect(actual).to.be.false;
  });
  it("should return false if the shift number is less than -25", () => {
    const actual = caesar("hi how are you", -26);

    expect(actual).to.be.false;
  });
  it("should return false if the shift number is greater than 25", () => {
    const actual = caesar("hi how are you", 26);

    expect(actual).to.be.false;
  });
  it("should ignore case differences", () => {
    const actualOne = caesar("hi how are you", 10);
    const actualTwo = caesar("HI HOW ARE YOU", 10)

    expect(actualOne === actualTwo);
  });
  it("should ignore shifts that go past the end of the alphabet", () => {
    const actual = caesar("z", 3);

    expect(actual === "c");
  });
  it("should ignore nonalphabet symbols", () => {
    const actual = caesar(",", 10);

    expect(actual === ",");
  });
});
