//OS MODULE

const os =require('os')

//info about the current user
const user=os.userInfo();
console.log(user)

console.log(`The System Uptime is ${Math.floor(os.uptime()/60)} minutes`)

const currentOS={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

console.log(`available parallelism: ${os.cpus().length}`)