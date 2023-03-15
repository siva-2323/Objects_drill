
let mapObject=require("../mapObject.cjs");

function callBack(value,key)
{
    return value+" "+key;
}

let func=() => {};
let nullValue=null;
let undefinedValue=undefined;
let emptyString="";
let emptyArray=[];
let emptyObject={};
let number=5;
let floatNumber=6.9;
let testObject={ name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let string="Shiva";
let booleanValue=true;
let symbol="$";
let items=["lets","check","this"];
let inputNumbers = {start: 5, end: 12};





let temp=mapObject(testObject,callBack);

console.log(temp);