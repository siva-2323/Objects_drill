


function defaults(input,defaultProps)
{
    
    if(typeof input !== "object" || Array.isArray(input))
    {
         return {};
    }else
    {
            for (let keys in defaultProps) 
            {
                
                input[keys] = defaultProps[keys]
            }
   
    }
    return input;
}

module.exports=defaults;