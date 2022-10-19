// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const lowercaseInput = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const key = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    let result = [];
    if (encode === true) {
      for (let i = 0; i < lowercaseInput.length; i++) {
        let letter = lowercaseInput[i];
        let index = alphabet.indexOf(letter);
        if (index < 0) {
          result.push(letter);
        } else if (index >= 0) {
          result.push(key[letter]);
        }
      }
      return result.join("");
    }
    if (encode === false) {
      let keyInverse = {};
      Object.keys(key).forEach((i) => (keyInverse[key[i]] = i));
      keyInverse["42"] = "(i/j)";
      let j = 0;
      while (j < input.length) {
        if (isNaN(parseInt(input[j]))) {
          result.push(input[j]);
          j++;
        } else {
          if (input.length === j + 1) {
            return false;
          }
          result.push(keyInverse[input[j] + input[j + 1]]);
          j += 2;
        }
      }
      return result.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
