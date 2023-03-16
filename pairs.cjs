
let answer=[];

function pairs(input)
{
    if(typeof input === "object")
    {
                for(let key in input)
                {
                    answer.push([key,input[key]])
                }
    }
            return answer;

}

module.exports=pairs;