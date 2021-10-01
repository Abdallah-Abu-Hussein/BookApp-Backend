'use strict'

const express = require('express');
const cors =require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
const server = express();
server.use(cors());

const MONGO_SERVER = process.env.MONGO_SERVER
mongoose.connect(`${MONGO_SERVER}`);
const PORT = process.env.PORT;
const { getBookHandler} = require("./Modules/bookHandler");

//Routes
server.get('/',homeHandler);
server.get('/getBook',getBookHandler);
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