function selectionSort(arr) {
let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minimum = i;
    for (let j = 0; j < n; j++) {
      if (arr[j]> arr[minimum]) {
        minimum = j;
      }
      let temp = arr[minimum];
      arr[minimum] = arr[i];
      arr[i] = temp;
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
