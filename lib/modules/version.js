const fs = require('fs');
const path = require('path');

const package = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "package.json")));

module.exports = package.version;