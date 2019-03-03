const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
db call to put users in an array??
*/

const KudosSchema = new Schema({
    username: {
        type: String, //Schema.Types.ObjectId, how do i make this work?
        ref: "User"
    },
    toname: {
        type: String,
        trim: true,
        //enum: [called db.names array]
        require: "gotta go to someone"
    },
    kudos: {
        type: String,
        trim: true,
        required: "can't say nuthin'!"
    }
});

module.exports = mongoose.model('Kudos', KudosSchema)