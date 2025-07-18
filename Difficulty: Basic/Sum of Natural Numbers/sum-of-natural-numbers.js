class Solution {
    /**
     * @param {number} n
     * @returns {number}
     */
    findSum(n) {
        if (n === 0) return 0;
        return n + this.findSum(n - 1);
    }
}
