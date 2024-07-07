const isPalindrome = require("../Challenges/02-palindrome-numbers");

describe('isPalindrome', () => {
    test('Example 1: x = 121', () => {
        const x = 121;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Example 2: x = -121', () => {
        const x = -121;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });

    test('Example 3: x = 10', () => {
        const x = 10;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });

    test('Edge Case: x = 0', () => {
        const x = 0;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Large Number Palindrome: x = 123454321', () => {
        const x = 123454321;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Large Number Non-Palindrome: x = 123456789', () => {
        const x = 123456789;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });
});
