function selectionSort(arr) {
    for (var a = 0; a < arr.length; ++a) {
        var min = a;
        for (var b = a; b < arr.length; ++b) {
            if (arr[min] > arr[b]) {
                min = b;
            }
        }
        var sementara = arr[min];
        arr[min] = arr[a];
        arr[a] = sementara;
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
