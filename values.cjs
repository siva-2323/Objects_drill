function values(input)
 {
    let answer = [];
    if (typeof input !== "object" || input === null) return answer;
    for (let key in input) 
    {
        answer.push(input[key]);
    }
    return answer;
}
module.exports = values;
