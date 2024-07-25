/**
 * @param {string} val
 * @return {Object}
 */

const expect = (val) => {
    function toBe(x) {
        if(x === val) {
            return true;
        } 
        throw new Error("Not Equal");

    };
    function notToBe(y) {
        if (y !== val) {
            return true;
        }
        throw new Error("Equal");

    };
    return {toBe, notToBe};

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */