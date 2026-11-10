class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const differences = new Map();

        for (const [i, val] of numbers.entries()) {
            if (differences.has(val)) {
                return [differences.get(val)+1, i+1]
            } else {
                differences.set(target - val, i)
            }
        }

        return [];
    }
}
