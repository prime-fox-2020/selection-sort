function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let kecil=i
        for (let j = i+1 ; j < arr.length; j++) {
            if(arr[kecil]>arr[j]){
                kecil=j
            }
        }
        if(kecil!==i){
            var temp=arr[i]
            arr[i]=arr[kecil]
            arr[kecil]=temp
        }   
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;

