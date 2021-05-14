function problem2(inventor) {
    let last =  inventor[inventor.length -1];
     return  `The last car has manufactured by ${last["car_model"]} at ${last["car_make"]}.`;
};

module.exports = problem2;