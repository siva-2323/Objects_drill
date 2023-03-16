function keys(input) 
{
    let answer = [];
    if (typeof input !== "object" || input === null) return answer;
    for (let value in input) 
        {
            answer.push(value);
        }
    return answer;
}


module.exports = keys;