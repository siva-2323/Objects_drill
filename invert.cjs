
let answer={};

let keys=require("./keys.cjs");
let values=require("./values.cjs");


function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
return false;
}

function invert(input)
{
    if(isObject(input) && !Array.isArray(input))
    {

        let keyArray=keys(input);
        let valueArray=values(input);
        let arrayLength=keyArray.length;

        for(let loop=0;loop<arrayLength;loop++)
        {
            let temp=valueArray[loop];
            answer[temp]=keyArray[loop];
            
        }
            return answer;
    }else return []

}
module.exports=invert;