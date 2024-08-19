/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    if (this.length) {
        return this [this.length - 1];
    }

    return -1;
    
};

// Test case 1
const arr = [1, 2, 3];
console.log(arr.last());

// Test case 2
const nums = [];
console.log(nums.last());   