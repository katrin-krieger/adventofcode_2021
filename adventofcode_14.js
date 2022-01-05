const polymerization = (template, instructions, steps) => {
    let polymer = template;
    for (let i = 0; i < steps; i++) {
        polymer = polymer.split("").reduce((acc, curr, idx) => {
            let inst = instructions.filter(
                (i) => i[0] === curr + polymer[idx + 1]
            );
            if (inst[0]) acc = acc + curr + inst[0][1];
            else acc = acc + curr;
            return acc;
        }, "");
    }
    return polymer;
};

const mostCommonElement = (polymer) => {
    return polymer
        .sort(
            (a, b) =>
                polymer.filter((v) => v === a).length -
                polymer.filter((v) => v === b).length
        )
        .pop();
};

const leastCommonElement = (polymer) => {
    return polymer
        .sort(
            (a, b) =>
                polymer.filter((v) => v === b).length -
                polymer.filter((v) => v === a).length
        )
        .pop();
};

module.exports.polymerization = polymerization;
module.exports.mostCommonElement = mostCommonElement;
module.exports.leastCommonElement = leastCommonElement;
