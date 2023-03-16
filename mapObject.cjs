function mapObject(input, callBack)
{
    let answer={};
    if (typeof callBack !== "function" || typeof input !== "object" || input === null) return answer;
    for( let item in input)
    {
            answer[item]=callBack(input[item],item)
    }
   return answer;
}
module.exports=mapObject;
