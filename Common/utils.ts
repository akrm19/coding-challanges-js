module.exports = {
    swapElements(arr: Number[], firstIndex: number, secondIndex: number) {
        if (arr.length < 1)
            return;
        let placeHolder = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = placeHolder;
    }
}