const express = require("express");
const app = express();
app.use(express.json());

/* 
in header we'll need user age and password , in body we'll need user's secret question and ans
and it query we'll need user name and birthplace  - phase 1 
 

 make user regiestration and then authenticate from the stored data - phase 2
*/  


const authMiddle = (req,res,next) =>{
    const name = req.query.name;
    const birthplace = req.query.birthplace;
    if(name === 'Aman' && birthplace === 'Jamui'){
        next();
    }else{
        res.status(401).json({
            "msg" : "Sorry wrong info"
        });
    }
}


app.post('/authenticate', authMiddle, (req,res) => {

   
    if(!req.body.secretQsn || !req.body.secretAns){
        res.status(400).send("Missing body");
    }else if(!req.headers.age || !req.headers.password){
         res.status(400).send("Missing header");
    }
    const secretQsn = req.body.secretQsn;
    const secretAns = req.body.secretAns;
    const age = req.headers.age;
    const password = req.headers.password;

    if(secretQsn != 'What is ur fav car' || secretAns != 'Range Rover'){
        res.status(400).send("Secret Question/Ans is incorrect");
    }else if(age != 22 || password != 'hehe'){
        res.status(400).send("Age/Password is incorrect");
    }else{
        res.status(200).send("Welcome to the club");
    }

    
});



module.exports = app;

