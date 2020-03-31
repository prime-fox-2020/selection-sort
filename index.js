function selectionSort(arr) {
  let result = []
  while (arr.length != 0){
    let min = arr[0]
    let index = 0
    for (let i = 1; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i]
        index = i
      }
    }
    result.push(min)
    arr.splice(index, 1)
  }
  return result
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
