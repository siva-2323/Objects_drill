const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
let batmanCasting={cast1:"unknown", cast2:"Christian Bale", cast3:"Ben "};
let defaults=require("../defaults.cjs");


let temp=defaults(testObject,testObject);
console.log(temp);