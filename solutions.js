const { parseInput, binaryStr2Decimal } = require("./utils");

const { addIfIncreased, threeMeasurements } = require("./adventofcode_1");
const { computePosition, computePositionWithAim } = require("./adventofcode_2");
const {
    getGammaRate,
    getEpsilonRate,
    getOxygenRate,
    getCO2Rate,
} = require("./adventofcode_3");

console.log(`
##############################################################
               
                    #ADVENTOFCODE202

##############################################################                                                                                                 
`);

console.log("************** DAY 1: Sonar Sweep **************\n");
const data_day1 = parseInput("data/day_1.txt", (el) => Number(el));

console.log("Measurements 1: ", data_day1.reduce(addIfIncreased, 0));
console.log("Measurements 2: ", data_day1.reduce(threeMeasurements, 0));

console.log("\n************* DAY 2: Dive! **************\n");
const data_day2 = parseInput("data/day_2.txt", (i) => {
    var command = i.split(" ");
    return { command: command[0], distance: Number(command[1]) };
});

var p1 = data_day2.reduce(computePosition, {
    position: 0,
    depth: 0,
    aim: 0,
});

var p2 = data_day2.reduce(computePositionWithAim, {
    position: 0,
    depth: 0,
    aim: 0,
});

console.log("Position 1: ", p1.depth * p1.position);
console.log("Position 2: ", p2.depth * p2.position);

console.log("\n************* DAY 3: Binary Diagnostic **************\n");

const data = parseInput("./data/day_3.txt", (el) => el.split(""));

var gamma = binaryStr2Decimal(getGammaRate(data));
var epsilon = binaryStr2Decimal(getEpsilonRate(data));

var oxy = binaryStr2Decimal(getOxygenRate(data, 0));
var co2 = binaryStr2Decimal(getCO2Rate(data, 0));

console.log("Power consumption", gamma * epsilon);
console.log("Life support", oxy * co2);
