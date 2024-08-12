/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

const chunk = function(arr, size) {
    const result = [];
    let subArray = [];

    for (let i=0; i<arr.length; i++) {
        subArray.push(arr[i]);
        if (subArray.length === size) {
            result.push(subArray);
            subArray = [];
        }
    }

    if (subArray.length) {
        result.push(subArray);
    }
    return result;
};
    
// Test case 1
const arr1 = [1, 2, 3, 4, 5];
const size1 = 1;
const result1 = chunk(arr1, size1);
console.log(result1);

// Test case 2
const arr2 = [1, 9, 6, 3, 2];
const size2 = 3;
const result2 = chunk(arr2, size2);
console.log(result2);

// Test case 3
const arr3 = [8, 5, 3, 2, 6];
const size3 = 6;
const result3 = chunk(arr3, size3);
console.log(result3);

// Test case 4 
const arr4 = [];
const size4 = 1;
const result4 = chunk(arr4, size4);
console.log(result4);