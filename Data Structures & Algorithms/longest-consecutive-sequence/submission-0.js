class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let lastB;;
        let lastNum;
        let largest = 0;

        let beginnings = new Map();

        const sorted = nums.sort((a, b) => a - b);

        nums.forEach((num, i) => {
            let number = Number(num);

            if (lastNum === number || lastNum === number - 1) {
                lastNum = number;
                beginnings.get(lastB).add(number);
            } else {
                lastNum = number;
                lastB = number;
                beginnings.set(lastB, new Set([number]));
            }

            if (beginnings.get(lastB).size > largest) {
                largest = beginnings.get(lastB).size;
            }
        });

        console.log({nums, sorted, lastB, lastNum, beginnings});

        return largest;
    }
}
