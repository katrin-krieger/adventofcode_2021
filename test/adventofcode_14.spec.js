const { parseInput } = require("../utils");
const {
    polymerization,
    polymerization2,
    mostCommonElement,
    leastCommonElement,
} = require("../adventofcode_14");

let template, instructions;

beforeEach(() => {
    [template, instructions] = parseInput(
        "./test/data/testdata_day14.txt",
        "\n\n",
        (e) => e
    );
    instructions = instructions.split("\n").map((i) => i.split(" -> "));
});

describe("Extended Polymerization", () => {
    test("Polymerization after 1 step", () => {
        expect(polymerization(template, instructions, 1)).toBe("NCNBCHB");
    });
    test("Polymerization after 2 steps", () => {
        expect(polymerization(template, instructions, 2)).toBe("NBCCNBBBCBHCB");
    });
    test("Polymerization after 3 steps", () => {
        expect(polymerization(template, instructions, 3)).toBe(
            "NBBBCNCCNBBNBNBBCHBHHBCHB"
        );
    });
    test("Polymerization after 4 steps", () => {
        expect(polymerization(template, instructions, 4)).toBe(
            "NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB"
        );
    });
    test("Most common element of AAAAB", () => {
        expect(mostCommonElement("AAAB".split(""))).toBe("A");
    });
    test("Least common element of AAAAB", () => {
        expect(leastCommonElement("AAAB".split(""))).toBe("B");
    });

    test("Polymerization after 10 steps", () => {
        expect(polymerization2(template, instructions, 10)).toBe(1588);
    });
});
