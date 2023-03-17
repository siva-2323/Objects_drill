function defaults(input, defaultProps)
{
    if (typeof input === "string") 
    {
        const stringToObject = {};
        for (let index = 0; index < input.length; index++) 
        {
            stringToObject[index] = input.charAt(index);
        }
        input = stringToObject;
    }
    for (let keys in defaultProps) 
    {   
        if(!input[keys])
        {
            input[keys] = defaultProps[keys]
        }
    }  
    return input;
    }
module.exports=defaults;