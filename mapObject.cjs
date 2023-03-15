let answer={};

function isObject(input,cb)
{
if( input === null || input===undefined || typeof cb !== "function") return false;
else if(cb === null || cb === undefined ) return false;
else if(typeof input === "object" && typeof cb === "function" ) return true;
return false;
}


function mapObject(input, cb)
{
    if(isObject(input,cb)&& !Array.isArray(input))

   {
    
        for( let element in input)
        {
            let temp=input[element];
            
            answer[element]=cb(temp,element)
        }
        
   }return answer;
}

module.exports=mapObject;
