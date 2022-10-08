/**
 * @name findOne
 * @description Finds the specified element in array
 *
 * @param {Array} array to be searched
 * @param {(String|Number|Boolean)} value - used as tag for the search
 * @param {String} [identifier=null] - if searching through objects in array, use identifier to search with the specific key
 * @return {Object} returns search values
 */
function findOne(array, value, identifier = null) {
    if (identifier != null && identifier != undefined) {
        try {
            let result = array.find(x => x[identifier] == value);

            if (!result) result = {};

            return result;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        };
    } else {
        try {
            let result = array.find(x => x == value);

            if (!result) result = {};

            return result;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        };
    };
};

module.exports = findOne;