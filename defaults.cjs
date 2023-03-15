
function isObject(input,defaultProps)
{
if( input === null || input===undefined || defaultProps === null || defaultProps === undefined || typeof defaultProps !== "object" || Array.isArray(defaultProps)) return false;
else if(typeof input === "object") return true;
else return false;
}

function defaults(input,defaultProps)
{
    if(isObject(input,defaultProps) && !Array.isArray(input))
        {
            for(let temp in defaultProps){
                if(!temp in input){
                    input[temp]=defaultProps[temp];
                }else{
                    input[temp]=defaultProps[temp]
                }
            }
            return input;

        }else return {};
}

module.exports=defaults;