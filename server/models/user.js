var mongoose = require('mongoose')
var Users = mongoose.model('Users', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1

    }
});

module.exports = {Users};