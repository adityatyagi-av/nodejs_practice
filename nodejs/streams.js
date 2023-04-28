const fs =require('fs');

const stream = fs.createReadStream('./content/subfolder/big.txt',
{highWaterMark:10000 //it sets the maximum buffer capacity of every chunks
})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(error)=>{
    console.log(error)
})