const { parseInput } = require("../utils");
const { getFlashes } = require("../adventofcode_11");

let energy_levels;

beforeEach(() => {
    energy_levels = parseInput("./test/data/testdata_day11.txt", "\n", (line) =>
        line.split("").map(Number)
    );
});

describe("Day 11: Dumbo Octopus", () => {
    test("Input data correctly parsed", () => {
        expect(energy_levels.length).toBe(10);
        expect(energy_levels[0].length).toBe(10);
        expect(energy_levels[0][0]).toBe(5);
    });

    test("Flashes after 1 step", () => {
         expect(getFlashes(energy_levels, 10)).toBe(204);
    });
});
