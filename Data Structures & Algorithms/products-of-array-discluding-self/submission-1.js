class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const theNums = {};

        let zeroes = [];
        let all = null;

        for (const n of nums) {
            if (n === 0) {
                zeroes.push(true);
            } else if (all === null) {
                all = n;
            } else {
                all *= n;
            }
            // console.log({n, all, zeroes})
        }

        if (zeroes.length >= 2) {
            console.log('returning all 0s array')
            return Array.from({ length: nums.length }, (_, i) => 0);
        }

        let results = [];

        for (const n of nums) {
            if (n !== 0 && zeroes.length > 0) {
                results.push(0);
            } else if (n === 0) {
                results.push(all);
            } else {
                results.push(all/n)
            }
            // console.log({n, all, results, zeroes})
        }

        console.log({all, results})

        return results;
    }
}
