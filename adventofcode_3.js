const { parseInput, binaryStr2Decimal } = require("./utils");

const data = parseInput("./data/day_3.txt", (el) => el.split(""));

const getGammaRate = (data) => {
    var result = "";
    const cols = data[0].length; //assuming each row has the same length ...
    for (var i = 0; i < cols; i++) {
        var zeros = 0;
        var ones = 0;
        for (var j = 0; j < data.length; j++) {
            if (data[j][i] == 0) zeros++;
            else ones++;
        }
        if (zeros > ones) result += "0";
        else result += "1";
    }
    return result;
};

const getEpsilonRate = (data) => {
    var result = "";
    const cols = data[0].length; //assuming each row has the same length ...
    for (var i = 0; i < cols; i++) {
        var zeros = 0;
        var ones = 0;
        for (var j = 0; j < data.length; j++) {
            if (data[j][i] == 0) zeros++;
            else ones++;
        }
        if (zeros < ones) result += "0";
        else result += "1";
    }
    return result;
};

var gamma = binaryStr2Decimal(getGammaRate(data));
var epsilon = binaryStr2Decimal(getEpsilonRate(data));

console.log(gamma * epsilon);

module.exports.getGammaRate = getGammaRate;
module.exports.getEpsilonRate = getEpsilonRate;
