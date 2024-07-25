/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = (init) => {
    let tempValue = init;

    return {
        increment: () => ++tempValue,
        decrement: () => --tempValue, 
        reset: () => tempValue = init
        };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */