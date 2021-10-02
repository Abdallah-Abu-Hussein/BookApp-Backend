'use strict';
import { bookModel } from './book';



function getBookHandler(req, res) {
let email = req.query.email;
bookModel.find({ email }, function (error, data) {
if (error) {

console.log('Error no data here check next time ', error);
}
else {
console.log(email);
console.log(data);
res.send(data);
}
})
}
export default{
    getBookHandler,
}