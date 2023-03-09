const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

let answer=[];

let keys=require("./keys.cjs");
let values=require("./values.cjs");




function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
else return false;
}

function pairs(input)
{
    if(isObject(input))
    {

        let keyArray=keys(input);
        let valueArray=values(input);
        let arrayLength=keyArray.length;

        for(let loop=0;loop<arrayLength;loop++)
        {
            answer.push([keyArray[loop],valueArray[loop]]);
        }
            return answer;
    }else return []

}

module.exports=pairs;