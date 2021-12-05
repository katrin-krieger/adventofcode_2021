const insertLineSegment = (data, map) => {
    data.map((row) => {
        var x1 = row[0][0];
        var y1 = row[0][1];
        var x2 = row[1][0];
        var y2 = row[1][1];
        if (x1 === x2) {
            //vertical
            var start = Math.min(y1, y2);
            var end = Math.max(y1, y2);
            for (let i = start; i <= end; i++) {
                map[i][x1]++;
            }
        } else if (y1 === y2) {
            //horizontal
            var start = Math.min(x1, x2);
            var end = Math.max(x1, x2);
            for (let i = start; i <= end; i++) {
                map[y1][i]++;
            }
        }
    });
    return map;
};

const initMap = (size) => {
    return new Array(size).fill(0).map(() => new Array(size).fill(0));
};

const getDangerZones = (map) => {
    return map.reduce((acc, curr) => {
        const sum = curr.reduce((sum, el) => {
            if (el >= 2) sum++;
            return sum;
        }, 0);
        return acc + sum;
    }, 0);
};

const insertAllLineSegments = (data, map) => {
    data.map((row) => {
        var x1 = row[0][0];
        var y1 = row[0][1];
        var x2 = row[1][0];
        var y2 = row[1][1];
        if (x1 === x2) {
            //vertical
            var start = Math.min(y1, y2);
            var end = Math.max(y1, y2);
            for (let i = start; i <= end; i++) {
                map[i][x1]++;
            }
        } else if (y1 === y2) {
            //horizontal
            var start = Math.min(x1, x2);
            var end = Math.max(x1, x2);
            for (let i = start; i <= end; i++) {
                map[y1][i]++;
            }
        } else {
            var start = x1;
            var end = x2;
            //walk diagonally
            if (x1 < x2) {
                if (y1 < y2) {
                    //top left to bottom right
                    for (let i = x1, j = y1; i <= x2; i++, j++) {
                        map[j][i]++;
                    }
                } else {
                    //top right to bottom left
                    for (let i = x1, j = y1; i <= x2; i++, j--) {
                        map[j][i]++;
                    }
                }
            } else {
                if (y1 < y2) {
                    //bottom right to top left
                    for (let i = x1, j = y1; i >= x2; i--, j++) {
                        map[j][i]++;
                    }
                } else {
                    //bottom left to top right
                    for (let i = x1, j = y1; i >= x2; i--, j--) {
                        map[j][i]++;
                    }
                }
            }
        }
    });
    return map;
};

module.exports.insertLineSegment = insertLineSegment;
module.exports.initMap = initMap;
module.exports.getDangerZones = getDangerZones;
module.exports.insertAllLineSegments = insertAllLineSegments;
