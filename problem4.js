function problem4(inventor) {
    let arr = [];
    for(let i=0;i<inventor.length;i++){
        arr.push(inventor[i]["car_year"])
    }
    return arr;
};

module.exports = problem4;