const mongoose = require('mongoose');





const noteSchema = new  mongoose.Schema({
    image:String,
    caption:String,


})

const noteModel = mongoose.model('post', noteSchema)

module.exports = noteModel