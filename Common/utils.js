"use strict";
module.exports = {
    swapElements(arr, firstIndex, secondIndex) {
        if (arr.length < 1)
            return;
        let placeHolder = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = placeHolder;
    }
};
