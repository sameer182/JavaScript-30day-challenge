/**
 * @param {number} millis
 * @return {Promise}
 */

const sleep = async (millis) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
};

// Test case 1
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t);
});

// Test case 2
let t1 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() -t1);
});