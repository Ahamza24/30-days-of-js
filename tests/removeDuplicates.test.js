const removeDuplicates = require("../Challenges/10-remove-duplicates");

describe('removeDuplicates', () => {
    test('Example 1: arr = [1, 2, 2, 3, 4, 4, 5]', () => {
        expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Example 2: arr = [5, 5, 5, 5]', () => {
        expect(removeDuplicates([5, 5, 5, 5])).toEqual([5]);
    });

    test('No duplicates: arr = [1, 2, 3]', () => {
        expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
