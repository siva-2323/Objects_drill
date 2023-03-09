const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
else return false;
}

function cb(value)
{
return value+" batman";
}

function mapObject(input, cb)
{
   if(isObject(input))
   {
    
        for( let i in input)
        {
            let temp=input[i];
    
            let answer=cb(temp);
            
            input[i]=answer;
        }
        return input;
   }else return []
}

module.exports=mapObject;
