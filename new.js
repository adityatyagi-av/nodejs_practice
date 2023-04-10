const name=require('./module1');
const {showIt}=require('./function')

showIt(name.name1)
setTimeout(()=>{
    showIt(name.name4)
})