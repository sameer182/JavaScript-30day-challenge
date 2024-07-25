/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = (arr, fn) => {
    let array = [];
      for(let i = 0; i < arr.length; i++) {
        array[i] = fn(arr[i], i);
      };
      return array;
};

// Test case 1
const arr1 = [1, 2, 3];
function plusOne(n) {
    return n + 1;
};
console.log(map(arr1, plusOne));

// Test case 2
const arr2 = [1, 2, 3];
const addIndex = (n, i) => {
    return n + i;
}
console.log(map(arr2, addIndex));

// Test case 3
const arr3 = [10, 20, 30];
const constant = () => 42;

console.log(map(arr3, constant));