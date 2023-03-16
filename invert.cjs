
let answer={};

function invert(input)
{
   
   if(typeof input === "object")
   {
         for(let element in input)
         {
            answer[input[element]]=element;
         }
   }
    return answer;

}
module.exports=invert;