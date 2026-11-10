class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const anagrams = new Map();

        // for (const str of strs) {
        //     const sorted = Array.from(str).sort().join('');
        //     const anagram = anagrams.get(sorted) || [];
        //     anagram.push(str);
        //     anagrams.set(sorted, anagram);
        //     console.log({str, sorted, anagrams})
        // }

        // let results = []
        // for (const [key, val] of anagrams) {
        //     console.log(val)
        //     results.push(val);
        // }

        // return results;


        const anagrams = new Map();
        for (const str of strs) {
            const anagramKey = new Array(26).fill(0);
            
            Array.from(str).map(char => char.charCodeAt(0) - 'a'.charCodeAt(0)).forEach(code => {
                // console.log(code);
                anagramKey[code]++;
            });

            const possibleAnagram = anagrams.get(anagramKey.join('-')) || [];
            possibleAnagram.push(str);
            anagrams.set(anagramKey.join('-'), possibleAnagram);

            // console.log({anagramKey})
        }

        // console.log({anagrams})
        let results = []
        for (const val of anagrams.values()) {
            // console.log(val)
            results.push(val);
        }

        return results;

    }
}
