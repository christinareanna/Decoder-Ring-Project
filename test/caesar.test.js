const caesar = require("../src/caesar.js").caesar;
const expect = require("chai").expect;
describe("caesar", () => {
    it('should return false if there is no shift, if shift is less than -25 or greater than 25.', () => {
        let expected = false
        let actual =  caesar("test if shift is less than -25", -30); // letters shift less than -25
        expect(actual).to.equal(expected); 
        let actualOne =  caesar("test if shift is more than 25", 30); // letters shift over 25
        expect(actualOne).to.equal(expected);
        let actualTwo =  caesar("test if there is no shift", 0); // no letters move/shift
        expect(actualTwo).to.equal(expected);
    });
    it('should ignore capital letters', () => {
        let expected = false;
        let actualThree = caesar("Thinkful"); // thinkful
        expect(actualThree).to.equal(expected);
    });
    it('should leave spaces and other symbols as they are', () => {
        let expected = false;
        let actualFour = caesar("A message!"); // a message!
        expect(actualFour).to.equal(expected);
    });
    it('should wrap around to front of the alphabet if it goes "off"', () => {
        let expected = 'c';
        let actualFour = caesar('z', 3); // literally wraps around the end of the alphabet to the beginning to get the letter c by shifting 3 times
        expect(actualFour).to.equal(expected);
    });
    it('should allow for a negative shift, shift to left', () => {
        let expected = 'qefkhcri';
        let actualFive = caesar('thinkful', -3); // shifts every character to the left to get encoded message
        expect(actualFive).to.equal(expected);
    });
    it('should decode message by shifting letters in opposite direction', () => {
        let expected = 'this is a secret message!'; 
      // ignores spaces, capital letters, and shifts every letter in the opposite direction, for example, s + 8 = a, t + 8 = b, decoding
        let actualSix = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actualSix).to.equal(expected);
    });
});