const powerConsumption = (data, comp) => {
    var result = "";
    const cols = data[0].length; //assuming each row has the same length ...
    for (var i = 0; i < cols; i++) {
        var zeros = 0;
        var ones = 0;
        for (var j = 0; j < data.length; j++) {
            if (data[j][i] == 0) zeros++;
            else ones++;
        }
        if (comp(zeros, ones)) result += "0";
        else result += "1";
    }
    return result;
};

const getEpsilonRate = (data) => {
    return powerConsumption(data, (a, b) => a < b);
};

const getGammaRate = (data) => {
    return powerConsumption(data, (a, b) => a > b);
};

const lifeSupportRating = (data, index, comp) => {
    if (data.length == 1) return data[0].join("");
    var zero = [];
    var one = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i][index] == "0") {
            zero.push(data[i]);
        } else {
            one.push(data[i]);
        }
    }
    return lifeSupportRating(comp(zero, one), ++index, comp);
};

const getOxygenRate = (data) => {
    return lifeSupportRating(data, 0, (zero, one) => mostCommon(zero, one));
};

const getCO2Rate = (data) => {
    return lifeSupportRating(data, 0, (zero, one) => leastCommon(zero, one));
};

const mostCommon = (zero, one) => {
    if (zero.length > one.length) return zero;
    else return one;
};

const leastCommon = (zero, one) => {
    if (one.length < zero.length) return one;
    else return zero;
};

module.exports.getGammaRate = getGammaRate;
module.exports.getEpsilonRate = getEpsilonRate;
module.exports.getOxygenRate = getOxygenRate;
module.exports.getCO2Rate = getCO2Rate;
