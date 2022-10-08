/**
 * @name r
 * @description function for shorter "require" statements
 *
 * @param {String} dir - The directory in the "lib" folder ("a" for "array", "o" for "object")
 * @param {String} name - The name of the file
 * @return {Function} Returns an exported function or functions as a require statement
 */
function r (dir, name) {

    if (dir == "a") dir = "array";
    if (dir == "o") dir = "object";
    if (dir == "m") dir = "modules";

    return require('./'+dir+"/"+name);
};

const exportables = {
    version: r('m', 'version'),
    objectToArray: r('a', 'object-to-array'),
    arrayToObject: r('o', 'array-to-object'),
    reverseArrayOrder: r('a', 'reverseArray'),
    objectToPlain: r('o', 'toPlain'),
    reverseObjectKeys: r('o', 'reverseKeys'),
    exampleArray: r('a', 'exampleArray'),
    exampleObject: r('o', 'exampleObject'),
    findOne: r('a', 'findOne'),
    arraySearchFor: r('a', 'searchFor'),
    arrayStartsWith: r('a', 'searchThrough')
};

module.exports = exportables;