const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function cb(value,key)
{
    return value+" "+key;
}


let mapObject=require("../mapObject.cjs");

let temp=mapObject(testObject,cb);

console.log(temp);