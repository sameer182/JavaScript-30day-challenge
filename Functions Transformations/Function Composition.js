/**
 * @param {Function[]} functions
 * @return {Function}
 */

const compose = (functions) => {
    return (x) => {
        for (let fn of functions.reverse()) {
            x = fn(x);
        };

        return x;
    };
};

// Test case 1
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn1(4));

//Test case 2
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1));

//Test case 3
const fn3 = compose([]);
console.log(fn3(42));