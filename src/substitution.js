// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const lowercaseInput = input.toLowerCase();
    let result = [];
    const base = "abcdefghijklmnopqrstuvwxyz";

    if (!alphabet) {
      return false;
    } else if (alphabet.length < 26 || alphabet.length > 26) {
      return false;
    } else if ((new Set(alphabet)).size != alphabet.length) {
      return false;
    }

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        let letter = lowercaseInput[i];
        let index = base.indexOf(letter);
        if (index >= 0) {
          result.push(alphabet[index]);
        } else {
          result.push(letter);
        }
      }
      return result.join("");
    }

    if (encode === false) {
      for(let i = 0; i < input.length; i++) {
        let letter = input[i];
        let index = alphabet.indexOf(letter);
        
        if(index >= 0) {
          result.push(base[index]);
        } else {
          result.push(letter);
        }
      }
      return result.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
