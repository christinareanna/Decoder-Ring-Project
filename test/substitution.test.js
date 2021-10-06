const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution", () => {
    it('should return false if missing substitution alphabet', () => {
        let expected = false; // doesn't use substitution alphabet
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    })
    it('should return false if alphabet is not 26 characters', () => {
        let expected = false;
        let actual = substitution("thinkful", "short"); // short isn't 26 characters
        expect(actual).to.equal(expected);
    })
    it('should return false if substitution alphabet does not have special characters', () => {
        let expected = false;
        let actual = substitution("xoyqmcgrukswaflnthdjpzibev") // no special characters
        expect(actual).to.equal(expected);
    })
    it('should encode msg using substitution alphabet', () => {
        let expected = "y&ii$r&" // encodes msg with sub alphabet!
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        expect(actual).to.equal(expected)
    });
    it('should encode a msg with any kind of key with special characters', () => {
        let expected = "y&ii$r&" // has special characters in encoded msg
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    })
    it('should preserve spaces and ignores capital letters', () => {
        let expected = 'elp xhm xf mbymwwmfj dne' // spaces remain, cap letters ignored
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    })
    it('should return false if any characters repeat', () => {
        let expected = false; // abc repeats, false
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    })
    it('should translate given phrase based off of the alphabet given to function', () => {
        let expected = 'thinkful'; // decodes to thinkful, with alphabet w/ no special characters
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
})