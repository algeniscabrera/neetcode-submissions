class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const differences = new Map();
        let indexes = null;

        numbers.forEach((val, i) => {
            if (indexes === null) {
                if (differences.has(val)) {
                    indexes = [differences.get(val)+1, i+1]
                } else {
                    differences.set(target - val, i)
                }
            }
        });

        return indexes;

    }
}
