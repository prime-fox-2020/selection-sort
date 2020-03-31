function selectionSort(arr) {

    for (var j = 0; j < arr.length; j++) {
        var start = arr[j]
        var minNum = arr[j] 
        var indexMin 
        var counter = 0
        debugger
        for (var i = j + 1; i < arr.length; i++) {
            if (arr[i] < minNum) {
                minNum = arr[i]
                indexMin = i
                counter++
            }
        }
        if( counter > 0 ){
            arr[j] = minNum
            arr[indexMin] = start
        }
        // debugger


    }
    return arr

}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
