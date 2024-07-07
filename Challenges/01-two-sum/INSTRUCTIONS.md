# Two Sum Problem Instructions

Given an array of integers `nums` and an integer `target`, your task is to return the indices of the two numbers in the array that add up to the target value.

## Rules

1. Each input will have exactly one solution.
2. You cannot use the same element twice.
3. You can return the indices in any order.

## Examples

### Example 1
- **Input:** `nums = [2, 7, 11, 15]`, `target = 9`
- **Output:** `[0, 1]`
- **Explanation:** `nums[0] + nums[1] == 9`, so we return `[0, 1]`.

### Example 2
- **Input:** `nums = [3, 2, 4]`, `target = 6`
- **Output:** `[1, 2]`
- **Explanation:** `nums[1] + nums[2] == 6`, so we return `[1, 2]`.

### Example 3
- **Input:** `nums = [3, 3]`, `target = 6`
- **Output:** `[0, 1]`
- **Explanation:** `nums[0] + nums[1] == 6`, so we return `[0, 1]`.

## Constraints

- The length of `nums` will be between `2` and `10,000`.
- Each element in `nums` will be between `-1,000,000,000` and `1,000,000,000`.
- The `target` value will be between `-1,000,000,000` and `1,000,000,000`.
- Only one valid solution exists for each input.

Good luck and happy coding!