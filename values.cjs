
let answer=[];

function values(input)
{
    for (let key in input)
    {
        if(typeof input[key] !== "function")
        {
            answer.push(input[key]);
        }
    }

    return answer;

}


module.exports=values;
