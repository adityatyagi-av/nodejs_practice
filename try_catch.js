try {
    console.log("hey i am practising try and catch");
    laaa();
    console.log("hey i am practising try and catch");
} catch (error) {
    console.log(`Error has occured ${error}`)
}

//try...catch only works for the runtime errors: It won't work if the code is syntatically wrong
//The JS engine first read the code, then it runs it. the errors that occurs on the reading phase are called "parse-time" errors and are unrecoverable (from inside that code).
try {
    {{{
} catch (error) {
    console.log("error")
}