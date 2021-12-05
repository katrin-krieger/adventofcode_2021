const { parseInput } = require("../utils");
const {
    getChosenNumbers,
    getBingoBoards,
    markNumbersAsDrawn,
    rowOrColumnComplete,
    getWinningScore,
    playBingo,
    playBingoWithLastWinningBoard,
} = require("../adventofcode_4");

var data, chosenNumbers, boards;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day4.txt", "\n\n", (el) => el);
    chosenNumbers = getChosenNumbers(data);
    boards = getBingoBoards(data);
});

afterEach(() => {
    data = null;
    chosenNumbers = null;
    boards = null;
});

describe("Giant squid plays bingo", () => {
    test("creates correct input data from file", () => {
        expect(getChosenNumbers(data)).toHaveLength(27);
    });
    test("creates Bingo boards from input file", () => {
        expect(boards).toHaveLength(3);
        expect(boards[0]).toHaveLength(5);
        expect(boards[0][1][0].number).toBe(8);
    });
    test("marks drawn number", () => {
        markNumbersAsDrawn(boards, 22);
        expect(boards[0][0][0].drawn).toBe(true);
        expect(boards[0][0][1].drawn).toBe(false);
    });

    test("recognizes complete row or column", () => {
        boards[2][0] = boards[2][0].map((el) => {
            return { number: el.number, drawn: true };
        });

        var colComplete = [
            [
                [
                    { number: 1, drawn: false },
                    { number: 1, drawn: true },
                    { number: 1, drawn: false },
                ],
                [
                    { number: 1, drawn: false },
                    { number: 1, drawn: true },
                    { number: 1, drawn: false },
                ],
                [
                    { number: 1, drawn: false },
                    { number: 1, drawn: true },
                    { number: 1, drawn: false },
                ],
            ],
        ];

        expect(rowOrColumnComplete(boards).complete).toBe(true);
        expect(rowOrColumnComplete(colComplete).complete).toBe(true);
    });

    test("computes correct winning score", () => {
        var winning_board = [
            [
                { number: 14, drawn: true },
                { number: 21, drawn: true },
                { number: 17, drawn: true },
                { number: 24, drawn: true },
                { number: 4, drawn: true },
            ],
            [
                { number: 10, drawn: false },
                { number: 16, drawn: false },
                { number: 15, drawn: false },
                { number: 9, drawn: true },
                { number: 19, drawn: false },
            ],
            [
                { number: 18, drawn: false },
                { number: 8, drawn: false },
                { number: 23, drawn: true },
                { number: 26, drawn: false },
                { number: 20, drawn: false },
            ],
            [
                { number: 22, drawn: false },
                { number: 11, drawn: true },
                { number: 13, drawn: false },
                { number: 6, drawn: false },
                { number: 5, drawn: true },
            ],
            [
                { number: 2, drawn: true },
                { number: 0, drawn: true },
                { number: 12, drawn: false },
                { number: 3, drawn: false },
                { number: 7, drawn: true },
            ],
        ];

        expect(getWinningScore(winning_board, 24)).toBe(4512);
    });

    test("plays bingo correctly", () => {
        expect(playBingo(data)).toBe(4512);
    });

    test("computes score for last board to win", () => {
        //if one board is complete, note down its index in an array
        expect(playBingoWithLastWinningBoard(data)).toBe(1924);
    });
});
