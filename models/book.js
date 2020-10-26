let mongoose = require ('mongoose');

//creating a model class
let bookModel = mongoose.Schema({
    first: String,
    last: String,
    number: Number,
    email: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);