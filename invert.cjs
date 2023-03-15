
let answer={};

function invert(input)
{
   

     for(let element in input)
     {
        answer[input[element]]=element;
     }
            
    return answer;

}
module.exports=invert;