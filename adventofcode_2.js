const fs = require("fs");
const file = fs.readFileSync("./data/day_2.txt", "utf8");

const commands = file
    .toString()
    .split("\n")
    .map((i) => {
        var command = i.split(" ");
        return { command: command[0], distance: Number(command[1]) };
    });

const computePosition = (acc, curr) => {
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
var position = 0;
var depth = 0;
var aim = 0;

var p = commands.reduce(computePosition, { position, depth, aim });

console.log(p.depth * p.position);
