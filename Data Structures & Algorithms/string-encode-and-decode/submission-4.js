class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const s of strs) {
            res += `${s.length}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            const hashIdx = str.indexOf('#', i);
            const len = parseInt(str.substring(i, hashIdx), 10);
            const start = hashIdx + 1;
            res.push(str.substring(start, start + len));
            i = start + len;
        }
        return res;
    }
}
