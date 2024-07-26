/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = (arr, fn) => {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        };
    };

    return filteredArr;
};

// Test case 1
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) {
    return n > 10;
};
console.log(filter(arr1, fn1));

// Test case 2
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) {
    return i === 0;
};
console.log(filter(arr2, fn2));

// Test case 3
const arr3 = [-2, -1, 0, 1, 2,];
const fn3 = function plusOne(n) {
    return n + 1;
};
console.log(filter(arr3, fn3));