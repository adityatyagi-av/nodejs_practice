try {
    console.log("hey i am practising try and catch");
    laaa();
    console.log("hey i am practising try and catch");
} catch (error) {
    console.log(`Error has occured ${error}`)
}

//try...catch only works for the runtime errors: It won't work if the code is syntatically wrong
//The JS engine first read the code, then it runs it. the errors that occurs on the reading phase are called "parse-time" errors and are unrecoverable (from inside that code).
// try {
//     {{{
// } catch (error) {
//     console.log("error")
// }


//try...catch works synchronously
//If an exception happens in "scheduled" code, like in setTimeout , then try..catch won't catch it
// try{
//     setTimeout(function(){
//         noVariable;
//     },1000);
// } catch (error){
//     console.log("code won't work");
// }
//Reason: The function itself is executed later, when the engine has already left the try...catch construct.To catch an exception inside a scheduled function, try..catch must be inside the function

setTimeout(function(){
    try{
        console.log("HEY BUDDY");
        loca;
    } catch(error){
        console.log("error occured");
    }
},2000)