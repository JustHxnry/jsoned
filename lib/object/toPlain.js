/**
 * @name toPlain
 * @description Converts an object to a plain string
 *
 * @param {Object} object to be converted
 * @return {String} returns a string
 */
function toPlain(object) {
    var keys = Object.keys(object);

    let response = ``;

    keys.forEach((x, i) => {

        let model = `${x}: ${object[x]}\n`;

        if (i >= keys.length) model = `${x}: ${object[x]}`;

        response += model;
    });

    return response;
};

module.exports = toPlain;