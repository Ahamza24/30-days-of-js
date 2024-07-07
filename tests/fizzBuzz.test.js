const fizzBuzz = require("../Challenges/03-fizz-buzz");

describe('fizzBuzz', () => {
    test('Example 1: n = 15', () => {
        const n = 15;
        const result = fizzBuzz(n);
        expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    });

    test('Example 2: n = 5', () => {
        const n = 5;
        const result = fizzBuzz(n);
        expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });
});
