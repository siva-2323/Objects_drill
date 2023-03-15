
const keys=require("./keys.cjs");
let answer=[];


function isObject(input)
{
if(input === null || input===undefined ) return false;
else if(typeof input === "object") return true;
return false;
}


function values(input)
{
    if(isObject(input)&& !Array.isArray(input))
    {

        let keyArray=keys(input);
        for(let loop =0;loop<keyArray.length;loop++)
        {
            let temp=keyArray[loop];
            answer.push(input[temp]);
        }
        
    }return answer;

}

module.exports=values;
