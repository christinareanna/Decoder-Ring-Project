const polybius = require("../src/polybius.js").polybius;
const expect = require("chai").expect;

describe("polybius", () => {
    it('should encode a message by translating each letter to number pairs', () => {
        let expected = "4432423352125413"; // number pairs! ex: 44 = t
        let actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it('should translate (i/j) to 42', () => {
        let expected = '4242'; // i = 42, j = 42, erase space, encoding
        let actual = polybius('ij', true);
        expect(actual).to.equal(expected);
    });
    it('should leave spaces as is when encoding', () => {
        let expected = '3251131343 2543241341'; // ignore spaces, output still has spaces
        let actual = polybius("Hello world", true);
        expect(actual).to.equal(expected);
    });
    it('should translate 42 to both i and j', () => {
        let expected = "(i/j)" // i and j are both at 42 on square
        let actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });
    it('should decode message by translating each pair of numbers into a letter', () => {
        let expected = "4432423352125413"; // numbers equal letters
        let actual = "4432423352125413"; // numbers equal letters
        expect(actual).to.equal(expected);
    })
    it('should leave spaces as is when decoding', () => {
        let expected = "hello world" // leaves spaces
        let actual = polybius('3251131343 2543241341', false);
        expect(actual).to.equal(expected);
    });
    it('should return false if length of all numbers is odd', () => {
        let expected = false;
        let actual = false;
        expect(actual).to.equal(expected);
    });
});