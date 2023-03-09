const invert=require("../invert.cjs");


const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 


let temp=invert(testObject);

console.log(temp);