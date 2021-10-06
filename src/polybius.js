// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Only spacesand letters are included
  //Output should still be a string when encoding
  //Number of characters, excluding spaces, should be even when decoding
  //if its not an even number, return false
  //spaces should be maintained
  //ignore capital letters
  //encoding, both i and j should be 42, decoding, i and j should be shown

 
    // type global variables of every letter with number pairs in square
    //number of characters in the string excluding spaces should be even
    //if num of characters isn't even return false
  
    let sqLetters = [ // set every letter to the number
      "11","21","31","41","51",
      "12","22","32","42","42",
      "52","13","23","33","43",
      "53","14","24","34","44",
      "54","15","25","35","45","55",
    ];

    let square = [ // every letter with i and j not combined yet
      "a","b","c","d","e",
      "f","g","h","i","j",
      "k","l","m","n","o",
      "p","q","r","s","t",
      "u","v","w","x","y","z",
    ];


    function polybius(input, encode = true) {
    if (!encode) { // if not encoding
      let inputArr = input.split(' '); // split the input 
      let inputDoubleSpaced = inputArr.join('  '); 
      if(inputDoubleSpaced.length % 2 != 0) return false; // if it's not even return false
      let alpha = sqLetters.reduce((acc, element, index) => {
        if(element === '42') { // reduced to get element to equal 42
          acc[element] = '(i/j)'; // used reduce to access the element and equal it to i/j
          return acc;
        }
          acc[element] = square[index]; 
        // with each element iterated through, equal that to the index of every letter in the square array
        return acc;
      }, {});
      const charCount = inputDoubleSpaced.length; // counts every character with added spaces
      const inputPairs = Array.from(Array(charCount/2)).map((element, index) => {
        // console.log("index: ", index) 
        if (inputDoubleSpaced[index * 2] === " ") return " ";
        return `${inputDoubleSpaced[(index * 2)]}${inputDoubleSpaced[((index * 2) + 1)]}`
      });
      // console.log("inputPairs: ",inputPairs);
      //return inputPairs.join("");
      let result = "";
      for (let pair of inputPairs) {
        if (pair === " ") {
          result += " ";
        } else {
          result += alpha[pair];
        }
      }
      // console.log(result);
      return result;
    }

    let alphabet = square.reduce((acc, element, index) => {
      acc[element] = sqLetters[index];
      return acc;
    }, {}); // gets index of every number, equal it to the element that we access through acc
    let encodedMsg = input.toLowerCase(); // encoded msg is lowercase, ignores cap letters
    let result = ""; 
    for (let character of encodedMsg) {
      if (character === " ") { 
        result += " "; // adds character to result if it has spaces
      } else {
        result += alphabet[character]; // adds each character of alphabet to result string
      }
    }
    return result; // ta da!
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };