let answer=[];

function isObject(input)
{
if( input === null || input===undefined ) return false;
else if(typeof input === "object") return true;
return false;
}


function keys(input)
{
        if(isObject(input) && !Array.isArray(input))
        {       
                for(let value in input)
                {
                    answer.push(value);
                }
                
        }
        return answer;

}


module.exports=keys;