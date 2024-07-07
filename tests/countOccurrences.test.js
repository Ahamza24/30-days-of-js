const countOccurrences = require("../Challenges/09-count-occurrences");

describe('countOccurrences', () => {
    test('Example 1: arr = [1, 2, 2, 3, 4], x = 2', () => {
        expect(countOccurrences([1, 2, 2, 3, 4], 2)).toBe(2);
    });

    test('Example 2: arr = [5, 5, 5, 5], x = 5', () => {
        expect(countOccurrences([5, 5, 5, 5], 5)).toBe(4);
    });

    test('No occurrences: arr = [1, 2, 3, 4], x = 5', () => {
        expect(countOccurrences([1, 2, 3, 4], 5)).toBe(0);
    });
});
