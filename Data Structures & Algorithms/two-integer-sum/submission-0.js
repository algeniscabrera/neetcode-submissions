class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]} index in nums whose values add up to target
     */
    twoSum(nums, target) {
        // for (const [index, number] of nums.entries()) {
        //     console.log({
        //         index, 
        //         number
        //     });

        //     for (const [index2, number2] of nums.entries()) {
        //         console.log({
        //             index2, 
        //             number2
        //         });

        //         if (index === index2) {
        //             continue;
        //         } else if (number + number2 === target) {
        //             return [index, index2];
        //         }
        //     }
        // }

        const differences = new Map();
        for (const [index, number] of nums.entries()) {
            const existingDifferenceIndex = differences.get(number);
            if (existingDifferenceIndex >= 0) {
                return [existingDifferenceIndex, index];
            }

            const difference = target - number;
            differences.set(difference, index);
        }

        return [0, 0]
    }
}
