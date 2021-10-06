// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //input can include spaces and special characters
  //capital letters ignored
  //should maintain spaces
  //alphabet should be 26 characters including sp characters
  //otherwise return false

  function substitution(input, alphabet, encode = true) {
    //error handling
    if (!alphabet || alphabet.length !== 26) return false;
    //global variables
    const alpha = "abcdefghijklmnopqrstuvwxyz".split(""); // actual alphabet
    const msg = input.toLowerCase().split(""); // input in all lowercase set to msg
    const substituteAlpha = alphabet.toLowerCase().split(""); // alphabet to new substitution alphabet variable

    const specialCharacter = substituteAlpha.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (specialCharacter.length !== substituteAlpha.length) {
      return false;
    }

    const encodedMsg = () => {
      // empty because no parameters passing through yet
      let result = [];
      const encode = (character) => {
        // iterate through every character
        const chIndex = alpha.indexOf(character); // get index of every character in the real alphabet and set to character index
        const encodedCh = substituteAlpha[chIndex]; //access the index of every character in the substitution alphabet and set it to the character you want to encode
        result.push(encodedCh); // pushes encoded character to result array from each character index accessed from the substitution alphabet
      };
      msg.forEach((character) => {
        // iterate through each character in the message
        character === " " ? result.push(" ") : encode(character); // if the character has a space, push the space to the result, else, encode it like normal
      });
      return result.join(""); // returns the result array that preserves spaces
    };

    const decodedMsg = () => {
      let result = [];
      const decode = (character) => {
        // decoding each character by interating through the characters
        const chIndex = substituteAlpha.indexOf(character); // takes the index of each character in substitution alphabet
        const decodedCh = alpha[chIndex]; // sets each character index from substitute alphabet to a decoded character
        result.push(decodedCh); //pushes the decoded character to the empty array
      };
      msg.forEach((character) => {
        // accesses each character in the message
        character === " " ? result.push(" ") : decode(character); // for every character, push to result if spaces, else, decode the characters
      });
      return result.join(""); // joins and pushes to result to preserve spaces
    };

    return encode ? encodedMsg() : decodedMsg(); // if encoding, return encodedmsg, else, return decodedmsg
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
