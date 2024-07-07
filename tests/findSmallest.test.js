const findSmallest = require("../Challenges/08-find-smallest-number");

describe('findSmallest', () => {
    test('Example 1: arr = [5, 3, 9, 1]', () => {
        expect(findSmallest([5, 3, 9, 1])).toBe(1);
    });

    test('Example 2: arr = [12, 4, 7, 19]', () => {
        expect(findSmallest([12, 4, 7, 19])).toBe(4);
    });

    test('Single element: arr = [10]', () => {
        expect(findSmallest([10])).toBe(10);
    });
});
