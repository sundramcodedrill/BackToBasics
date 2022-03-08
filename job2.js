let fruitsDb = ["apple", "banana", "orange", "pineapple", "grapes", "avacado", "strawberry"];

let mixFruitArr = ["grapes", "cabage", "tomato", "banana"];

const filterFruits = (arr) => {
    let matchd = []
    for (item in mixFruitArr) {
        // console.log(mixFruitArr[item])
        for (item2 in fruitsDb) {
            if (mixFruitArr[item] === fruitsDb[item2]) {
                matchd.push(mixFruitArr[item])
            }
        }
    }
    console.log(matchd)
}

filterFruits(mixFruitArr);