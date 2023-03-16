
let answer=[];

function keys(input)
{    
    if(typeof input === "object")
    {
                for(let value in input)
                {
                    answer.push(value);
                }
    }
        return answer;

}


module.exports=keys;