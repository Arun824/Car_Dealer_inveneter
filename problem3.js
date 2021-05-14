
function problem3(inventor) {
     let arr = [];
     for(let i=0;i<inventor.length;i++){
         arr.push(inventor[i]["car_model"])
     }
     arr.sort((a, b) => a.localeCompare(b)); 
     return arr;
};

module.exports = problem3;