/**
 * @param {Function} fn
 * @return {Function}
 */

const once = (fn) => {
    let called = false;
    return function(...args) {
        if(called) {
            return undefined;
        };
        called = true;
        return fn(...args);
    };
};

const fn1 = (a, b, c) => (a + b + c);
const onceFn = once(fn1);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

const fn2 = (a, b, c) => (a * b * c);
const onceFn1 = once(fn2);
console.log(onceFn1(5, 7, 4));
console.log(onceFn1(2, 3, 6));
console.log(onceFn1(4, 6, 8));