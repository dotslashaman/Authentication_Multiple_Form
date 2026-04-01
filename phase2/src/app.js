const express = require("express");
const app = express();
app.use(express.json());

// goal : user sign up. if succcessfull you display correct signup message. then user logs in if 
// if creds are correct otherwise decline sign in. store all the details locally 
// accepting name , age , password and email 

const details = [];

const signMiddleWare = (req,res,next) => {
    if(!req.body.name || !req.body.age){
        return res.status(400).json({
            "msg" : "Name or Age is missing"
        });
    }else if(!req.headers.email || !req.headers.password){
        return res.status(400).json({
            "msg" : "Email or Password is missing"
        });
    }else{
        next();
    }
}

app.post('/signUp', signMiddleWare, (req,res) => {

   const newUser = {
    name : req.body.name,
    age : req.body.age,
    email : req.headers.email,
    password : req.headers.password
   }
   details.push(newUser);

   res.status(201).send("Sign Up Successful");
});

app.post('/signIn',signMiddleWare,(req,res) => {
    
});

app.get('/test', (req,res) => {
    res.send(details);
});


module.exports = app;
