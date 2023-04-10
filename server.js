const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const port = process.env.PORT

const app = express()

let session = require('express-session')
let passport = require('./helper/ppConfig')

// Session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 36000000}
}));

// app.use(passport.initialize());
// app.use(passport.session());

// Sharing the information with all web pages.
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

// Import Routes
const authRoute = require('./routes/auth')


//mount Routes

app.use('/', authRoute)

mongoose.set('strictQuery', false);
// MongoDB Connection
mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
        console.log("MongoDB Connected Successfully")
)

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`Stock Exchange App is running on ${port}`);
})
