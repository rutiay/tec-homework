const ar1 = [];
for (let index = 1; index <= 100; index++) {
    ar1.push(index);
}

const ar2 = ar1.map(number => number ** 0.5);
console.log(ar2);

const evenArray = (arr) => {
    return arr.filter(number => !(number % 2));
} 

console.log(evenArray([1,2,3]));