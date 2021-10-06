// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // words can be put here 
    
    function caesar(input, shift, encode = true) {
      if(!shift || shift < -25 || shift > 25) { // if there's no shift, or shift is less than -25, or shift is greater than 25, return false
        return false;
      }
      input = input.toLowerCase(); // sets input to lowercase to ignore capital letters
      let output = ""; // sets the output to an empty string
      if(encode === false) shift *= -1; // multiplies shift by -1 if it's not encoding
      if(shift < 0) shift+=26; // shift less than 0, add 26 to the shift to equal the length of alphabet 
  
      for(let character of input) { 
      let newCode = character;
      if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) { // accesses the characters at decimals 97 to 122 that are all lowercase at index 0
      // console.log(((character.charCodeAt(0) - 97 + shift) % 26) + 97);
      newCode = ((character.charCodeAt(0) - 97 + shift) % 26) + 97; 
      // console.log("encoded", String.fromCharCode(newCode));
      newCode = String.fromCharCode(newCode); 
      }
      output+=newCode; // add newCode and output
      };
    return output;
    };
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  