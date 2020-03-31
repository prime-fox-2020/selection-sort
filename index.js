function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var temp = i;
        for(var j = i+1; j < arr.length; j++) {
            if(arr[temp] > arr[j]) {
                temp = j;
            }
        }
            [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
    return arr;
}


console.log(selectionSort([33, 52, 2, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
