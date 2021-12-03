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

module.exports.computePosition = computePosition;
module.exports.computePositionWithAim = computePositionWithAim;
