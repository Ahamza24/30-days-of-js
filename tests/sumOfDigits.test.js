const sumOfDigits = require("../Challenges/12-sum-of-digits");

describe('sumOfDigits', () => {
    test('Example 1: n = 123', () => {
        expect(sumOfDigits(123)).toBe(6);
    });

    test('Example 2: n = 456', () => {
        expect(sumOfDigits(456)).toBe(15);
    });

    test('Single digit: n = 7', () => {
        expect(sumOfDigits(7)).toBe(7);
    });
});
