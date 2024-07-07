const { sumOfArray } = require("../Challenges/07-sum-of-arrays");

describe('sumOfArray', () => {
    test('Example 1: arr = [1, 2, 3, 4]', () => {
        expect(sumOfArray([1, 2, 3, 4])).toBe(10);
    });

    test('Example 2: arr = [10, -5, 7, 3]', () => {
        expect(sumOfArray([10, -5, 7, 3])).toBe(15);
    });

    test('Empty array', () => {
        expect(sumOfArray([])).toBe(0);
    });
});
