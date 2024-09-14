/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
 
const isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else {
        let arr = Object.keys(obj);
        return arr.length === 0;
    }
};

// Test case 1
const obj1 = {
    "x": 5,
    "y": 42
}
console.log(isEmpty(obj1));

// Test case 2
const obj2 = {}
console.log(isEmpty(obj2));

// Test case 3
const obj3 = [null, false, 0];
console.log(isEmpty(obj3));

