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

const polymerization2 = (template, instructions, steps) => {
    //transform instructions
    let transformations = {};
    let pairs = {};
    let elems = {};
    instructions.forEach((pair) => (transformations[pair[0]] = pair[1]));

    template.split("").forEach((char, idx) => {
        if (idx < template.split("").length - 1) {
            pairs[template.substring(idx, idx + 2)]
                ? (pairs[template.substring(idx, idx + 2)] += 1)
                : (pairs[template.substring(idx, idx + 2)] = 1);
        }
        elems[char] ? (elems[char] += 1) : (elems[char] = 1);
    });

    for (let i = 0; i < steps; i++) {
        for (let [comb, count] of Object.entries(pairs)) {
            new_elem = transformations[comb];
            elems[new_elem]
                ? (elems[new_elem] += count)
                : (elems[new_elem] = 1);
            pairs[comb] -= count;
            pairs[comb[0] + new_elem]
                ? (pairs[comb[0] + new_elem] += count)
                : (pairs[comb[0] + new_elem] = 1);
            pairs[new_elem + comb[1]]
                ? (pairs[new_elem + comb[1]] += count)
                : (pairs[new_elem + comb[1]] = 1);
        }
    }
    let max = Object.values(elems).reduce(
        (acc, curr) => Math.max(acc, curr),
        0
    );
    let min = Object.values(elems).reduce(
        (acc, curr) => Math.min(acc, curr),
        0
    );
    return max - min;
};

module.exports.polymerization = polymerization;
module.exports.polymerization2 = polymerization2;
module.exports.mostCommonElement = mostCommonElement;
module.exports.leastCommonElement = leastCommonElement;
