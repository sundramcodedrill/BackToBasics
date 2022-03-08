let arr1 = [1, 3, 6, 2, 4];
let arr2 = [2, 0, 4, 1, 2];
let arr3 = [3, 3, 10, 3, 6];

const sumArray = (arr1, arr2) => {
    for (let x = 0; x < arr1.length; x++) {
        arr3[x] = arr1[x] + arr2[x];
    }
}

const removeDuplicates = (arr) => {
    let temparr = []
    for (let x = 0; x < arr.length; x++) {
        if (temparr.indexOf(arr[x]) == (-1)) {
            temparr.push(arr[x]);
        }
    }

    arr3 = temparr;

}


sumArray(arr1, arr2);
removeDuplicates(arr3);

console.log(arr3);

