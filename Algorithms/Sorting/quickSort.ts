const Utils = require('../../Common/utils');

class QuickSort {
    static sort(arr: number[], leftIndx: number,  rightIdx: number): number[] {
        console.log(`\n\nQUICK SORTING: ${arr.length} length, L ${leftIndx}, R ${rightIdx}, array: ${arr}`);
        if(arr.length < 2) return arr;

        //decrease rightIdx after assigning it to the pivot
        let pivot = QuickSort.partition(arr, leftIndx, rightIdx);
        
        if(leftIndx < pivot -1) {
            QuickSort.sort(arr, leftIndx, pivot - 1);
        }
        
        if(pivot + 1 < rightIdx) {
            QuickSort.sort(arr, pivot + 1, rightIdx);
        }

        return arr;
    }

    static partition(arr:number[], leftIndx: number, rightIdx: number): number {
        let pivot = rightIdx--;
        console.log(`****Pivot index:${pivot}, value: ${arr[pivot]}*****`);
        console.log(`Starting left index: ${leftIndx}, value: ${arr[leftIndx]}`);
        console.log(`Starting right index: ${rightIdx}, value: ${arr[rightIdx]}`);

        while(leftIndx <= rightIdx) {

            while(arr[leftIndx] <= arr[pivot] && leftIndx < pivot) {
                leftIndx++;
                console.log(`..Left is less than or equal pivot. Incrementing l index to ${leftIndx} (val is ${arr[leftIndx]})`);
            }

            while(arr[rightIdx] > arr[pivot] && rightIdx >= 0) {
                rightIdx--;
                console.log(`..Right is larger than pivot. Decreasing r index to ${rightIdx} (val is ${arr[rightIdx]})`);
            }

            if((leftIndx <= rightIdx)) {
                console.log(`Swapping L (${arr[leftIndx]}) and R (${arr[rightIdx]}) vals...`)
                Utils.swapElements(arr, leftIndx, rightIdx);
                console.log(`New L index ${leftIndx} has new val ${arr[leftIndx]}. R index: ${rightIdx} and new val ${arr[rightIdx]}`);
                console.log(`....now updating indexes`);
                rightIdx--;
                leftIndx++;
                console.log(`New L index: ${leftIndx} (val ${arr[leftIndx]}), R index: ${rightIdx} (val ${arr[rightIdx]})`);
            }
        }

        Utils.swapElements(arr, leftIndx, pivot);
        console.log(`***Returning NEW pivot at index ${leftIndx} with val ${arr[leftIndx]}**`);
        console.log(`current array sorting ${arr}`);
        return leftIndx;
    }

    static testSort(): void {
        let testInput = [3,5,1,0,40,2,2305,0,1,9,3,8];
        console.log(`Pre-sort: ${testInput}`);

        let sorted = this.sort(testInput, 0, testInput.length - 1);
        console.log(`Sorted: ${sorted}`);
    }
}

module.exports = QuickSort;