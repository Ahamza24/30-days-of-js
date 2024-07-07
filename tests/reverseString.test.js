const { reverseString } = require("../Challenges/04-reverse-string");

describe('reverseString', () => {
    test('Example 1: s = "hello"', () => {
        const s = "hello";
        const result = reverseString(s);
        expect(result).toBe("olleh");
    });

    test('Example 2: s = "world"', () => {
        const s = "world";
        const result = reverseString(s);
        expect(result).toBe("dlrow");
    });
});
