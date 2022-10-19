// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (encode === false) {
      shift = -shift;
    }

    const result = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercaseInput = input.toLowerCase();

    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    for (let i = 0; i < lowercaseInput.length; i++) {
      let letter = lowercaseInput[i];
      let index = alphabet.indexOf(letter);
      if (index < 0) {
        result.push(letter);
      } else if (index >= 0 && shift < 0) {
        result.push(alphabet[(index + (shift + 26)) % 26]);
      } else {
        result.push(alphabet[(index + shift) % 26]);
      }
    }
    return result.join("");

    /*for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < inputArray; j++) {
        if (encode === true) {
          let word = inputArray[j];
          for (let k = 0; k < word.length; k++) {
            if (word[k] === alphabet[i]) {
              result.push(alphabet[(i + shift) % 26]);
            }
          }
          return result.join(" ");
        }
          for (let k = 0; k < word.length; k++) {
            if (word[k] === alphabet[i]) {
              result.push(alphabet[(i - shift) % 26]);
            }
          }
          return result.join(" ");
        }
      }*/
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
