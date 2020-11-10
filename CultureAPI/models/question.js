const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const questionSchema = mongoose.Schema({
    topic: {type : String, require : true},
    question: {type : String, require : true},
    reponse: {type : String, require : true},
    information: {type : String, require : true},
});

questionSchema.plugin(random);

module.exports = mongoose.model('Question', questionSchema);