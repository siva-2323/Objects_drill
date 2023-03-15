
let answer=[];

function pairs(input)
{
       
    for(let key in input)
    {
        answer.push([key,input[key]])

    }
            return answer;

}

module.exports=pairs;