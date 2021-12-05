const { parseInput } = require("../utils");
const {
    getGammaRate,
    getEpsilonRate,
    getOxygenRate,
    getCO2Rate,
} = require("../adventofcode_3");

describe("Compute gamma and epsilon rate", () => {
    const data = parseInput("./test/data/testdata_day3.txt", "\n", (el) =>
        el.split("")
    );

    test("gamma rate", () => {
        expect(getGammaRate(data)).toBe("10110");
    });

    test("epsilon rate", () => {
        expect(getEpsilonRate(data)).toBe("01001");
    });

    test("oxygen rate", () => {
        expect(getOxygenRate(data)).toBe("10111");
    });

    test("CO2 scrubber rate", () => {
        expect(getCO2Rate(data)).toBe("01010");
    });
});
