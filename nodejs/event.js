const EventEmitter =require('events');


//This code wouldn't work because it requires an instance of object to
// EventEmitter.on('response',()=>{
//     console.log('data received')
// })
// EventEmitter.emit('response')


const customEmitter = new EventEmitter()
customEmitter.on('response',(name,age)=>{
    console.log(`data recieved of ${name} whose age is ${age}`)
})

customEmitter.on('response',()=>{
    console.log('here we are testing multiple function setup')
})
customEmitter.emit('response','aditya' ,20)
