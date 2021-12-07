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
    playBingoWithLastWinningBoard,
} = require("./adventofcode_4");
const {
    initMap,
    insertLineSegment,
    getDangerZones,
    insertAllLineSegments,
} = require("./adventofcode_5");
const { lanternfish, lanternfish2 } = require("./adventofcode_6");

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
const data_day4 = parseInput("./data/day_4.txt", "\n\n", (el) => el);

console.log("Winning bingo score: ", playBingo(data_day4));
console.log(
    "Last winning board score: ",
    playBingoWithLastWinningBoard(data_day4)
);

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
let data_day6 = parseInput("./data/day6.txt", ",", (el) => Number(el));

console.log(
    "Number of lanternfish after 80 days: " + lanternfish(data_day6, 80)
);
//reset
data_day6 = parseInput("./data/day6.txt", ",", (el) => Number(el));
console.log(
    "Number of lanternfish after 256 days: " + lanternfish2(data_day6, 256)
);
