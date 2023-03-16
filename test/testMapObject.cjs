
let mapObject=require("../mapObject.cjs");

function callBack(value,key)
{
    return value+" "+key;
}
let testObject={name:"Batman",age:30,location:"Gotham City"}
let temp=mapObject(testObject,callBack);

console.log(temp);