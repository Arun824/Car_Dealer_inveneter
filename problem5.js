function problem4(inventor) {
    let count = 0;
    let arr = []
    for(let i=0;i<inventor.length;i++){
        if(inventor[i]["car_year"] < 2000 ) {
            arr.push(inventor[i]["car_year"]);
             count++;
        }
    }
    return ` ${count}   ${arr}    ${arr.length}`;
};

module.exports = problem4;