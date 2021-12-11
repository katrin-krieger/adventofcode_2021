const { parseInput } = require('../utils');
const {
    getFirstIncompleteChar,
    isOpeningBracket,
    isClosingBracket,
    isBracketPair,
    getScore,
    filterCorruptLines,
    getClosingChars,
    getScoreForClosingChars
} = require("../adventofcode_10");

let data;

beforeEach(() => {

    data = parseInput("./test/data/testdata_day10.txt", "\n", el => el);
});

describe("Syntax Scoring", () =>
    test("Recognize opening bracket", () => {
        expect(isOpeningBracket("[")).toBeTruthy();
        expect(isOpeningBracket(")")).toBeFalsy();
    }),
    test("Recognize closing bracket", () => {
        expect(isClosingBracket("]")).toBeTruthy();
        expect(isClosingBracket("<")).toBeFalsy();
    }),
    test("Recognize bracket pair", () => {
        expect(isBracketPair("(", ")")).toBeTruthy();
        expect(isBracketPair("(", "<")).toBeFalsy();
        expect(isBracketPair("(", "<")).toBeFalsy();
    }),
    test("Find first  incomplete char ", () => {
        expect(getFirstIncompleteChar(data[2])).toBe("}");
        expect(getFirstIncompleteChar(data[4])).toBe(")");
    }),
    test("Get score", () => {
        expect(getScore(data)).toBe(26397);
    }),
    test("filter incomplete lines", () => {
        expect(filterCorruptLines(data)[0]).toBe("[({(<(())[]>[[{[]{<()<>>");
        expect(filterCorruptLines(data)[1]).toBe("[(()[<>])]({[<{<<[]>>(");

    }),
    test("get closing chars", () => {
        expect(getClosingChars(data[0])).toBe("}}]])})]");
    }),
    test("get score for closing chars", () => {
        expect(getScoreForClosingChars(data)).toBe(288957);
    })
)
