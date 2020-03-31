function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        let j = i; 
        let min = arr[i];

        
        while (j < arr.length){
            if (arr[j] < min){
                min = arr[j];
                indexOfMin = j;
            }
            j++;
        }

        if (indexOfMin !== i){ 
            let tmp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = tmp;
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
