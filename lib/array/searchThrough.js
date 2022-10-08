/**
 * @name searchThrough
 * @description Returns an array of objects that stars with the given key
 *
 * @param {Array} array to be search through
 * @param {(String|Number)} value - used as search key
 * @param {String} [identifier=null] - if searching through objects in array, use identifier to filter with the specific key
 * @return {Array}  array of values or objects
 */
function searchThrough(array, value, identifier = null) {
    if (identifier != null && identifier != undefined) {
        try {
            let results = [];

            array.forEach(x => {
                Object.keys(x).forEach(y => {

                    if (x[y].toString().startsWith(value)) return results.push(x);
                });
            });

            return results;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        };
    } else {
        try {
            let results = [];

            array.forEach(x => {
                if (x.toString().startsWith(value)) return results.push(x);
            });

            return results;
        } catch (error) {
            new Error(error);
            console.error(error);
            return;
        }
    };
};

module.exports = searchThrough;