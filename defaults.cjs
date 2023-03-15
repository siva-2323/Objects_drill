
function isObject(input)
{
if( input === null || input===undefined ) return false;
else if(typeof input === "object") return true;
return false;
}

function defaults(input,defaultProps)
{
    if(isObject(input) && !Array.isArray(input))
        {
            if( defaultProps === null || defaultProps === undefined || typeof defaultProps !== "object" || Array.isArray(defaultProps)) return input;
            for(let temp in defaultProps){
                if(!temp in input){
                    input[temp]=defaultProps[temp];
                }else{
                    input[temp]=defaultProps[temp]
                }
            }
            return input;

        }return {};
}

module.exports=defaults;