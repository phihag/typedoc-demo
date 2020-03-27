const assert = require('assert');

/**
 * External function, should be documented.
 * @param {Number} i A non-negative number
 * @returns {Number} the result.
 */
function foo(i) {
    assert(i >= 0);
    return bar(i);
}

/**
 * Internal function, should not be documented.
 * @param {Number} i A number
 * @returns {Number} The internal result
 */
function bar(i) {
    return i * i;
}

function baz() {
    // Undocumented
}

module.exports = {
    foo,
};
