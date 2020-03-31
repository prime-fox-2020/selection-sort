function selectionSort(arr) {
    let penanda = 0
    for(let b = 0; b < arr.length; b++){
        for(let a = 0; a <= arr.length; a++){
            if(arr[a] < arr[penanda]){
                let temp = arr[a]
                arr[a] = arr[penanda]
                arr[penanda] = temp
                penanda++

            }
        
        }
        penanda++
    }
    return arr
}

 console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
