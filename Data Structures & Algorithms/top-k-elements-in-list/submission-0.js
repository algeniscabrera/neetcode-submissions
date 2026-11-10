class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numbers = {};

        for (const number of nums) {
            let parsedNumber = Number(number);

            numbers[parsedNumber] = (numbers[parsedNumber] || 0) + 1;
        }

        const array = Object.entries(numbers).map(([number, frequency]) => [frequency, number]).sort((a, b) => b[0]-a[0]);
        
        return array.slice(0, k).map(pair => pair[1]);
    }
}
