/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Test case 1
console.log(sortBy([5, 4, 1, 2, 3], (x) => x));

// Test case 2
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x));

// Test case 3
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]));
