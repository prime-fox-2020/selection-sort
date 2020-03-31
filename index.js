function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var minValue = arr[i];
        var indeks = i
        // console.log(minValue);
        for (var j = i + 1; j < arr.length; j++) {
            // swap min value
            if (arr[j] < minValue) {
                minValue = arr[j]
                indeks = [j]
            }
        }
        arr[indeks] = arr[i]
        arr[i] = minValue
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
