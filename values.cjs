const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

const keys=require("./keys.cjs");

let keyArray=keys(testObject);

let answer=[];


function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
else return false;
}


function values(input)
{
    if(isObject(input))
    {
        
        for(let loop =0;loop<keyArray.length;loop++)
        {
            let temp=keyArray[loop];
            answer.push(input[temp]);
        }
        return answer;
    }else return [];

}

module.exports=values;
