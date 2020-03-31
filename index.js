// [33, 2, 52, 106, 73]
function selectionSort(arr) {
for(var i = 0; i < arr.length; i++){
  var poros = arr[i]
  var temp = arr[i]
  var index;
  var counter = 0;
  for(var j = i+1; j < arr.length; j++){
    if(temp > arr[j]){
      temp = arr[j]
      index = j
      counter++
    }
    
  }
  if(counter > 0){
    arr[i] = temp;
    arr[index] = poros
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
