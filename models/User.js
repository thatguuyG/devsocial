const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    } ,//will be achieved using the gravatar plugin
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);