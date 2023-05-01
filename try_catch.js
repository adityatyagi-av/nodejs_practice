// try {
//     console.log("hey i am practising try and catch");
//     laaa();
//     console.log("hey i am practising try and catch");
// } catch (error) {
//     console.log(`Error has occured ${error}`)
// }





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

// setTimeout(function(){
//     try{
//         console.log("HEY BUDDY");
//         loca;
//         console.log("hey i am practising try and catch");
//     } catch(error){
//         console.log("error occured");
//     }
// },2000)




//ERROR OBJECT
//When an error occurs,JS generates an object containing the details about it . the object is then passed as an argument to catch:
// For all built-in errors, the error object has two main properties:

// name
// Error name. For instance, for an undefined variable that’s "ReferenceError".
// message
// Textual message about error details.
// There are other non-standard properties available in most environments. One of most widely used and supported is:
// stack
// Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.
// try {
//     console.log("hey i am practising try and catch");
//     laaa();
//     console.log("hey i am practising try and catch");
// } catch (error) {
//     console.log(`Error has occured ${error.name}`)
//     console.log(error.message);
//     // console.log(error.stack);
// }


//Option "catch" binding : If we don't need error details, catch may omit it
// try {
//     // ...
//   } catch { // <-- without (err)
//     // ...
//   }



//Throwing our own errors
let json='{"age":30}';
try {
   user =JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data : no name");
        
    }

    blabla();
    console.log("user.name");
} catch (error) {
    if(error instanceof SyntaxError){
        console.log("JSON Error: "+error.message);
    }else{
        // throw error; //rethrow
    }
   
}