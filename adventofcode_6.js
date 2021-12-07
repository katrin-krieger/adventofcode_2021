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
    //init ages
    data.forEach((el) => {
        ages[el]++;
    });

    for (let i = 0; i < days; i++) {
        ages.push(ages.shift());
        ages[6] += ages[8];
    }

    return ages.reduce((acc, curr) => acc + curr, 0);
};

module.exports.lanternfish = lanternfish;
module.exports.lanternfish2 = lanternfish2;
