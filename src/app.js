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

    
    const secretQsn = req.body.secretQsn;
    const secretAns = req.body.secretAns;
    const age = req.headers.age;
    const password = req.headers.password;


});



module.exports = app;

