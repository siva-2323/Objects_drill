function pairs(input)
{
    let answer=[];
    if(typeof input !== "object" || input === null) return answer;
    for(let item in input)
    {
        answer.push([item,input[item]])
    }
            return answer;
}
module.exports=pairs;