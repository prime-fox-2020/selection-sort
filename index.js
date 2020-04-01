function selectionSort(arr) {
    for (let x = 0; x < arr.length; x++) {
        let min = x;
        for (let y = x + 1; y <arr.length; y++) {
            if (arr[min] > arr[y]) {
                min = y;
            }
        }
        if (min !== x) {
            let tmp = arr[x];
            arr[x] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
