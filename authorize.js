const authorize = (req,res,next)=>{
    const {user}=req.query
    if(user==='john'){
        req.user={name: 'aditya tyagi',id: 23,male: true}
        next();
    }
    else{
        res.status(401).send('Unauthorized user')
    }
   

}
module.exports = authorize