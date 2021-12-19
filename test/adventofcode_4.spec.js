const { parseInput } = require("../utils");
const { getFirstWinningScore, getLastWinningScore } = require("../adventofcode_4");

let data;


beforeEach(() => {
    data = parseInput("./test/data/testdata_day4.txt", "\n\n", e => e)

})

describe("Giant squid", () => {
    test("Score of first winning board", () => {
        expect(getFirstWinningScore(data)).toBe(4512);
    });
    test("Score of last winning board", () => {
        expect(getLastWinningScore(data)).toBe(1924);
    })
})