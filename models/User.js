const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
add users? icebox it >.<
*/

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "gotta have a name"
    }
    // password: {
    //     type: String,
    //     trim: true,
    //     require: "gotta have a passcode"
    // },
});

module.exports = mongoose.model('Users', UserSchema)