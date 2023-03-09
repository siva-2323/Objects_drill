
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

let obj={cast:"Christian Bale"};

function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
else return false;
}

function defaults(input,defaultProps)
{
        if(isObject(input))
        {
            for(let temp in defaultProps)
            {
                if(temp in input == false)
                {
                    input[temp]=defaultProps[temp];
                    
                }
            }
            return input;

        }else return []
}

module.exports=defaults;