function invert(input)
{
   let answer={};
   if(typeof input !== "object" || input === null) return answer;
   for(let item in input)
      {
            answer[input[item]]=item;
      }
    return answer;
}
module.exports=invert;