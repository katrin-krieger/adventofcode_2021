const fs = require("fs");
const file = fs.readFileSync("./data/day_1.txt", "utf8");

const numbers = file
    .toString()
    .split("\n")
    .map((i) => Number(i));

const addIfIncreased = (acc, curr, idx, arr) => {
    if (curr > arr[idx - 1]) acc++;
    return acc;
};

const threeMeasurements = (acc, curr, idx, arr) => {
    var remaining = arr.slice(idx);
    var f = sumArray(remaining.slice(0, 3));
    var s = sumArray(remaining.slice(1, 4));
    if (s > f) acc++;
    return acc;
};

const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(numbers.reduce(addIfIncreased, 0));
console.log(numbers.reduce(threeMeasurements, 0));

module.exports.addIfIncreased = addIfIncreased;
module.exports.threeMeasurements = threeMeasurements;
module.exports.sumArray = sumArray;
