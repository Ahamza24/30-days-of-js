# Palindrome Number Instructions

Given an integer `x`, your task is to determine if `x` is a palindrome. A number is a palindrome if it reads the same backward as forward.

## Rules

1. Return `true` if `x` is a palindrome.
2. Return `false` otherwise.

## Examples

### Example 1
- **Input:** `x = 121`
- **Output:** `true`
- **Explanation:** 121 reads as 121 from left to right and from right to left, so it is a palindrome.

### Example 2
- **Input:** `x = -121`
- **Output:** `false`
- **Explanation:** From left to right, it reads -121. From right to left, it becomes 121-, so it is not a palindrome.

### Example 3
- **Input:** `x = 10`
- **Output:** `false`
- **Explanation:** Reads 01 from right to left, so it is not a palindrome.

## Constraints

- The integer `x` can be any value between `-2^31` and `2^31 - 1`.

## Solution

You can check if a number is a palindrome by converting it to a string and comparing it to its reverse.