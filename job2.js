let fruitsDb = ["apple", "banana", "orange", "pineapple", "grapes", "avacado", "strawberry"];


const filterFruits = (arr) => {
    let matchd = []
    for (item in arr) {
        // console.log(mixFruitArr[item])
        for (item2 in fruitsDb) {
            if (arr[item] === fruitsDb[item2]) {
                matchd.push(arr[item])
            }
        }
    }
    console.log(matchd)
}

filterFruits(["grapes", "cabage", "tomato", "banana"]);