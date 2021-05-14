
function problem1(inventor) {
    let res = "";
    for(let i=0;i<inventor.length;i++){
        if(inventor[i]["id"] == 33) { 
             res =  `"Car 33 is manufacture in the yaer of  ${inventor[i]["car_year"]} by  ${inventor[i]["car_make"]} and it's mode is ${inventor[i]["car_model"]}."`;
        }
    }
    return res;
};

module.exports = problem1;