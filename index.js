function selectionSort(arr) {
    var length = arr.length
    for (let i=1; i<length; i++) {
         key = arr[i]
         j = i-1
        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j+1] = key
    }
    return arr
}


console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
