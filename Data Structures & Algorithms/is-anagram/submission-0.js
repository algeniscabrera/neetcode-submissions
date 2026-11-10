// import _ from 'lodash';

class Solution {
    increaseCounter(map, char) {
        const currentCount = map.get(char) || 0;
        map.set(char, currentCount + 1);
    }

/**
 * @param {map} map1
 * @param {map} map2
 */
    isSame(map1, map2) {
        const sameSize = map1.size === map2.size;
        if (!sameSize) {
            return false;
        }

        const map1EntriesIterator = map1.entries();
        for (const [key, value] of map1EntriesIterator) {
            if (map2.get(key) !== value) {
                return false;
            }
        }

        return true
    
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sFrequencyMap = new Map();
        const tFrequencyMap = new Map();

        Array.from(s).forEach(character => this.increaseCounter(sFrequencyMap, character));
        Array.from(t).forEach(character => this.increaseCounter(tFrequencyMap, character));

        return this.isSame(sFrequencyMap, tFrequencyMap);
    }
}
