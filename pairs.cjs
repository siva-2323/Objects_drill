
let answer=[];

let keys=require("./keys.cjs");
let values=require("./values.cjs");


function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
return false;
}

function pairs(input)
{
    if(isObject(input) && !Array.isArray(input))
    {

        let keyArray=keys(input);
        let valueArray=values(input);
        let arrayLength=keyArray.length;

        for(let loop=0;loop<arrayLength;loop++)
        {
            answer.push([keyArray[loop],valueArray[loop]]);
        }
            return answer;
    }return answer;

}

module.exports=pairs;