
let answer=[];

function values(input)
{
    if(typeof input === "object")
    {
                for (let key in input)
                {
                    if(typeof input[key] !== "function")
                    {
                        answer.push(input[key]);
                    }
                }
    }

    return answer;

}


module.exports=values;
