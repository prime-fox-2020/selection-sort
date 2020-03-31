function selectionSort(arr) {
    var hasil = []
    while (arr.length != 0) {
        let nilaiTerkecil = arr[0]
        let indexNilaiTerkecil = 0
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < nilaiTerkecil) {
                nilaiTerkecil = arr[j]
                indexNilaiTerkecil = j
            }
        }
        console.table([arr]);
        console.log('nilaiTerkecil: ', nilaiTerkecil);
        hasil.push(nilaiTerkecil)
        arr.splice(indexNilaiTerkecil, 1)
    }
    return hasil
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
