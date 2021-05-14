function problem6(inventor) {
    let arr = [];
    for(let i=0;i<inventor.length;i++) {
        if(inventor[i]["car_make"] === "Audi" || inventor[i]["car_make"] === "BMW" ) {
               arr.push(inventor[i]);
        }
    }
    let res = []; 
    for(let i=0;i<arr.length;i++) {
        res.push(JSON.stringify(arr[i]));
    }
    return res;
};

module.exports = problem6;