const fs = require("fs");
const path = require("path");

const parseInput = (filename, delim, parseFn) => {
    const file = fs.readFileSync(
        path.resolve(__dirname + "/" + filename),
        "utf8"
    );
    const lines = file.toString().split(delim);
    return lines.map(parseFn);
};

const binaryStr2Decimal = (binary) => {
    return parseInt(binary, 2);
};

const isUpperCase = (string) => /^[A-Z]*$/.test(string)

module.exports.parseInput = parseInput;
module.exports.binaryStr2Decimal = binaryStr2Decimal;
module.exports.isUpperCase = isUpperCase;
