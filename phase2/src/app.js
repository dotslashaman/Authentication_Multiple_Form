const express = require("express");
const app = express();
app.use(express.json());

// goal : user sign up. if succcessfull you display correct signup message. then user logs in if 
// if creds are correct otherwise decline sign in. store all the details locally 