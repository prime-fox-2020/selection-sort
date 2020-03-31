function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var idx = i;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
