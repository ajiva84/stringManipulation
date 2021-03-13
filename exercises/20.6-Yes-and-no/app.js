let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let simplifier = function(arrays){
    // var age_dt = new Date(Date.now() - person.birthDate.getTime());
    // var year = age_dt.getUTCFullYear();
    // var age = Math.abs(year - 1970);
    if (arrays == 1) {
        arrays = "wiki"
    }
    else {
        arrays = "woko"
    }

	return arrays ;
};

console.log(theBools.map(simplifier));