const countVowels = require("../Challenges/05-count-vowels");

describe('countVowels', () => {
    test('Example 1: s = "hello"', () => {
        const s = "hello";
        const result = countVowels(s);
        expect(result).toBe(2);
    });

    test('Example 2: s = "world"', () => {
        const s = "world";
        const result = countVowels(s);
        expect(result).toBe(1);
    });

    test('Example 3: s = "javascript"', () => {
        const s = "javascript";
        const result = countVowels(s);
        expect(result).toBe(3);
    });
});
