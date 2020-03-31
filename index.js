
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var temp = arr[i]
        var cek = false
        for (let j  = i+1; j < arr.length; j++) {
            if(temp>arr[j]){
                temp=arr[j]
                var index = j
                cek = true
            }
        }
        if(cek){
            var tampung = arr[i]
            arr[i]=temp
            arr[index]=tampung
        }
    }

    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// // [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
