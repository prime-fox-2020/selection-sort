function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let q, min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) {
      q = arr[i];
      arr[i] = arr[min];
      arr[min] = q;
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
