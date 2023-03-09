const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
const values=require("../values.cjs");

let temp=values(testObject);

console.log(temp);