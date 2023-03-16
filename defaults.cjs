function defaults(input,defaultProps)
{
    if(defaultProps === undefined) return input;
    else if(typeof defaultProps !== "object") return {}
    {
            for (let keys in defaultProps) 
            {   
                if(!input[keys])
                {
                    input[keys] = defaultProps[keys]
                }
            }  
    }
    return input;
}
module.exports=defaults;