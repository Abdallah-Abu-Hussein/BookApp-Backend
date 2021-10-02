'use strict'

const express = require('express');
const cors =require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
const server = express();
server.use(cors());
mongoose.connect(`mongodb://localhost:27017/book`);
const PORT = process.env.PORT;
const { getBookHandler} = require("./Modules/bookHandler");

//Routes
server.get('/',homeHandler);
//http://localhost:3001/book?email=
server.get('/book',getBookHandler);
server.get('*',everythingElseHandler);


function everythingElseHandler(req,res){
    res.status(404).send('NOT FOUND LOL ): ');
}

function homeHandler(req,res){
    res.send('all good ');
}


server.listen(PORT,()=>{
    console.log(`Listening on PORT${PORT}` );
})