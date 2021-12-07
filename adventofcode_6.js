const lanternfish = (data, days) => {
    if (days == 0) return data.length;
    let newFish = 0;
    data.forEach((e, index) => {
        if (e == 0) {
            e = 6;
            newFish++;
        } else e--;
        data[index] = e;
    });

    if (newFish > 0) {
        data = data.concat(new Array(newFish).fill(8));
    }

    return lanternfish(data, --days);
};

const lanternfish2 = (data, days) => {
    let ages = Array(9).fill(0);
    let dayarr = Array(days - 2).fill(0);
    //init ages
    data.forEach((el) => {
        ages[el]++;
    });

    let population = dayarr.reduce((acc, curr) => {
        acc.forEach((fish, index, ages) => {
            if (index === 0 && fish > 0) {
                ages[index] -= fish;
                ages[8] += fish;
                ages[6] += fish;
            } else if (index > 0 && fish > 0) {
                ages[index] -= fish;
                ages[index - 1] += fish;
            }
        });
        console.log(acc.reduce((a, c) => a + c, 0));
        return acc;
    }, ages);
    return population.reduce((acc, curr) => acc + curr, 0);
};

module.exports.lanternfish = lanternfish;
module.exports.lanternfish2 = lanternfish2;
