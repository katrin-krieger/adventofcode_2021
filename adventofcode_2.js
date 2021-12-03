const { parseInput } = require("./utils");

const commands = parseInput("./data/day_2.txt", (i) => {
    var command = i.split(" ");
    return { command: command[0], distance: Number(command[1]) };
});

const computePositionWithAim = (acc, curr) => {
    switch (curr.command) {
        case "forward":
            acc.position += curr.distance;
            acc.depth += acc.aim * curr.distance;
            break;
        case "up":
            acc.aim -= curr.distance;
            break;
        case "down":
            acc.aim += curr.distance;
            break;
    }
    return acc;
};
const computePosition = (acc, curr) => {
    switch (curr.command) {
        case "forward":
            acc.position += curr.distance;
            break;
        case "up":
            acc.depth -= curr.distance;
            break;
        case "down":
            acc.depth += curr.distance;
            break;
    }
    return acc;
};
var p1 = commands.reduce(computePosition, {
    position: 0,
    depth: 0,
    aim: 0,
});

var p2 = commands.reduce(computePositionWithAim, {
    position: 0,
    depth: 0,
    aim: 0,
});

console.log(p1.depth * p1.position);
console.log(p2.depth * p2.position);
