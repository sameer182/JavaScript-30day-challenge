/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = (nums, fn, init) => {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    };
    return init;
};

// Test case 1
const nums1 = [1, 2, 3, 4];
const fn1 = (accum, curr) => {
    return accum + curr;
};
const init1 = 0;
console.log(reduce(nums1, fn1, init1));

// Test case 2
const nums2 = [1, 2, 3, 4];
const fn2 = (accum, curr) => {
    return accum + curr * curr;
};
const init2 = 100;
console.log(reduce(nums2, fn2, init2));

// Test case 3
const nums3 = [];
const fn3 = (accum, curr) => {
    return 0;
};
const init3 = 25;
console.log(reduce(nums3, fn3, init3));
