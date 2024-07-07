const factorial = require("../Challenges/11-factorial");

describe('factorial', () => {
    test('Example 1: n = 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('Example 2: n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Small number: n = 3', () => {
        expect(factorial(3)).toBe(6);
    });
});
