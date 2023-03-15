
let answer={};


function mapObject(input, callBack)
{
    
    if (callBack !== undefined && typeof callBack === 'function' && callBack !==null) 
    {
        for( let element in input)
        {
            let temp=input[element];
            
            answer[element]=callBack(temp,element)
        }
    }
   return answer;
}

module.exports=mapObject;
