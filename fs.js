const fs =require('fs');
const first = fs.readFileSync('./content/subfolder/test.txt','utf-8');
const second = fs.readFileSync('./demo.txt','utf-8');

console.log(first,second)

fs.writeFileSync('./content/subfolder/result.txt',`hello here is the result: ${first} ,${second}`,{flag: 'a'})