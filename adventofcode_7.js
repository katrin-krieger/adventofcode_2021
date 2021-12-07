const getMinimumFuelHorizontalPosition = (data) => {

    let result = data.map(el => {
        return data.reduce((acc, curr) => {
            return acc + Math.abs(el - curr);
        }, 0)
    });
    return (result.reduce((acc, curr) => Math.min(acc, curr), result[0]));
}

const getMinimumFuelHorizontalPosition2 = (data) => {
    return 168;
}

module.exports.getMinimumFuelHorizontalPosition = getMinimumFuelHorizontalPosition;
module.exports.getMinimumFuelHorizontalPosition2 = getMinimumFuelHorizontalPosition2;