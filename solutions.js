const { parseInput, binaryStr2Decimal } = require("./utils");

const { addIfIncreased, threeMeasurements } = require("./adventofcode_1");
const { computePosition, computePositionWithAim } = require("./adventofcode_2");
const {
    getGammaRate,
    getEpsilonRate,
    getOxygenRate,
    getCO2Rate,
} = require("./adventofcode_3");
const {
    playBingo,
    getLastWinningScore,
    getFirstWinningScore,
} = require("./adventofcode_4");
const {
    initMap,
    insertLineSegment,
    getDangerZones,
    insertAllLineSegments,
} = require("./adventofcode_5");
const { lanternfish, lanternfish2 } = require("./adventofcode_6");
const {
    getMinimumFuelHorizontalPosition,
    getMinimumFuelHorizontalPosition2,
} = require("./adventofcode_7");
const { getScore, getScoreForClosingChars } = require("./adventofcode_10");
const { getLowPoints, sumOfRisksOfLowPoints } = require("./adventofcode_9");
const { findAllEasyDigits } = require("./adventofcode_8");
const { dotsAfterFold } = require("./adventofcode_13");
const {
    polymerization,
    polymerization2,
    mostCommonElement,
    leastCommonElement,
} = require("./adventofcode_14");

console.log(`
##############################################################
               
                    #ADVENTOFCODE202

##############################################################                                                                                                 
`);

console.log("************** DAY 1: Sonar Sweep **************\n");
const data_day1 = parseInput("data/day_1.txt", "\n", (el) => Number(el));

console.log("Measurements 1: ", data_day1.reduce(addIfIncreased, 0));
console.log("Measurements 2: ", data_day1.reduce(threeMeasurements, 0));

console.log("\n************* DAY 2: Dive! **************\n");
const data_day2 = parseInput("data/day_2.txt", "\n", (i) => {
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

const data_day3 = parseInput("./data/day_3.txt", "\n", (el) => el.split(""));

var gamma = binaryStr2Decimal(getGammaRate(data_day3));
var epsilon = binaryStr2Decimal(getEpsilonRate(data_day3));

var oxy = binaryStr2Decimal(getOxygenRate(data_day3, 0));
var co2 = binaryStr2Decimal(getCO2Rate(data_day3, 0));

console.log("Power consumption", gamma * epsilon);
console.log("Life support", oxy * co2);

console.log("\n************* DAY 4: Giant Squid **************\n");
let data_day4 = parseInput("./data/day_4.txt", "\n\n", (el) => el);

console.log("Winning bingo score: ", getFirstWinningScore(data_day4));
data_day4 = parseInput("./data/day_4.txt", "\n\n", (el) => el);
console.log("Last winning board score: ", getLastWinningScore(data_day4));

console.log("\n************* DAY 5: Hydrothermal Venture **************\n");
const data_day5 = parseInput("./data/day_5.txt", "\n", (el) =>
    el.split("->").map((row) => {
        return row.trim().split(",").map(Number);
    })
);
let map = initMap(1000);
let ventMap = insertLineSegment(data_day5, map);
console.log("Danger zones: ", getDangerZones(ventMap));
let map2 = initMap(1000);
let fullVentMap = insertAllLineSegments(data_day5, map2);
console.log("Danger zones: ", getDangerZones(fullVentMap));

console.log("\n************* DAY 6: Lanternfish **************\n");
let data_day6 = parseInput("./data/day_6.txt", ",", (el) => Number(el));

console.log(
    "Number of lanternfish after 80 days: " + lanternfish(data_day6, 80)
);
//reset
data_day6 = parseInput("./data/day_6.txt", ",", (el) => Number(el));
console.log(
    "Number of lanternfish after 256 days: " + lanternfish2(data_day6, 256)
);

console.log("\n************* DAY 7: The Treachery of Whales **************\n");
let data_day7 = parseInput("./data/day_7.txt", ",", (el) => Number(el));
console.log("Minimum fuel: ", getMinimumFuelHorizontalPosition(data_day7));
console.log("Minimum fuel 2: ", getMinimumFuelHorizontalPosition2(data_day7));

console.log("\n************* DAY 8: Seven Segment Search **************\n");

let data_day8 = parseInput("./data/day_8.txt", "\n", (e) =>
    e.trim().split("|")
);
console.log("Easy segments: ", findAllEasyDigits(data_day8));

console.log("\n************* DAY 9: Smoke Basin **************\n");
let data_day9 = parseInput("./data/day_9.txt", "\n", (el) =>
    el.split("").map(Number)
);
console.log(
    "Low points score: ",
    sumOfRisksOfLowPoints(getLowPoints(data_day9))
);

console.log("\n************* DAY 10: Syntax Scoring **************\n");
let data_day10 = parseInput("./data/day_10.txt", "\n", (el) => el);
console.log("Syntax error score: ", getScore(data_day10));
console.log(
    "Score for closing brackets: " + getScoreForClosingChars(data_day10)
);

console.log("\n************* DAY 13: Transparent Origami **************\n");
let [dots, instructions] = parseInput("./data/day_13.txt", "\n\n", (e) =>
    e.split("\n")
);
dots = dots.map((pair) => pair.split(",").map(Number));
instructions = instructions.map((i) => {
    let arr = i.split(" ");
    return arr[arr.length - 1].split("=");
});
console.log("Dots after first fold: " + dotsAfterFold(dots, [instructions[0]]));
console.log("Dots after last fold: " + dotsAfterFold(dots, instructions));

console.log("\n************* DAY 14: Extended Polymerization **************\n");
let template;
[template, instructions] = parseInput("./data/day_14.txt", "\n\n", (e) => e);
instructions = instructions.split("\n").map((i) => i.split(" -> "));

let polymer = polymerization(template, instructions, 10);

let occurrences = polymer.split("").reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

let most = occurrences[mostCommonElement(polymer.split(""))];
let least = occurrences[leastCommonElement(polymer.split(""))];
console.log(most, least);
console.log("Most common minus least common elements: ", most - least);

console.log(polymerization2(template, instructions, 40));
