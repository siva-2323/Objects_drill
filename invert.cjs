
let answer={};

let keys=require("./keys.cjs");
let values=require("./values.cjs");


function isObject(input)
{
if( input === null || input===undefined ) return false;
else if(typeof input === "object") return true;
return false;
}

function invert(input)
{
    if(isObject(input) && !Array.isArray(input))
    {

     for(let element in input)
     {
        answer[input[element]]=element;
     }
            
    }return answer;

}
module.exports=invert;