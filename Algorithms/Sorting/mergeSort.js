"use strict";
class MergeSort {
    constructor() {
        console.log('creating new instance of merge sort');
    }
    static testMergeSort() {
        let testInput = [3, 5, 1, 0, 40, 2, 2305, 0, 1, 9, 3, 8];
        console.log(`Pre-sort: ${testInput}`);
        let sorted = this.sort(testInput);
        console.log(`Sorted: ${sorted}`);
    }
    static sort(input) {
      let a = [];
      a.length
        if (input.length <= 1)
            return input;
        const midPoint = Math.floor(input.length / 2);
        let left = input.slice(0, midPoint);
        let right = input.slice(midPoint, input.length);
        return this.merge(this.sort(left), this.sort(right));
    }
    static merge(left, right) {
        let result = [];
        while (right.length || left.length) {
            if (right.length && left.length) {
                result.push(left[0] < right[0]
                    ? left.shift()
                    : right.shift());
            }
            else if (left.length) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        return result;
    }
}
module.exports = MergeSort;
