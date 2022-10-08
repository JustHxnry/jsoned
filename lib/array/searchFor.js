/**
 * @name searchFor
 * @description Filters and returns objects where data is exact to provided identifier
 *
 * @param {Array} array to be filtered
 * @param {(String|Number|Boolean)} value - used as tag for the filtering
 * @param {String} [identifier=null] - if searching through objects in array, use identifier to filter with the specific key
 * @return {Array} array of strings, numbers, booleans or objects
 */
function searchFor(array, value, identifier = null) {
    if (identifier != null && identifier != undefined) {
        try {
            let results = array.filter(x => x[identifier] == value);

            if (!results) results = [];

            return results;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        };
    } else {
        try {
            let results = array.filter(x => x == value);

            if (!results) results = [];

            return results;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        }
    };
};

module.exports = searchFor;