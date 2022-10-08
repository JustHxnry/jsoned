/**
 * @name reverseKeys
 * @description Returns object, where keys are values and values are keys
 *
 * @param {Object} object to be reversed
 * @return {Object} object with keys and values reversed
 */
function reverseKeys(object) {
    var keys = Object.keys(object);
    var values = Object.values(object);

    let response = {};

    values.forEach((x, i) => {
        response[x] = keys[i];
    });

    return response;
};

module.exports = reverseKeys;