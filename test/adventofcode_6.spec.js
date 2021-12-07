const { parseInput } = require("../utils");
const { lanternfish, lanternfish2 } = require("../adventofcode_6");
const { TestWatcher } = require("@jest/core");

var data;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day6.txt", ",", (el) => Number(el));
});

describe("Lanternfish", () => {
    test("lanternfish population after 18 days", () => {
        expect(lanternfish(data, 18)).toBe(26);
    });
    test("laternfish population after 80 days", () => {
        expect(lanternfish(data, 80)).toBe(5934);
    });
    test("lanternfish 2 after 18 days", () => {
        expect(lanternfish2(data, 18)).toBe(26);
    });
    test("laternfish population 2 after 80 days", () => {
        expect(lanternfish2(data, 80)).toBe(5934);
    });
});
