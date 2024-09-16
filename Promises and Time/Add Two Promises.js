/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

const addTwoPromises = async (promise1, promise2) => {
    return Promise.all([promise1, promise2]).then((nums) => {
        return nums[0] + nums [1];
    });
};

// Test case 1
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((result) => {
    console.log(result);
});

// Test case 2
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise3, promise4).then((result) => {
    console.log(result);
});