const { parseInput } = require("../utils");
const { findEasyDigits, findAllEasyDigits } = require("../adventofcode_8");
let data;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day8.txt", "\n", e => e.trim().split("|"));
})

describe("Seven Segment Search", () => {
    test("Find easy digits per line", () => {
        let [pattern, output] = data[0];
        expect(findEasyDigits(output.trim().split(" "))).toBe(2);
    }
    ),

        test("find all easy digits", () => {
            expect(findAllEasyDigits(data)).toBe(26);
        })
})