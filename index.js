function selectionSort(arr) {
    let tukar, number, index
    for (var i = 0; i < arr.length; i++) {
        number = arr[i]
        for (var j = i; j < arr.length; j++) {
            if (number >= arr[j]) {
                number = arr[j]
                index = j
            }
        }
        tukar = arr[i]
        arr[i] = arr[index]
        arr[index] = tukar
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
