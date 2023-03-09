const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function cb(input)
{
    return input+" Batman";
}


let mapObject=require("../mapObject.cjs");

let temp=mapObject(testObject,cb);

console.log(temp);