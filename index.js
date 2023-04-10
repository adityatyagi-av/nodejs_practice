const lib =require('./lib')
const fs =require('fs');

const txt =fs.readFileSync('demo.txt','utf-8');
console.log(txt);

console.log(lib.sum(4,6),lib.diff(3,7));
