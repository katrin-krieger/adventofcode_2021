const getLowPoints = (data) => {
    var lowPoints = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (isLowPoint(data, i, j))
                lowPoints.push(data[i][j]);
        }
    }
    return lowPoints;
}

const isLowPoint = (data, i, j) => {
    var isLowPoint = true;
    //can I check above?
    if (i > 0)
        isLowPoint = isLowPoint && data[i][j] < data[i - 1][j];
    //can I check below?
    if (i < data.length - 1)
        isLowPoint = isLowPoint && data[i][j] < data[i + 1][j];
    //can I check left?
    if (j > 0)
        isLowPoint = isLowPoint && data[i][j] < data[i][j - 1];
    //can I check right?
    if (j < data[i].length - 1)
        isLowPoint = isLowPoint && data[i][j] < data[i][j + 1];

    return (isLowPoint)

}

const sumOfRisksOfLowPoints = (lowPoints) => {
    return lowPoints.reduce((acc, point) => {
        return point + 1 + acc;
    }, 0);
}

const getBasins = (data) => {
    var lowPoints = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (isLowPoint(data, i, j));
        }
    }
    return [[2, 1, 3]];
}

module.exports.sumOfRisksOfLowPoints = sumOfRisksOfLowPoints
module.exports.getLowPoints = getLowPoints
module.exports.getBasins = getBasins;