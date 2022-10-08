/**
 * @name objectToArray
 * @description Converts an object to two arrays, one for values and the other for keys
 *
 * @param {Object} Object for the conversion
 * @return {Array} Array will be returned
 */
function objectToArray(object) {
    var keys = Object.keys(object);
    var values = Object.values(object);

    let model = {
        keys,
        values
    };

    return model;
};

module.exports = objectToArray;