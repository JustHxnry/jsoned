/**
 * @name arrayToObject
 * @description Convert an array to an object with index numbers as key name
 *
 * @param {Array} Array for the conversion
 * @return {Object} Object will be returned
 */
function arrayToObject(array) {
    let model = {};

    array.forEach((x, i) => {
        model[i] = x;
    });

    return model;
};

module.exports = arrayToObject;