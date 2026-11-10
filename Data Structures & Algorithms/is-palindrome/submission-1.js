class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const validRegex = /^[A-Za-z0-9]$/;
        const cleanedArr = Array.from(s, (ch) => {
            const match = ch.match(validRegex);
            console.log( {ch, match})
            return match ? ch.toLowerCase() : ''; 
        }).filter((ch) => ch !== '');

        console.log({cleanedArr})

        return cleanedArr.join() === cleanedArr.reverse().join();
    }
}
