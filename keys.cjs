
let answer=[];

function keys(input)
{    
                for(let value in input)
                {
                    answer.push(value);
                }

        return answer;

}


module.exports=keys;