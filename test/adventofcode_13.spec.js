const { parseInput } = require("../utils");
const { dotsAfterFold } = require("../adventofcode_13");

let dots, instructions;

beforeEach(() => {
    [dots, instructions] = parseInput("./test/data/testdata_day13.txt", "\n\n", e => e.split("\n"));
    dots = dots.map(pair => pair.split(",").map(Number));
    instructions = instructions.map(i => {
        let arr = i.split(" ");
        return arr[arr.length - 1].split("=");
    })
})

describe("Transparent Origami", () => {
    test("Dots after first fold", () => {
        expect(dotsAfterFold(dots, [instructions[0]])).toBe(17);
    }),
        test("Dots after 2 instructions", () => {
            expect(dotsAfterFold(dots, instructions)).toBe(16);
        })
})