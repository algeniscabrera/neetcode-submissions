class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = [...nums].sort();
        let prev;

        for (const [index, num] of sortedNums.entries()) {
            let hasDupe = num == prev;

            if (hasDupe) {
                return true;
            } else {
                prev = num;
            }
        }

        return false;
    }
}
