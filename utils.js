export class Utils{
    swapArraySpots = (arr, spot1, spot2) => {
        const temp = arr[spot1];
        arr[spot1] = arr[spot2];
        arr[spot2] = temp;
    }
}