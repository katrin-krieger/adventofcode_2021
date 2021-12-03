const { parseInput } = require("../utils");
const { getGammaRate, getEpsilonRate } = require("../adventofcode_3");

describe("Compute gamma and epsilon rate", () => {
    const data = parseInput("./test/data/testdata_day3.txt", (el) =>
        el.split("")
    );

    test("gamma rate", () => {
        expect(getGammaRate(data)).toBe("10110");
    });

    test("epsilon rate", () => {
        expect(getEpsilonRate(data)).toBe("01001");
    });

    test("power consumption", () => {});
});
