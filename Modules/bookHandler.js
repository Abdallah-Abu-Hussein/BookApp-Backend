'use strict';
const {bookModel} = require('./book');

function getBookHandler(req,res){
    bookModel.find().then(data =>{
        res.json(data);
    })
    .catch((error) =>{
        res.status(500).send('error NO data here to get :)')
    });
    }
module.exports={
    getBookHandler,
}