const getMinimumFuelHorizontalPosition = (data) => {

    let result = data.map(el => {
        return data.reduce((acc, curr) => {
            return acc + Math.abs(el - curr);
        }, 0)
    });
    return (result.reduce((acc, curr) => Math.min(acc, curr), result[0]));
}

const getMinimumFuelHorizontalPosition2 = (data) => {
    let result = Array(data.length);
    result = data.map(el => {
        return data.reduce((acc, curr) => {
            let step = Math.abs(el - curr);
            return acc + (step * (step + 1) / 2)
        }, 0)
    });
    return (result.reduce((acc, curr) => Math.min(acc, curr), result[0]));
}

module.exports.getMinimumFuelHorizontalPosition = getMinimumFuelHorizontalPosition;
module.exports.getMinimumFuelHorizontalPosition2 = getMinimumFuelHorizontalPosition2;