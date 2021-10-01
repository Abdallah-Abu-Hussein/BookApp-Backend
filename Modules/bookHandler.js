'use strict';
const {bookModel} = require('./book');

let getBookHandler=(req,res) =>{
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