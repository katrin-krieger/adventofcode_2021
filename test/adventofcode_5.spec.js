const { parseInput } = require("../utils");
const {
    insertLineSegment,
    initMap,
    getDangerZones,
    insertAllLineSegments,
} = require("../adventofcode_5");

var data, map;

beforeEach(() => {
    data = parseInput("./test/data/testdata_day5.txt", "\n", (el) =>
        el.split("->").map((row) => {
            return row.trim().split(",").map(Number);
        })
    );
    map = initMap(10);
});

describe("Find hydrothermal vents ", () => {
    test("Creates correct input data", () => {
        expect(data.length).toBe(10);
        expect(data[0][0][0]).toBe(0);
    });

    test("Input line segments into map", () => {
        map = insertLineSegment(data, map);
        expect(map[0][7]).toBe(1);
    });
    test("Count danger zones", () => {
        map = insertLineSegment(data, map);
        expect(getDangerZones(map)).toBe(5);
    });
    test("Count danger zones for full segments: ", () => {
        map = insertAllLineSegments(data, map);
        expect(getDangerZones(map)).toBe(12);
    });

    test("find all line segments", () => {
        map = insertAllLineSegments(data, map);
        expect(map[9][0]).toBe(2);
        expect(map[0][0]).toBe(1);
        expect(map[8][8]).toBe(1);
        expect(map[6][2]).toBe(1);
        expect(map[3][5]).toBe(2);
        expect(map[4][4]).toBe(3);
    });
});
