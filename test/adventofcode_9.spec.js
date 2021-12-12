const { parseInput } = require("../utils");
const { sumOfRisksOfLowPoints, getLowPoints, getBasins } = require("../adventofcode_9");

let data;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day9.txt", "\n", el => el.split("").map(Number));
})

describe("Smoke Basin", () => {
    test("Get low points", () => {
        expect(getLowPoints(data)).toStrictEqual([1, 0, 5, 5]);
    }),
        test("Compute sum of risk levels", () => {
            expect(sumOfRisksOfLowPoints([1, 0, 5, 5])).toBe(15);
        }),
        test("Compute basins", () => {
            let result = getBasins(data);
            let test = result[0].sort((a, b) => a - b);
            expect(test).toStrictEqual([1, 2, 3]);
        })
})