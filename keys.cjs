const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

let answer=[];


function isObject(input)
{
if((input === null)||(input===undefined)) return false;
else if(typeof input === "object") return true;
else return false;
}


function keys(input)
{
    if(isObject(input))
    {
        
        for(let value in input)
        {
            answer.push(value);
        }
        return answer;
    }else return [];

}


module.exports=keys;