const maxOfThree = require("../Challenges/06-maximum-of-3");

describe('maxOfThree', () => {
    test('Example 1: a = 1, b = 2, c = 3', () => {
        expect(maxOfThree(1, 2, 3)).toBe(3);
    });

    test('Example 2: a = 10, b = 5, c = 7', () => {
        expect(maxOfThree(10, 5, 7)).toBe(10);
    });

    test('All equal: a = 5, b = 5, c = 5', () => {
        expect(maxOfThree(5, 5, 5)).toBe(5);
    });
});
