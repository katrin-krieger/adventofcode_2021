const { parseInput } = require("../utils");
const { getMinimumFuelHorizontalPosition, getMinimumFuelHorizontalPosition2 } = require('../adventofcode_7');

var data;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day7.txt", ",", el => Number(el));
})

describe("The Treachery of Whales", () => {
    test("minimum fuel consumption part 1", () => {
        expect(getMinimumFuelHorizontalPosition(data)).toBe(37);
    });
    test("minimum fuel consumption part 2", () => {
        expect(getMinimumFuelHorizontalPosition2(data)).toBe(168);
    })
})