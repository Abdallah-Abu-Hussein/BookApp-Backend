"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author:String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema);

let seedBook = () => {
    let MYBooks = [
        new bookModel(
        {
            title: "Since",
            author:"jack",
            description: "since",
            status: 'missing',
            email: 'jack6543@gmail.com'
        }),
        new bookModel({
            title: "Why code fellows is boring ?",
            author:'Rami',
            description: "CS",
            status: 'fun',
            email: 'Abdallahu7654376543@gmail.com'
        }),
        new bookModel({
            title: "English",
            author:"zsh",
            description: "english",
            status: 'nice',
            email: 'orange001@gmail.com'
        })
    ]

    for(let i=0; i<MYBooks.length;i++){
        MYBooks[i].save();
    }
    return MYBooks;
}

module.exports = {
    seedBook,
    bookModel
}